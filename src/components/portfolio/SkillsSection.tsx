import { motion } from "framer-motion";
import CinematicSection from "./CinematicSection";

const categories = [
  { title: "Frontend", skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap"] },
  { title: "Backend", skills: ["Node.js"] },
  { title: "Programming", skills: ["Java", "Python", "C"] },
  { title: "Database", skills: ["MySQL", "MongoDB"] },
  { title: "Tools", skills: ["Git", "GitHub", "Postman"] },
];

const SkillsSection = () => (
  <CinematicSection id="skills" className="py-24 md:py-32 px-6 section-dark">
    <div className="max-w-6xl mx-auto">
      <p className="text-sm tracking-[0.2em] uppercase text-primary-foreground/50 mb-4 font-body text-center">
        Skills & Technologies
      </p>
      <h2 className="cinema-heading text-3xl md:text-4xl text-center mb-16 text-primary-foreground">
        My Toolkit
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: ci * 0.15 }}
          >
            <h3 className="text-sm tracking-[0.15em] uppercase text-peach mb-4 font-body">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, si) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: ci * 0.1 + si * 0.08 }}
                  className="px-4 py-2 bg-primary-foreground/10 text-primary-foreground/80 rounded-md text-sm font-body
                             hover:bg-accent hover:text-accent-foreground transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </CinematicSection>
);

export default SkillsSection;
