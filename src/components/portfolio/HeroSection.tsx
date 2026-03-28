import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Linkedin, Mail, Twitter } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  const fullText = "Full Stack Developer specializing in React.js, Tailwind CSS, and Node.js, building scalable and high-performance web applications.";
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
      {/* Profile Photo - Top-Right/Absolute */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-10 right-10 z-10 hidden md:block"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-24 h-24 rounded-full overflow-hidden border-2 border-accent/20 shadow-md hover:shadow-xl hover:shadow-accent/10 transition-shadow duration-500"
        >
          <img
            // src={profileImg}
            src="/safura_.jpeg"
            alt="Safura Samreen - Full Stack Developer"
            className="w-full h-full object-cover grayscale-0 hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6 font-body"
        >
          Developer Trainee
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="cinema-heading text-4xl md:text-6xl lg:text-7xl mb-6"
        >
          Safura Samreen <span className="text-peach-deep block md:inline">— Full Stack Developer</span>
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
          <a href="#live-websites" className="peach-outline-btn">
            Live Websites
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="flex justify-center gap-6 mt-12"
        >
          {[
            { Icon: Linkedin, href: "https://www.linkedin.com/in/safura-samreen-shaik-7a03a7239/", label: "LinkedIn" },
            { Icon: Mail, href: "mailto:safurasamreenshaik@gmail.com", label: "Email" },
            { Icon: Twitter, href: "https://x.com/SafurASamreeNSK", label: "Twitter" },
          ].map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-muted-foreground/60 hover:text-peach transition-colors duration-400 group relative"
              title={label}
            >
              <Icon size={20} />
              {/* Optional tooltip effect could go here, but title attribute is simpler for now */}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
