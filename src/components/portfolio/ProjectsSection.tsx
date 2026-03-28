import { motion } from "framer-motion";
import CinematicSection from "./CinematicSection";

const projects = [
  {
    title: "Project Management & Budgeting Tool",
    description: "Built a responsive web application to manage production tasks, milestones, and project budget flow. Implemented scalable UI components with advanced data tracking and real-time visibility.",
    tech: ["React.js", "Tailwind CSS", "MySQL"],
  },
  {
    title: "NxDesk Product Suite",
    description: "Developed 15+ responsive UI screens and cross-platform layouts as a Full Stack Project. Integrated scalable React components with seamless API connectivity for production systems.",
    tech: ["React.js", "Tailwind CSS", "REST API"],
  },
  {
    title: "Smart Check Design System",
    description: "Architected a modular component library for enterprise-level scalability. Focused on performance optimization and reusable UI patterns to reduce development cycles.",
    tech: ["React.js", "Component Library", "Tailwind CSS"],
  },
  {
    title: "e-Rental Marketplace",
    description: "Built a comprehensive full stack house rental platform digitizing property listing and discovery. Integrated secure database management with a responsive mobile-first UI.",
    tech: ["React.js", "MySQL", "Node.js"],
  },
  {
    title: "Account Detection System",
    description: "AI-based platform for detecting fraudulent social media presence using Machine Learning and pattern recognition algorithms.",
    tech: ["Python", "ANN", "ML"],
  },
];

const ProjectsSection = () => (
  <CinematicSection id="projects" className="py-8 md:py-10 px-6">
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
