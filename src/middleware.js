// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
//
// const isPublicRoute = createRouteMatcher(["/", "/sign-in(.*)", "/profile-setup", "/api(.*)"]);
//
// export default clerkMiddleware(async (auth, request) => {
//     const { user } = auth();
//
//     // Allow access to public routes
//     if (isPublicRoute(request)) return;
//
//     // Check if user is authenticated
//     if (!user) {
//         return (await auth()).redirectToSignIn();
//     }
//
//     // Check if profile is completed
//     if (!user.publicMetadata.profileCompleted) {
//         return Response.redirect(new URL("/profile-setup", request.url));
//     }
// });
//
// export const config = {
//     matcher: ["/((?!_next|.*\\..*).*)"],
// };

import { clerkMiddleware } from '@clerk/nextjs/server'

export default clerkMiddleware()

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
}