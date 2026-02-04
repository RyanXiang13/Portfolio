interface Job {
    role: string;
    company: string;
    location: string;
    period: string;
}

const experiences: Job[] = [
    {
        role: "Software Engineering Intern",
        company: "Company Name",
        location: "Waterloo, ON",
        period: "Summer 2025"
    },
    {
        role: "Software Engineering Intern",
        company: "Previous Corp",
        location: "Toronto, ON",
        period: "Fall 2024"
    },
    {
        role: "Full Stack Developer",
        company: "Startup Inc",
        location: "Remote",
        period: "Winter 2024"
    }
];

export default function Experience() {
    return (
        <section className="max-w-4xl mx-auto py-16 px-6">
            <h2 className="text-3xl font-serif font-bold mb-10 text-foreground">Work History</h2>
            <div className="space-y-12">
                {experiences.map((job, i) => (
                    <div key={i} className="group grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-baseline border-b border-border pb-8 last:border-0 last:pb-0">
                        <div className="md:col-span-1 text-sm text-muted font-medium uppercase tracking-wider">
                            {job.period}
                        </div>
                        <div className="md:col-span-3">
                            <h3 className="font-semibold text-xl text-foreground group-hover:text-muted transition-colors duration-300">
                                {job.role}
                            </h3>
                            <p className="text-muted mt-1">
                                {job.company} • {job.location}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
