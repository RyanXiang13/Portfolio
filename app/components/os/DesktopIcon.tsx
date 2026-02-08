"use client";

interface DesktopIconProps {
    id: string;
    title: string;
    icon: React.ReactNode;
    onDoubleClick: (id: string) => void;
}

export default function DesktopIcon({ id, title, icon, onDoubleClick }: DesktopIconProps) {
    return (
        <div
            className="flex flex-col items-center gap-2 p-4 w-24 rounded-lg hover:bg-white/10 cursor-pointer group transition-colors select-none"
            onDoubleClick={() => onDoubleClick(id)}
        >
            <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-xl shadow-lg flex items-center justify-center text-white transform group-hover:scale-105 transition-transform duration-200">
                {icon}
            </div>
            <span className="text-white text-xs font-medium drop-shadow-md text-center bg-black/20 px-2 py-0.5 rounded-full">{title}</span>
        </div>
    );
}
