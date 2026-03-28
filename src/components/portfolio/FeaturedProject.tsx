import { motion } from "framer-motion";
import CinematicSection from "./CinematicSection";
import { CheckCircle2, Layout, Zap, Users } from "lucide-react";

const FeaturedProject = () => (
  <CinematicSection id="featured-project" className="py-8 md:py-10 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col items-center mb-16 text-center">
        <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4 font-body">
          Premium Highlight
        </p>
        <h2 className="cinema-heading text-3xl md:text-4xl mb-4">
          Featured Project
        </h2>
        <div className="w-20 h-1 bg-accent rounded-full mb-8" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="cinema-card p-8 md:p-12 relative overflow-hidden bg-secondary/10 group border-border shadow-2xl"
      >
        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
           <Layout size={120} />
        </div>

        <div className="relative z-10">
          <h3 className="font-display text-3xl md:text-4xl mb-8 group-hover:text-peach transition-colors duration-500">
            Project Tracking & Budgeting System
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="space-y-4">
              <h4 className="flex items-center gap-2 font-display text-xl text-peach">
                <Zap size={18} /> Problem
              </h4>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                Managing multiple tasks and project workflows lacked visibility and structured tracking, creating communication gaps and efficiency bottlenecks.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="flex items-center gap-2 font-display text-xl text-peach">
                <Layout size={18} /> Approach
              </h4>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                Designed and developed a <span className="text-foreground">scalable system</span> using <span className="text-foreground">React.js, Tailwind CSS, and Node.js</span> as a <span className="text-foreground">Full Stack Project</span>. Focused on creating <span className="text-foreground">responsive UI components</span> with real-time feedback and structured data flow.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="flex items-center gap-2 font-display text-xl text-peach">
                <Users size={18} /> Impact
              </h4>
              <ul className="space-y-2 text-muted-foreground font-body text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="mt-1 text-peach shrink-0" />
                  <span>Managed 50+ tasks efficiently</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="mt-1 text-peach shrink-0" />
                  <span>Improved team productivity</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="mt-1 text-peach shrink-0" />
                  <span>Enhanced stakeholder visibility</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 flex flex-wrap gap-3">
             {["React.js", "MySQL", "Tailwind CSS", "Enterprise Solution"].map(tech => (
                <span key={tech} className="px-4 py-1.5 bg-background border border-border text-[10px] tracking-widest uppercase font-bold text-muted-foreground rounded-full">
                  {tech}
                </span>
             ))}
          </div>
        </div>
      </motion.div>
    </div>
  </CinematicSection>
);

export default FeaturedProject;
