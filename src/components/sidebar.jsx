"use client"

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { BarChart2, MessageCircle, Zap, Volume, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { motion } from "framer-motion";
import {useState} from "react";
import {MemeOverlay} from "@/components/MemeOverlay";

function Sidebar() {
    const pathname = usePathname();

    const [isFlashing, setIsFlashing] = useState(true); // 🔹 Track flashing state
    const [showMeme, setShowMeme] = useState(false);

    const handleUpgradeClick = () => {
        setIsFlashing(false);
        setShowMeme(true);
    };

    const handleCloseMeme = () => {
        setShowMeme(false)
    }

    const navItems = [
        { name: 'Dashboard', icon: <BarChart2 className="h-5 w-5" />, route: '/dashboard' },
        { name: 'Sounds', icon: <Volume className="h-5 w-5" />, route: '/sounds' },
        { name: 'Chat', icon: <MessageCircle className="h-5 w-5" />, route: '/chat' },
        { name: "Suggestion Form", icon: <Lightbulb className="h-5 w-5" />, route: '/suggestion-form' },
    ];

    return (
        <aside className="h-full bg-background w-64 border-r flex flex-col">
            <div className="p-6">
                <h2 className="text-2xl font-semibold">Menu</h2>
            </div>

            <nav className="flex-1 overflow-y-auto">
                <ul className="space-y-1 px-3">
                    {navItems.map((item) => {
                        const isActive = pathname === item.route;
                        return (
                            <li key={item.route}>
                                <Link href={item.route} passHref legacyBehavior>
                                    <Button
                                        variant={isActive ? "secondary" : "ghost"}
                                        className={cn(
                                            "w-full justify-start h-10",
                                            isActive ? "font-medium" : "font-normal"
                                        )}
                                        asChild
                                    >
                                        <a className="flex items-center gap-3">
                                            {item.icon}
                                            <span>{item.name}</span>
                                        </a>
                                    </Button>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <div className="p-4 mt-auto">
                <Card className="bg-primary/10 border-0 shadow-none">
                    <CardContent className="p-4">
                        <div className="flex items-center mb-3">
                            <Zap className="h-5 w-5 text-primary mr-2" />
                            <h3 className="font-medium">Upgrade Now For FREE!!!</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                            Choose a plan that aligns with your task and cognitive needs
                        </p>
                        <motion.div
                            animate={isFlashing ? { opacity: [1, 0.5, 1] } : {}}
                            transition={{ repeat: isFlashing ? Infinity : 0, duration: 1.5 }}
                        >
                            <Button
                                size="sm"
                                className="w-full"
                                onClick={handleUpgradeClick}
                            >
                                Go Ultimate.
                            </Button>
                        </motion.div>
                    </CardContent>
                </Card>
                <MemeOverlay
                    videoSrc="/memes/rickroll.mp4"
                    isVisible={showMeme}
                    onClose={handleCloseMeme}
                    closeButtonDelay={10000} // 10s delay before Close button appears
                    text = ""
                />
            </div>
        </aside>
    );
}

export default Sidebar;