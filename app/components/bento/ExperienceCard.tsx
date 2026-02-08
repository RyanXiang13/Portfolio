"use client";

import { BentoItem } from "./BentoGrid";

export default function ExperienceCard() {
    return (
        <BentoItem className="col-span-1 md:col-span-2 row-span-2 p-6 md:p-8">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Experience
            </h3>

            <div className="space-y-8 relative before:absolute before:left-[5px] before:top-2 before:h-full before:w-[1px] before:bg-white/10">
                <TimelineItem
                    role="Software Eng Intern"
                    company="Company Name"
                    date="Summer 2025"
                />
                <TimelineItem
                    role="Software Eng Intern"
                    company="Previous Corp"
                    date="Fall 2024"
                />
                <TimelineItem
                    role="Full Stack Dev"
                    company="Startup Inc"
                    date="Winter 2024"
                />
            </div>
        </BentoItem>
    );
}

function TimelineItem({ role, company, date }: { role: string; company: string; date: string }) {
    return (
        <div className="pl-6 relative">
            <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-[#222] border border-white/20" />
            <div className="flex justify-between items-baseline mb-1">
                <h4 className="text-white font-medium">{role}</h4>
                <span className="text-xs text-gray-500 font-mono">{date}</span>
            </div>
            <p className="text-sm text-gray-400">{company}</p>
        </div>
    );
}
