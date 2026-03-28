import { motion } from "framer-motion";
import CinematicSection from "./CinematicSection";
import profileImg from "@/assets/profile.jpg";

const AboutSection = () => (
  <CinematicSection id="about" className="py-8 md:py-10 px-6">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative flex justify-center"
      >
        <div className="w-48 md:w-64 aspect-square rounded-full overflow-hidden border-4 border-accent/10 shadow-2xl relative">
          <img
            // src={profileImg}
            src="/safura_.jpeg"
            alt="Safura Samreen - Full Stack Developer"
            className="w-full h-full object-cover transition-all duration-700"
          />
        </div>
        <div className="absolute -bottom-2 -right-2 md:bottom-2 md:right-2 w-12 h-12 bg-accent rounded-full -z-10 blur-xl opacity-50" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4 font-body">
          About Me
        </p>
        <h2 className="cinema-heading text-3xl md:text-4xl mb-6">
          Crafting Digital<br />Experiences
        </h2>
        <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
          <p>
            I am a <span className="text-foreground font-medium">B.Tech Computer Science graduate</span> and <span className="text-foreground font-medium">Full Stack Developer</span> with hands-on experience in building scalable web applications using <span className="text-foreground font-medium">React.js, Tailwind CSS, and Node.js</span>.
          </p>
          <p>
            Currently working as a <span className="text-foreground font-medium">Developer Trainee at Sria Infotech</span>, I have contributed to production-level websites, client-based projects, and performance optimization.
          </p>
          <p>
            I focus on creating clean, responsive, and user-friendly interfaces while ensuring high performance and seamless scalability across devices.
          </p>
          <p className="border-l-2 border-accent pl-4 text-sm font-medium text-foreground/80 italic">
            Focusing on real-world development, client interaction, and efficient project collaboration.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 p-6 bg-accent/10 border-l-4 border-accent rounded-r-lg"
          >
            <p className="text-foreground font-display text-sm leading-relaxed italic">
              "Worked on real-world projects, including client-based development, 
              on-site collaboration, and production-level website deployment."
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </CinematicSection>
);

export default AboutSection;
