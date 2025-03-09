import Sidebar from "@/components/sidebar";
import "../globals.css";

export default function ProtectedLayout({ children }) {
    return (
        <div className="grid grid-cols-[auto_1fr] h-screen overflow-hidden">
            <div className="h-screen">
                <Sidebar />
            </div>
            <div className="h-screen overflow-hidden">
                <main className="h-full overflow-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}