import { motion } from "framer-motion";
import CinematicSection from "./CinematicSection";
import { ExternalLink, Users } from "lucide-react";
import siteSaibalaji from "@/assets/site-saibalaji.png";

const clientProjects = [
  {
    name: "Sai Balaji Motion Studio",
    url: "https://saibalaji-motion-studio.vercel.app/",
    image: siteSaibalaji,
    description: "Developed a client-based website for a motion studio. Visited the client location directly and worked on-site to gather requirements in person. Implemented specialized UI based on real-time feedback, focusing on responsiveness and clean design.",
    highlight: "On-site client interaction experience"
  }
];

const ClientWorkSection = () => (
  <CinematicSection id="client-work" className="py-8 md:py-10 px-6 bg-background">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col items-center mb-16 text-center">
        <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4 font-body">
          Specialized Experience
        </p>
        <h2 className="cinema-heading text-3xl md:text-4xl mb-4">
          Client Projects & Experience
        </h2>
        <div className="flex items-center gap-2 text-peach font-body text-sm bg-accent/5 px-4 py-2 rounded-full border border-accent/10">
          <Users size={16} />
          <span>Professional Client Delivery & Real-World Implementations</span>
        </div>
      </div>

      <div className="max-w-xl mx-auto">
        {clientProjects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="group relative bg-secondary/30 rounded-2xl overflow-hidden border border-border/50 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-2"
          >
            {/* Preview image */}
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-display text-2xl mb-1 group-hover:text-peach transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-accent text-xs font-bold tracking-wider uppercase">
                    {project.highlight}
                  </p>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-accent text-accent-foreground rounded-full hover:scale-110 transition-transform duration-300"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
              
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-8">
                {project.description}
              </p>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-peach transition-colors duration-300 group/btn"
              >
                Visit Website
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </CinematicSection>
);

export default ClientWorkSection;
