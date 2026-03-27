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
    initial={{ opacity: 0, y: 40, scale: 0.97 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
  >
    {children}
  </motion.section>
);

export default CinematicSection;
