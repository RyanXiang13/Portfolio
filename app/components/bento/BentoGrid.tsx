"use client";

import { motion } from "framer-motion";

export function BentoGrid({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.1,
                    },
                },
            }}
            className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto p-4 md:p-8 \${className}`}
        >
            {children}
        </motion.div>
    );
}

export function BentoItem({
    children,
    className = "",
    centered = false,
}: {
    children: React.ReactNode;
    className?: string;
    centered?: boolean;
}) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
            }}
            className={`
        bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-colors duration-500
        \${centered ? "flex flex-col items-center justify-center text-center" : ""}
        \${className}
      `}
        >
            {children}
        </motion.div>
    );
}
