import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Hero Section */}
      <header className="max-w-4xl mx-auto pt-20 pb-12 px-6">
        <h1 className="text-5xl font-bold tracking-tight">Hi, I'm [Your Name]</h1>
        <p className="mt-4 text-xl text-slate-600 max-w-2xl">
          3rd Year Computer Science student at the University of Waterloo. 
          Building AI-driven tools and solving complex algorithmic problems.
        </p>
        <div className="flex gap-4 mt-6">
          <a href="#" className="p-2 bg-slate-900 text-white rounded-full hover:bg-slate-700 transition"><Github size={20} /></a>
          <a href="#" className="p-2 bg-slate-900 text-white rounded-full hover:bg-slate-700 transition"><Linkedin size={20} /></a>
          <a href="mailto:email@uwaterloo.ca" className="p-2 bg-slate-900 text-white rounded-full hover:bg-slate-700 transition"><Mail size={20} /></a>
        </div>
      </header>

      {/* Experience Section */}
      <section className="max-w-4xl mx-auto py-12 px-6 border-t border-slate-200">
        <h2 className="text-2xl font-bold mb-8">Work Experience</h2>
        <div className="space-y-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">Software Engineering Intern</h3>
                <p className="text-slate-500">Company Name • Waterloo, ON</p>
              </div>
              <span className="text-sm text-slate-400">Summer 2025</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-4xl mx-auto py-12 px-6 border-t border-slate-200">
        <h2 className="text-2xl font-bold mb-8">Selected Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard 
            title="FraudSentry" 
            desc="AI tool for detecting fraudulent financial transactions using machine learning."
            tags={["Python", "React", "FastAPI"]}
          />
          <ProjectCard 
            title="NinjaBrain Notes" 
            desc="Full-stack web application that automates study material generation."
            tags={["Next.js", "Node.js", "PostgreSQL"]}
          />
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ title, desc, tags }: { title: string; desc: string; tags: string[] }) {
  return (
    <div className="p-6 bg-white border border-slate-200 rounded-xl hover:shadow-lg transition">
      <div className="flex justify-between mb-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <ExternalLink size={18} className="text-slate-400" />
      </div>
      <p className="text-slate-600 text-sm mb-4">{desc}</p>
      <div className="flex gap-2">
        {tags.map(tag => (
          <span key={tag} className="px-2 py-1 bg-slate-100 text-xs font-medium rounded-md">{tag}</span>
        ))}
      </div>
    </div>
  );
}