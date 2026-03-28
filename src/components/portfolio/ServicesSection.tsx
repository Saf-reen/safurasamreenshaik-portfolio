import { motion } from "framer-motion";
import CinematicSection from "./CinematicSection";
import { Layout, Palette, Box, Network, Zap } from "lucide-react";

const services = [
  { icon: Layout, title: "Responsive Web Apps", desc: "Craft high-performance, responsive single-page dev using modern frameworks like React.js, Tailwind CSS, and Node.js." },
  { icon: Palette, title: "Figma to React UI", desc: "Expertly translate Figma and Adobe XD designs into pixel-perfect, clean, and interactive React.js UI components with mobile-first responsiveness." },
  { icon: Box, title: "Scalable Component Systems", desc: "Develop professional design systems and shared component libraries with custom styles using Tailwind CSS for enterprise-level projects." },
  { icon: Network, title: "API & Backend Integration", desc: "Seamlessly connect frontend interfaces with RESTful APIs, backend services, and multi-tenant databases for a unified full stack experience." },
  { icon: Zap, title: "Performance Optimization", desc: "Optimize UI responsiveness and application performance with advanced testing strategies and industry-standard web development best practices." },
];

const ServicesSection = () => (
  <CinematicSection id="services" className="py-8 md:py-10 px-6">
    <div className="max-w-6xl mx-auto text-center">
      <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4 font-body">
        Technical Capabilities
      </p>
      <h2 className="cinema-heading text-3xl md:text-4xl mb-16">
        What I Can Do
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="p-8 bg-secondary/20 rounded-2xl border border-border group-hover:bg-background transition-all duration-700"
          >
            <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
               <s.icon size={22} />
            </div>
            <h3 className="font-display text-xl mb-3">{s.title}</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </CinematicSection>
);

export default ServicesSection;
