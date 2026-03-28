import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

const CinematicSection = ({ children, className = "", id, delay = 0 }: Props) => (
  <motion.section
    id={id}
    className={className}
    initial={{ opacity: 0, y: 80, scale: 0.9, filter: "blur(10px)" }}
    whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
    viewport={{ once: true, margin: "-120px" }}
    transition={{ 
      duration: 1.2, 
      delay, 
      ease: [0.16, 1, 0.3, 1] // OutQuint ease for extra smoothness
    }}
  >
    {children}
  </motion.section>
);

export default CinematicSection;
