import { motion } from "framer-motion";
import CinematicSection from "./CinematicSection";

const timeline = [
  {
    role: "Full Stack Developer",
    company: "Sria Infotech",
    period: "Oct 2025 – Present",
    points: [
      "Built Project Tracking Module managing 50+ tasks",
      "Improved application performance by 25%",
      "Resolved 20+ UI and integration issues",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Sria Infotech",
    period: "Feb 2025 – Sept 2025",
    points: [
      "Built 15+ responsive UI screens",
      "Created reusable component libraries",
      "Deployed 5+ production websites",
    ],
  },
];

const ExperienceSection = () => (
  <CinematicSection id="experience" className="py-24 md:py-32 px-6 section-dark">
    <div className="max-w-4xl mx-auto">
      <p className="text-sm tracking-[0.2em] uppercase text-primary-foreground/50 mb-4 font-body text-center">
        Career Journey
      </p>
      <h2 className="cinema-heading text-3xl md:text-4xl text-center mb-16 text-primary-foreground">
        Experience
      </h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary-foreground/20 -translate-x-1/2 hidden md:block" />

        {timeline.map((item, i) => (
          <motion.div
            key={item.role}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className={`relative mb-12 md:w-1/2 ${
              i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
            }`}
          >
            {/* Dot */}
            <div className="hidden md:block absolute top-2 w-3 h-3 bg-accent rounded-full"
              style={{ [i % 2 === 0 ? "right" : "left"]: "-6px" }}
            />

            <p className="text-peach text-sm font-body mb-1">{item.period}</p>
            <h3 className="font-display text-xl text-primary-foreground mb-1">{item.role}</h3>
            <p className="text-primary-foreground/60 text-sm font-body mb-3">{item.company}</p>
            <ul className="space-y-2">
              {item.points.map((pt) => (
                <li key={pt} className="text-primary-foreground/70 text-sm font-body flex gap-2">
                  <span className="text-peach mt-1">•</span>
                  {pt}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </CinematicSection>
);

export default ExperienceSection;
