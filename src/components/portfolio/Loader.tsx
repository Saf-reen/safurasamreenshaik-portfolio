import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = ({ onFinished }: { onFinished: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinished();
    }, 2200); // 2.2 seconds total to account for animations
    return () => clearTimeout(timer);
  }, [onFinished]);

  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: "blur(20px)" }}
      transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative flex flex-col items-center">
        {/* Main Name Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1] // premium easeOutQuart
          }}
          className="cinema-heading text-4xl md:text-6xl text-primary font-medium tracking-tight mb-4"
        >
          Safura Samreen
        </motion.h1>

        {/* Progress Line Container */}
        <div className="w-48 md:w-64 h-[2px] bg-secondary/20 relative rounded-full overflow-hidden mb-6">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 1.5,
              delay: 0.4,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-0 h-full bg-peach"
          />
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-muted-foreground/60 text-xs font-body tracking-[0.3em] uppercase"
        >
          Loading experience...
        </motion.p>
      </div>

      {/* Background Decorative Element */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none"
      >
         <div className="w-full h-full bg-peach-deep blur-[150px] rounded-full scale-150 transform translate-y-1/3" />
      </motion.div>
    </motion.div>
  );
};

export default Loader;
