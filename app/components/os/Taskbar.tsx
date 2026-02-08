"use client";

import { motion } from "framer-motion";

interface AppDef {
    id: string;
    title: string;
    icon: React.ReactNode;
}

interface TaskbarProps {
    apps: AppDef[];
    openApps: string[];
    activeApp: string | null;
    onAppClick: (id: string) => void;
}

export default function Taskbar({ apps, openApps, activeApp, onAppClick }: TaskbarProps) {
    return (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-end gap-2 px-4 pb-2 pt-2 bg-white/20 dark:bg-black/20 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-2xl shadow-2xl">
                {apps.map((app) => {
                    const isOpen = openApps.includes(app.id);
                    const isActive = activeApp === app.id;

                    return (
                        <div key={app.id} className="relative flex flex-col items-center gap-1 group">
                            <motion.button
                                whileHover={{ scale: 1.1, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => onAppClick(app.id)}
                                className={`w-12 h-12 rounded-xl flex items-center justify-center text-white transition-all duration-300 ${isActive ? "bg-white/20 shadow-inner" : "hover:bg-white/10"
                                    }`}
                            >
                                {app.icon}
                            </motion.button>
                            <div className={`w-1 h-1 rounded-full bg-white transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`} />

                            {/* Tooltip */}
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                {app.title}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
