"use client";

import { useState } from "react";
import { User, Briefcase, Mail, Code, Terminal } from "lucide-react";
import Window from "./Window";
import Taskbar from "./Taskbar";
import DesktopIcon from "./DesktopIcon";

// Import contents from previous components to re-use inside windows
import Hero from "../Hero";
import Experience from "../Experience";
import Projects from "../Projects";

interface AppState {
    id: string;
    isOpen: boolean;
    isMinimized: boolean;
    zIndex: number;
}

const APPS = [
    { id: "about", title: "About Me", icon: <User size={24} />, content: <Hero /> },
    { id: "experience", title: "Experience", icon: <Briefcase size={24} />, content: <Experience /> },
    { id: "projects", title: "Projects", icon: <Code size={24} />, content: <Projects /> },
    { id: "contact", title: "Contact", icon: <Mail size={24} />, content: <div className="p-8 text-center"><h2 className="text-2xl mb-4 text-foreground">Get in Touch</h2><a href="mailto:rxiang@uwaterloo.ca" className="text-blue-500 hover:underline">rxiang@uwaterloo.ca</a></div> },
    { id: "terminal", title: "Terminal", icon: <Terminal size={24} />, content: <div className="p-4 font-mono text-sm text-green-400 bg-black h-full min-h-[300px]">&gt; Welcome to RyanOS v1.0<br />&gt; _</div> },
];

export default function OSLayout() {
    const [appStates, setAppStates] = useState<AppState[]>(
        APPS.map(app => ({ id: app.id, isOpen: false, isMinimized: false, zIndex: 1 }))
    );

    const [topZ, setTopZ] = useState(10);

    const openApp = (id: string) => {
        setAppStates(prev => {
            const app = prev.find(a => a.id === id);
            const newZ = topZ + 1;
            setTopZ(newZ);

            if (app?.isOpen) {
                // If already open, just focus and un-minimize
                return prev.map(a => a.id === id ? { ...a, isMinimized: false, zIndex: newZ } : a);
            }

            // Open new
            return prev.map(a => a.id === id ? { ...a, isOpen: true, isMinimized: false, zIndex: newZ } : a);
        });
    };

    const closeApp = (id: string) => {
        setAppStates(prev => prev.map(a => a.id === id ? { ...a, isOpen: false } : a));
    };

    const minimizeApp = (id: string) => {
        setAppStates(prev => prev.map(a => a.id === id ? { ...a, isMinimized: true } : a));
    };

    const focusApp = (id: string) => {
        const newZ = topZ + 1;
        setTopZ(newZ);
        setAppStates(prev => prev.map(a => a.id === id ? { ...a, zIndex: newZ, isMinimized: false } : a));
    };

    // Calculate active app (highest z-index that is open and not minimized)
    const activeApp = appStates
        .filter(a => a.isOpen && !a.isMinimized)
        .sort((a, b) => b.zIndex - a.zIndex)[0]?.id || null;

    return (
        <div className="h-screen w-screen overflow-hidden relative bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center">
            {/* Dim Overlay */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />

            {/* Desktop Grid */}
            <div className="relative z-0 p-8 grid grid-cols-1 gap-4 w-min">
                {APPS.map(app => (
                    <DesktopIcon
                        key={app.id}
                        id={app.id}
                        title={app.title}
                        icon={app.icon}
                        onDoubleClick={openApp}
                    />
                ))}
            </div>

            {/* Windows */}
            {APPS.map(app => {
                const state = appStates.find(a => a.id === app.id)!;
                return (
                    <div key={app.id} style={{ zIndex: state.zIndex, display: state.isOpen ? 'block' : 'none' }}>
                        <Window
                            id={app.id}
                            title={app.title}
                            isOpen={state.isOpen}
                            isActive={activeApp === app.id}
                            isMinimized={state.isMinimized}
                            onClose={closeApp}
                            onMinimize={minimizeApp}
                            onFocus={focusApp}
                            initialPosition={{ x: 100 + (APPS.indexOf(app) * 20), y: 50 + (APPS.indexOf(app) * 30) }}
                        >
                            {app.content}
                        </Window>
                    </div>
                );
            })}

            {/* Taskbar */}
            <Taskbar
                apps={APPS}
                openApps={appStates.filter(a => a.isOpen).map(a => a.id)}
                activeApp={activeApp}
                onAppClick={openApp}
            />
        </div>
    );
}
