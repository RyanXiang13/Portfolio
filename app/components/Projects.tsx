import { ExternalLink, ArrowUpRight } from "lucide-react";

interface Project {
    title: string;
    desc: string;
    tags: string[];
    link?: string;
}

const projects: Project[] = [
    {
        title: "FraudSentry",
        desc: "AI-powered tool designed to detect fraudulent financial transactions in real-time using advanced machine learning algorithms.",
        tags: ["Python", "React", "FastAPI"],
        link: "#"
    },
    {
        title: "NinjaBrain Notes",
        desc: "A comprehensive full-stack web application that leverages generative AI to automate the creation of study materials and summaries.",
        tags: ["Next.js", "Node.js", "PostgreSQL"],
        link: "#"
    }
];

export default function Projects() {
    return (
        <section className="max-w-4xl mx-auto py-16 px-6">
            <h2 className="text-3xl font-serif font-bold mb-10 text-foreground">Selected Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <div key={project.title} className="flex flex-col h-full bg-card border border-border p-6 rounded-lg hover:border-foreground transition-colors duration-300 group">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="font-semibold text-xl text-foreground">{project.title}</h3>
                            <a href={project.link} className="text-muted group-hover:text-foreground transition-colors">
                                <ArrowUpRight size={20} />
                            </a>
                        </div>
                        <p className="text-muted leading-relaxed mb-6 flex-grow">
                            {project.desc}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-xs font-medium text-foreground rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
