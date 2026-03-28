import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import CinematicSection from "./CinematicSection";
import { Award, X, Maximize2 } from "lucide-react";
import certPython from "@/assets/cert-python.png";
import certJava from "@/assets/cert-java.png";

const certs = [
  { 
    title: "Python Essentials", 
    issuer: "Cisco + OpenEDG",
    image: certPython
  },
  { 
    title: "Java Foundations", 
    issuer: "Oracle",
    image: certJava
  },
];

const CertificationsSection = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <CinematicSection className="py-8 md:py-10 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-12 text-center">
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4 font-body">
            Professional Credentials
          </p>
          <h2 className="cinema-heading text-3xl md:text-4xl mb-4">Certifications</h2>
          <p className="text-muted-foreground font-body text-center mb-6 max-w-lg mx-auto text-sm">
            Verified certifications demonstrating foundational programming and software development knowledge.
          </p>
          <div className="flex items-center gap-2 text-peach font-body text-[10px] tracking-widest uppercase bg-accent/5 px-4 py-1.5 rounded-full border border-accent/10">
            <Award size={14} />
            <span>Verified Certifications</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto text-center md:text-left">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group cinema-card flex flex-col p-4 bg-background border border-border/50 hover:border-peach/30 hover:shadow-2xl hover:shadow-peach/5 transition-all duration-500 hover:scale-[1.03] cursor-pointer"
              onClick={() => setSelectedCert(c.image)}
            >
              {/* Thumbnail */}
              <div className="aspect-[4/3] rounded-lg overflow-hidden mb-6 relative group/img shadow-sm border border-border/10">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <Maximize2 size={24} className="text-white transform scale-90 group-hover:scale-100 transition-transform duration-300" />
                </div>
              </div>

              <div>
                <h3 className="font-display text-lg mb-1 group-hover:text-peach transition-colors duration-300">{c.title}</h3>
                <p className="text-muted-foreground text-sm font-body mb-6">{c.issuer}</p>
                <button 
                  className="w-full py-2.5 px-4 bg-secondary text-secondary-foreground rounded-lg font-bold text-[10px] tracking-widest uppercase hover:bg-accent hover:text-accent-foreground transition-all duration-300 flex items-center justify-center gap-2"
                >
                  View Certificate
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Viewer */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/95 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              className="relative max-w-5xl w-full aspect-[4/3] bg-background rounded-2xl shadow-2xl overflow-hidden border border-border/50"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 p-2 bg-secondary text-secondary-foreground rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 z-10"
              >
                <X size={20} />
              </button>
              <img 
                src={selectedCert} 
                alt="Full Certificate" 
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </CinematicSection>
  );
};

export default CertificationsSection;
