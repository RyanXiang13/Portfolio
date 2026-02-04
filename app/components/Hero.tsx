import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
    return (
        <header className="max-w-4xl mx-auto pt-24 pb-16 px-6 text-center md:text-left">
            <h1 className="text-6xl md:text-7xl font-serif font-bold tracking-tight text-foreground mb-6">
                Ryan Xiang
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-muted max-w-2xl leading-relaxed mx-auto md:mx-0">
                Computer Science Student at the <span className="text-foreground font-medium">University of Waterloo</span>.
                Building robust software across full-stack environments.
            </p>

            <div className="flex gap-6 mt-10 justify-center md:justify-start">
                <SocialLink href="https://github.com/RyanXiang13" icon={<Github size={22} />} label="GitHub" />
                <SocialLink href="#" icon={<Linkedin size={22} />} label="LinkedIn" />
                <SocialLink href="mailto:rxiang@uwaterloo.ca" icon={<Mail size={22} />} label="Email" />
            </div>
        </header>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-foreground border border-border rounded-full hover:bg-foreground hover:text-background transition-colors duration-300 group"
            aria-label={label}
        >
            {icon}
        </a>
    );
}
