import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const fullText = "I build scalable and responsive web applications using modern technologies.";
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTyped(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 35);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center peach-gradient relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6 font-body"
        >
          Full Stack Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="cinema-heading text-5xl md:text-7xl lg:text-8xl mb-6"
        >
          Hi, I'm{" "}
          <span className="text-peach-deep">Safura</span>
          <br />
          Samreen
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-muted-foreground font-body text-lg md:text-xl max-w-2xl mx-auto mb-10 h-16"
        >
          {typed}
          <span className="animate-pulse">|</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#projects" className="peach-btn">
            View Projects
          </a>
          <a href="#contact" className="peach-outline-btn">
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-foreground/20 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-foreground/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
