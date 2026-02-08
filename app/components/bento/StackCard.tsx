"use client";

import { BentoItem } from "./BentoGrid";
import { motion } from "framer-motion";

const stack = [
    "Python", "PyTorch", "TensorFlow", "FastAPI", "Next.js", "TypeScript", "PostgreSQL", "Docker", "AWS", "Git"
];

export default function StackCard() {
    return (
        <BentoItem className="col-span-1 md:col-span-2 p-6 overflow-hidden relative group">
            <div className="absolute inset-0 bg-indigo-500/5 group-hover:bg-indigo-500/10 transition-colors" />
            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-4 relative z-10">My Arsenal</h3>

            <div className="flex flex-wrap gap-2 relative z-10">
                {stack.map((tech) => (
                    <span
                        key={tech}
                        className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 font-mono hover:border-indigo-500/50 hover:text-indigo-300 transition-colors cursor-default"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </BentoItem>
    );
}
