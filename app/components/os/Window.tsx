"use client";

import { motion, useDragControls } from "framer-motion";
import { X, Minus, Square } from "lucide-react";
import { useRef } from "react";

interface WindowProps {
    id: string;
    title: string;
    isOpen: boolean;
    isActive: boolean;
    isMinimized: boolean;
    onClose: (id: string) => void;
    onMinimize: (id: string) => void;
    onFocus: (id: string) => void;
    children: React.ReactNode;
    initialPosition?: { x: number; y: number };
}

export default function Window({
    id,
    title,
    isOpen,
    isActive,
    isMinimized,
    onClose,
    onMinimize,
    onFocus,
    children,
    initialPosition = { x: 100, y: 50 },
}: WindowProps) {
    const constraintsRef = useRef(null);

    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
                scale: isMinimized ? 0 : 1,
                opacity: isMinimized ? 0 : 1,
                y: isMinimized ? 500 : 0
            }}
            transition={{ type: "spring", bounce: 0.1, duration: 0.3 }}
            className={`absolute top-0 left-0 w-full max-w-2xl bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col ${isActive ? "z-50 ring-1 ring-white/30" : "z-10"
                }`}
            style={{ left: initialPosition.x, top: initialPosition.y }}
            drag
            dragMomentum={false}
            onMouseDown={() => onFocus(id)}
        >
            {/* Title Bar */}
            <div
                className="h-10 bg-gray-100/50 dark:bg-white/5 border-b border-white/10 flex items-center justify-between px-3 cursor-grab active:cursor-grabbing select-none"
            >
                <div className="flex gap-2">
                    <button
                        onClick={(e) => { e.stopPropagation(); onClose(id); }}
                        className="w-3.5 h-3.5 rounded-full bg-red-400 hover:bg-red-500 border border-red-500/20 flex items-center justify-center group text-[8px] text-red-900 opacity-80 hover:opacity-100"
                    >
                        <X size={8} className="opacity-0 group-hover:opacity-100" />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); onMinimize(id); }}
                        className="w-3.5 h-3.5 rounded-full bg-yellow-400 hover:bg-yellow-500 border border-yellow-500/20 flex items-center justify-center group text-[8px] text-yellow-900 opacity-80 hover:opacity-100"
                    >
                        <Minus size={8} className="opacity-0 group-hover:opacity-100" />
                    </button>
                    <button
                        className="w-3.5 h-3.5 rounded-full bg-green-400 hover:bg-green-500 border border-green-500/20 flex items-center justify-center group text-[8px] text-green-900 opacity-80 hover:opacity-100"
                    >
                        <Square size={6} className="opacity-0 group-hover:opacity-100 fill-current" />
                    </button>
                </div>
                <div className="text-xs font-medium text-gray-600 dark:text-gray-300">{title}</div>
                <div className="w-12" /> {/* Spacer for balance */}
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto p-0 min-h-[400px] max-h-[60vh] bg-white/50 dark:bg-black/50">
                {children}
            </div>
        </motion.div>
    );
}
