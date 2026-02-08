"use client";

import { BentoItem } from "./BentoGrid";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ProfileCard() {
    return (
        <BentoItem className="col-span-1 md:col-span-2 row-span-2 p-8 flex flex-col justify-between bg-gradient-to-br from-[#111] to-[#0a0a0a]">
            <div>
                <div className="w-20 h-20 rounded-full bg-indigo-500/20 flex items-center justify-center mb-6 border border-indigo-500/30">
                    <span className="text-3xl">👨‍💻</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">
                    Ryan Xiang
                </h1>
                <p className="text-xl text-indigo-400 font-medium mb-4">
                    AI Engineer & Full Stack Dev
                </p>
                <p className="text-gray-400 leading-relaxed max-w-md">
                    Building intelligence into the web. CS student at <span className="text-white font-medium">UWaterloo</span> crafting systems that scale.
                </p>
            </div>

            <div className="flex gap-4 mt-8">
                <SocialIcon href="https://github.com/RyanXiang13" icon={<Github size={20} />} />
                <SocialIcon href="#" icon={<Linkedin size={20} />} />
                <SocialIcon href="mailto:rxiang@uwaterloo.ca" icon={<Mail size={20} />} />
            </div>
        </BentoItem>
    );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:scale-110 transition-all duration-300 text-gray-300 hover:text-white"
        >
            {icon}
        </a>
    );
}
