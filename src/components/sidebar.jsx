import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';  // Import the Link component from Next.js
import { Plus, BarChart2, MessageCircle, Zap, Volume, User, Clock } from 'lucide-react';  // Assuming you're using Lucide icons

function Sidebar() {
    return (
        <aside className="bg-white w-64 border-r border-gray-200 flex flex-col">
            <div className="p-4">
                <h2 className="text-2xl font-semibold text-gray-800">Menu</h2> {/* Sidebar heading */}
            </div>

            <nav className="flex-1 overflow-y-auto py-4">
                <ul className="space-y-1 px-2">
                    {[
                        { name: 'Dashboard', icon: <BarChart2 className="h-4 w-4 mr-2" />, route: '/dashboard' },
                        { name: 'Sounds', icon: <Volume className="h-4 w-4 mr-2" />, route: '/sounds' },
                        { name: 'Chat', icon: <MessageCircle className="h-4 w-4 mr-2" />, route: '/chat' }
                    ].map((item, index) => (
                        <li key={index}>
                            <Link href={item.route}>
                                <Button
                                    variant="ghost"
                                    className="w-full justify-start text-gray-700"
                                >
                                    {item.icon}
                                    {item.name}
                                </Button>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="p-4 border-t border-gray-200">
                <Card className="bg-indigo-50 border-0">
                    <CardContent className="p-4">
                        <div className="flex items-center mb-2">
                            <Zap className="h-5 w-5 text-indigo-600 mr-2" />
                            <h3 className="font-semibold text-indigo-700">Upgrade Now</h3>
                        </div>
                        <p className="text-sm text-indigo-700 mb-3">
                            Choose a plan that aligns with your task and cognitive needs
                        </p>
                        <Button size="sm" className="w-full bg-indigo-600 hover:bg-indigo-700">
                            Go Ultimate
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </aside>
    );
}

export default Sidebar;
