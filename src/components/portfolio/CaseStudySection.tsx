import { motion } from "framer-motion";
import CinematicSection from "./CinematicSection";

const CaseStudySection = () => (
  <CinematicSection className="py-24 md:py-32 px-6">
    <div className="max-w-4xl mx-auto">
      <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4 font-body text-center">
        Deep Dive
      </p>
      <h2 className="cinema-heading text-3xl md:text-4xl text-center mb-12">Case Study</h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="cinema-card"
      >
        <h3 className="font-display text-2xl mb-8">NxDesk Ticketing Tool</h3>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              label: "Problem",
              text: "The existing ticketing system had inconsistent UI across devices, leading to poor usability and increased support tickets from internal users.",
            },
            {
              label: "Approach",
              text: "Redesigned the entire frontend with React.js and Tailwind CSS, focusing on responsive layouts, component reusability, and a cohesive design system.",
            },
            {
              label: "Solution",
              text: "Delivered 15+ responsive screens that improved cross-device usability. Reduced UI-related issues and created a scalable component architecture.",
            },
          ].map((block, i) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <p className="text-sm tracking-[0.15em] uppercase text-peach-deep mb-2 font-body">
                {block.label}
              </p>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                {block.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </CinematicSection>
);

export default CaseStudySection;
