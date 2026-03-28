import { motion } from "framer-motion";
import CinematicSection from "./CinematicSection";

import { useEffect, useState } from "react";

const Counter = ({ value, label, i }: { value: string, label: string, i: number }) => {
  const [count, setCount] = useState(0);
  const target = parseInt(value.replace("+", ""));

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const step = (target / duration) * 10;
    
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 10);
    return () => clearInterval(interval);
  }, [target]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      className="text-center group"
    >
      <p className="font-display text-4xl md:text-5xl lg:text-6xl text-peach mb-4 flex items-center justify-center">
        {count}+
      </p>
      <div className="flex flex-col items-center">
        <p className="text-primary-foreground/90 text-sm md:text-base font-bold uppercase tracking-widest group-hover:text-peach transition-colors duration-500">{label}</p>
        <div className="w-8 h-1 bg-peach opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-2 rounded-full" />
      </div>
    </motion.div>
  );
};

const stats = [
  { value: "7+", label: "Live Websites Delivered" },
  { value: "50+", label: "Tasks Managed" },
  { value: "25+", label: "UI Screens Built" },
  { value: "20+", label: "Issues Resolved" },
];

const StatsSection = () => (
  <CinematicSection className="py-8 md:py-10 px-6 section-dark">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
        {stats.map((s, i) => (
          <Counter key={s.label} value={s.value} label={s.label} i={i} />
        ))}
      </div>
    </div>
  </CinematicSection>
);

export default StatsSection;
