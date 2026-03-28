import { motion } from "framer-motion";
import CinematicSection from "./CinematicSection";

const steps = [
  { id: "01", title: "Analyze & Understand", desc: "Start by thoroughly understanding the project requirements and client needs to define a clear development path." },
  { id: "02", title: "Component Architecture", desc: "Break complex UI features into scalable, reusable components for better maintainability and performance." },
  { id: "03", title: "Develop & Design", desc: "Build responsive, visually stunning UI interfaces using React.js and Tailwind CSS with pixel perfection." },
  { id: "04", title: "Integration & Logic", desc: "Connect robust backend APIs and integrate complex business logic while maintaining high efficiency." },
  { id: "05", title: "Test & Refine", desc: "Conduct thorough testing across devices and browsers to polish and improve the overall user experience." },
];

const HowIWork = () => (
  <CinematicSection id="how-i-work" className="py-8 md:py-10 px-6 bg-secondary/5">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col items-center mb-16 text-center">
        <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4 font-body">
          Development Workflow
        </p>
        <h2 className="cinema-heading text-3xl md:text-4xl mb-4">
          How I Work
        </h2>
        <div className="w-16 h-1 bg-peach rounded-full" />
      </div>

      <div className="grid md:grid-cols-5 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            className="group relative flex flex-col items-center text-center p-6 bg-background rounded-2xl border border-border/50 hover:shadow-2xl hover:shadow-peach/10 transition-all duration-500"
          >
            <div className="text-peach-deep font-display text-4xl opacity-20 mb-6 group-hover:opacity-100 transition-opacity duration-500">
               {step.id}
            </div>
            <h3 className="font-display text-lg mb-3">{step.title}</h3>
            <p className="text-muted-foreground font-body text-xs leading-relaxed">
               {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </CinematicSection>
);

export default HowIWork;
