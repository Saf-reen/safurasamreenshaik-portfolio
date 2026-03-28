import { motion } from "framer-motion";
import CinematicSection from "./CinematicSection";
import { Quote } from "lucide-react";

const WhyHireMe = () => (
  <CinematicSection id="why-hire-me" className="py-8 md:py-10 px-6 bg-secondary/10">
    <div className="max-w-4xl mx-auto text-center">
      <div className="flex flex-col items-center mb-16">
        <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4 font-body">
          The Value I Bring
        </p>
        <h2 className="cinema-heading text-3xl md:text-4xl mb-4">
          Why Hire Me?
        </h2>
        <div className="w-12 h-1 bg-peach rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative p-10 md:p-16 bg-background rounded-3xl border border-border/50 shadow-2xl"
      >
        <div className="absolute top-0 left-0 p-8 text-peach opacity-10">
           <Quote size={80} fill="currentColor" />
        </div>
        
        <div className="relative z-10">
          <p className="font-display text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed italic mb-8">
            "I provide hands-on expertise in <span className="text-foreground">Full Stack Project</span> development, building <span className="text-foreground">scalable systems</span> and <span className="text-foreground">Responsive Web Apps</span>. I focus on <span className="text-foreground">Figma to React</span> implementation to deliver <span className="text-foreground">high-performance applications</span> that achieve real-world impact."
          </p>
          
          <div className="inline-flex items-center gap-4 py-2 px-6 bg-accent/20 border border-accent/20 rounded-full">
             <div className="w-10 h-10 rounded-full bg-peach flex items-center justify-center font-display text-xl text-peach-deep">
                S
             </div>
             <div className="text-left">
                <p className="text-sm font-bold uppercase tracking-widest text-foreground">Safura Samreen</p>
                <p className="text-[10px] tracking-widest text-muted-foreground uppercase font-medium">Developer Trainee | Sria Infotech</p>
             </div>
          </div>
        </div>
      </motion.div>
    </div>
  </CinematicSection>
);

export default WhyHireMe;
