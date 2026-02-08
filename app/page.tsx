import Link from "next/link";
import NetworkBackground from "./components/bento/NetworkBackground";
import { BentoGrid } from "./components/bento/BentoGrid";
import ProfileCard from "./components/bento/ProfileCard";
import StackCard from "./components/bento/StackCard";
import ProjectCard from "./components/bento/ProjectCard";
import ExperienceCard from "./components/bento/ExperienceCard";
import { BentoItem } from "./components/bento/BentoGrid";

export default function Portfolio() {
  return (
    <main className="min-h-screen relative text-gray-200 font-sans selection:bg-indigo-500/30">
      <NetworkBackground />

      <div className="relative z-10 py-12 md:py-24">
        <BentoGrid>
          {/* Row 1 & 2: Profile (2x2) */}
          <ProfileCard />

          {/* Row 1: Map/Location (1x1) - Placeholder concept */}
          <BentoItem className="col-span-1 min-h-[160px] flex flex-col justify-center items-center bg-[#151515] group">
            <h3 className="text-gray-500 text-sm font-medium mb-2 uppercase tracking-wider">Location</h3>
            <p className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">Waterloo, ON 🇨🇦</p>
          </BentoItem>

          {/* Row 1: Status (1x1) */}
          <BentoItem className="col-span-1 min-h-[160px] flex flex-col justify-center items-center bg-[#0d1611] border-green-900/30">
            <span className="relative flex h-3 w-3 mb-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <p className="text-sm font-medium text-green-400">Open to Work</p>
            <p className="text-xs text-green-500/50 mt-1">Summer 2025</p>
          </BentoItem>

          {/* Row 2: Tech Stack (2x1) */}
          <StackCard />

          {/* Row 3: Projects */}
          <ProjectCard
            title="FraudSentry"
            desc="Real-time financial fraud detection using Machine Learning. Processes 10k+ TPS."
            tags={["Python", "FastAPI", "React"]}
            color="bg-red-500"
            className="col-span-1 md:col-span-2"
          />
          <ProjectCard
            title="NinjaBrain"
            desc="AI Study Companion. Generates quizzes and summaries from lecture notes automatically."
            tags={["Next.js", "OpenAI", "PostgreSQL"]}
            color="bg-purple-500"
            className="col-span-1 md:col-span-2"
          />

          {/* Row 4: Experience */}
          <ExperienceCard />

          {/* Row 4: Contact/Links */}
          <BentoItem className="col-span-1 md:col-span-2 p-8 flex flex-col justify-center items-center text-center bg-indigo-600/10 border-indigo-500/20 hover:bg-indigo-600/20">
            <h2 className="text-2xl font-bold text-white mb-2">Let's build something.</h2>
            <p className="text-indigo-200 mb-6 max-w-sm">
              I'm always open to discussing new projects, internships, or just chatting about AI.
            </p>
            <a
              href="mailto:rxiang@uwaterloo.ca"
              className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-colors"
            >
              Get in touch
            </a>
          </BentoItem>

        </BentoGrid>

        <footer className="text-center text-gray-600 text-sm mt-12 pb-6">
          © {new Date().getFullYear()} Ryan Xiang. Built with Next.js & Tailwind.
        </footer>
      </div>
    </main>
  );
}