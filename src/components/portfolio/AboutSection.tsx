import { motion } from "framer-motion";
import CinematicSection from "./CinematicSection";
import profileImg from "@/assets/profile.jpg";

const AboutSection = () => (
  <CinematicSection id="about" className="py-24 md:py-32 px-6">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="aspect-[4/5] rounded-lg overflow-hidden">
          <img
            src={profileImg}
            alt="Safura Samreen"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-lg -z-10" />
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
            I'm a <span className="text-foreground font-medium">B.Tech CSE graduate</span> (2020–2024, GPA 7.59) 
            with a deep passion for building clean, scalable web applications.
          </p>
          <p>
            Currently working as a <span className="text-foreground font-medium">Developer Trainee at Sria Infotech</span>, 
            I specialize in React.js, Tailwind CSS, and Node.js to create production-ready interfaces 
            that are both beautiful and performant.
          </p>
          <p>
            I believe great software is invisible — it just works, feels intuitive, 
            and leaves a lasting impression.
          </p>
        </div>
      </motion.div>
    </div>
  </CinematicSection>
);

export default AboutSection;
