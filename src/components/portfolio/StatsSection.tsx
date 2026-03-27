import { motion } from "framer-motion";
import CinematicSection from "./CinematicSection";

const stats = [
  { value: "5+", label: "Projects Built" },
  { value: "15+", label: "UI Screens" },
  { value: "10+", label: "Components" },
  { value: "20+", label: "Issues Resolved" },
];

const StatsSection = () => (
  <CinematicSection className="py-20 px-6 section-dark">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="text-center"
          >
            <p className="font-display text-4xl md:text-5xl text-peach mb-2">{s.value}</p>
            <p className="text-primary-foreground/60 text-sm font-body">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </CinematicSection>
);

export default StatsSection;
