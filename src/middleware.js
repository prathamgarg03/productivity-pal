import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/", "/sign-in(.*)", "/profile-setup", "/api(.*)"]);

export default clerkMiddleware(async (auth, request) => {
    const { user } = auth();

    // Allow access to public routes
    if (isPublicRoute(request)) return;

    // Check if user is authenticated
    if (!user) {
        return (await auth()).redirectToSignIn();
    }

    // Check if profile is completed
    if (!user.publicMetadata.profileCompleted) {
        return Response.redirect(new URL("/profile-setup", request.url));
    }
});

export const config = {
    matcher: ["/((?!_next|.*\\..*).*)"],
};
