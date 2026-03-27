import { motion } from "framer-motion";
import CinematicSection from "./CinematicSection";

const projects = [
  {
    title: "NxDesk Ticketing Tool",
    description: "Built 15+ responsive UI screens with React.js and Tailwind CSS. Improved usability across devices with pixel-perfect, mobile-first implementation.",
    tech: ["React.js", "Tailwind CSS", "REST API"],
  },
  {
    title: "Smart Check UI Components",
    description: "Created 10+ reusable components establishing a consistent design system. Reduced development time by ~30% across the platform.",
    tech: ["React.js", "Component Library", "Tailwind CSS"],
  },
  {
    title: "e-Rental System",
    description: "A web-based house rental platform focused on UI/UX and efficiency — digitizing the entire rental process from listings to agreements.",
    tech: ["React.js", "Node.js", "MySQL"],
  },
  {
    title: "Fake Social Media Detection",
    description: "ML-based system detecting fake social media accounts using behavior analysis with Artificial Neural Networks for pattern recognition.",
    tech: ["Python", "ANN", "Machine Learning"],
  },
];

const ProjectsSection = () => (
  <CinematicSection id="projects" className="py-24 md:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4 font-body text-center">
        Selected Work
      </p>
      <h2 className="cinema-heading text-3xl md:text-4xl text-center mb-16">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className="cinema-card group"
          >
            <div className="h-2 w-12 bg-accent rounded-full mb-6 group-hover:w-20 transition-all duration-500" />
            <h3 className="font-display text-xl mb-3">{p.title}</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full font-body"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </CinematicSection>
);

export default ProjectsSection;
