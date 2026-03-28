import { motion } from "framer-motion";
import CinematicSection from "./CinematicSection";
import { ExternalLink } from "lucide-react";

interface TimelineLink {
  label: string;
  url: string;
}

interface TimelineItem {
  role: string;
  company: string;
  period: string;
  points: string[];
  websites?: TimelineLink[];
}

const timeline: TimelineItem[] = [
  {
    role: "Developer Trainee",
    company: "Sria Infotech",
    period: "Oct 2025 – Present",
    points: [
      "Developed a <span className='text-foreground font-medium'>Project Tracking & Budgeting System</span> to manage 50+ production tasks and milestones",
      "Gained on-site client exposure as a <span className='text-foreground font-medium'>Full Stack Developer</span>, gathering requirements and implementing UI (Sai Balaji)",
      "Implemented responsive features with <span className='text-foreground font-medium'>React.js and Tailwind CSS</span> improving team coordination",
      "Worked on resource allocation and budgeting concepts in a professional <span className='text-foreground font-medium'>Production Environment</span>",
      "Enhanced production websites through <span className='text-foreground font-medium'>Performance Optimization</span>, improving load times by ~25%",
      "Resolved 20+ UI and API integration issues across multiple client projects",
      "Collaborated directly with team members to ensure scalable and high-quality software delivery",
    ],
    websites: [
      { label: "onfocussoftware.com", url: "https://onfocussoftware.com" },
      { label: "sriainfotech.com", url: "https://sriainfotech.com" },
      { label: "saibalaji-motion-studio.app", url: "https://saibalaji-motion-studio.vercel.app/" },
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Sria Infotech",
    period: "Feb 2025 – Sept 2025",
    points: [
      "Developed 15+ responsive UI screens for NxDesk (Ticketing Tool)",
      "Built 10+ reusable UI components (Smart Check)",
      "Reduced development time by ~30%",
    ],
    websites: [
      { label: "nxsys.in", url: "https://nxsys.in" },
      { label: "nxgentechacademy.com", url: "https://nxgentechacademy.com" },
      { label: "sriabioenergy.com", url: "https://sriabioenergy.com" },
    ],
  },
];

const ExperienceSection = () => (
  <CinematicSection id="experience" className="py-8 md:py-10 px-6 section-dark">
    <div className="max-w-4xl mx-auto">
      <p className="text-sm tracking-[0.2em] uppercase text-primary-foreground/50 mb-4 font-body text-center">
        Career Journey
      </p>
      <h2 className="cinema-heading text-3xl md:text-4xl text-center mb-16 text-primary-foreground">
        Experience
      </h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary-foreground/20 md:-translate-x-1/2" />

        {timeline.map((item, i) => (
          <motion.div
            key={item.period}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className={`relative mb-16 pl-10 md:pl-0 md:w-1/2 ${
              i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
            }`}
          >
            {/* Dot - mobile */}
            <div className="md:hidden absolute left-2.5 top-2 w-3 h-3 bg-accent rounded-full" />
            {/* Dot - desktop */}
            <div
              className="hidden md:block absolute top-2 w-3 h-3 bg-accent rounded-full"
              style={{ [i % 2 === 0 ? "right" : "left"]: "-6px" }}
            />

            <p className="text-peach text-sm font-body mb-1">{item.period}</p>
            <h3 className="font-display text-xl text-primary-foreground mb-1">{item.role}</h3>
            <p className="text-primary-foreground/60 text-sm font-body mb-3">{item.company}</p>
            <ul className="space-y-2 mb-4">
              {item.points.map((pt) => (
                <li key={pt} className="text-primary-foreground/70 text-sm font-body flex gap-2">
                  <span className="text-peach mt-0.5 shrink-0">•</span>
                  <span dangerouslySetInnerHTML={{ __html: pt }} />
                </li>
              ))}
            </ul>

            {item.websites && (
              <div>
                <p className="text-xs tracking-[0.15em] uppercase text-peach mb-2 font-body">
                  Websites Enhanced / Deployed
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.websites.map((w) => (
                    <a
                      key={w.url}
                      href={w.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full
                                 bg-primary-foreground/10 text-primary-foreground/80
                                 hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-body"
                    >
                      {w.label}
                      <ExternalLink size={10} />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </CinematicSection>
);

export default ExperienceSection;
