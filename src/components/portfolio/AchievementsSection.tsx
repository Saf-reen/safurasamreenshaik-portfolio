import { motion } from "framer-motion";
import CinematicSection from "./CinematicSection";
import { Star, Rocket, Trophy } from "lucide-react";

const items = [
  { icon: Star, title: "Star Performer Award", desc: "Recognized at Sria Infotech for outstanding contributions and consistent delivery of quality work" },
  { icon: Rocket, title: "Production Websites", desc: "Successfully built and deployed multiple production-level websites used by real businesses" },
  { icon: Trophy, title: "Performance Optimizer", desc: "Improved application performance by ~25% and enhanced UI quality across multiple projects" },
];

const AchievementsSection = () => (
  <CinematicSection id="achievements" className="py-24 md:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4 font-body text-center">
        Recognition
      </p>
      <h2 className="cinema-heading text-3xl md:text-4xl text-center mb-16">Achievements</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="text-center group"
          >
            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-secondary flex items-center justify-center
                          group-hover:bg-accent transition-colors duration-500">
              <item.icon size={22} className="text-muted-foreground group-hover:text-accent-foreground transition-colors duration-500" />
            </div>
            <h3 className="font-display text-lg mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm font-body">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </CinematicSection>
);

export default AchievementsSection;
