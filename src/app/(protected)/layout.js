import Sidebar from "@/components/sidebar"; // Make sure this path is correct
import "../globals.css"; // Make sure to import any necessary global styles

// Google font setup


export default function ProtectedLayout({ children }) {
    return (

        <div className="flex bg-gray-100">  {/* Ensure background color is applied */}
            <Sidebar className="w-64 bg-gray-800 text-white" />

            <div className="flex-1">
                <main className="p-6 bg-white">
                    {children}
                </main>
            </div>

        </div>
    );
}
