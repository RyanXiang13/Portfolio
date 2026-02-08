"use client";

import { BentoItem } from "./BentoGrid";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
    title: string;
    desc: string;
    tags: string[];
    color: string;
    className?: string; // Allow overriding col/row spans
}

export default function ProjectCard({ title, desc, tags, color, className = "" }: ProjectCardProps) {
    return (
        <BentoItem className={`p-6 flex flex-col justify-between group \${className}`}>
            <div>
                <div className="flex justify-between items-start mb-4">
                    <div className={`w-10 h-10 rounded-lg \${color} flex items-center justify-center text-white font-bold opacity-80 group-hover:opacity-100 transition-opacity`}>
                        {title[0]}
                    </div>
                    <ArrowUpRight className="text-gray-500 group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:translate-x-1 transition-transform">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{desc}</p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
                {tags.map(tag => (
                    <span key={tag} className="text-xs text-gray-500 font-mono">#{tag}</span>
                ))}
            </div>
        </BentoItem>
    );
}
