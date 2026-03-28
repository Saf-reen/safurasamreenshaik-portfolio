import { motion } from "framer-motion";
import CinematicSection from "./CinematicSection";
import { BookOpen, Server, Layers, Settings } from "lucide-react";

const LearningItem = ({ Icon, title, i }: { Icon: any, title: string, i: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: i * 0.1 }}
    className="flex items-center gap-4 p-5 bg-background border border-border/50 rounded-2xl hover:border-peach/50 hover:shadow-2xl hover:shadow-peach/10 transition-all duration-500"
  >
    <div className="w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-accent/20">
       <Icon size={20} />
    </div>
    <div className="text-left">
       <h4 className="font-display text-lg mb-0.5">{title}</h4>
       <p className="text-[10px] tracking-widest text-muted-foreground uppercase font-bold">Actively Advancing</p>
    </div>
  </motion.div>
);

const CurrentlyLearning = () => (
  <CinematicSection id="currently-learning" className="py-8 md:py-10 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
      <div className="max-w-md text-center md:text-left">
        <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4 font-body">
          Future Focus
        </p>
        <h2 className="cinema-heading text-3xl md:text-4xl mb-6">
          Currently Learning
        </h2>
        <p className="text-muted-foreground font-body text-sm leading-relaxed mb-10">
           Actively learning backend development, system design, and advanced React patterns to build scalable full stack applications and high-performance production systems.
        </p>
        <div className="flex items-center gap-3 text-peach font-body text-sm bg-accent/5 px-6 py-3 rounded-full border border-accent/10 shadow-lg shadow-peach/5">
           <BookOpen size={18} />
           <span>Continuous Growth Mindset</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 w-full max-w-lg">
        <LearningItem i={0} Icon={Server} title="Backend Development (Node.js / APIs)" />
        <LearningItem i={1} Icon={Layers} title="Advanced React Patterns" />
        <LearningItem i={2} Icon={Settings} title="System Design Basics" />
      </div>
    </div>
  </CinematicSection>
);

export default CurrentlyLearning;
