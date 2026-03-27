import { motion } from "framer-motion";
import CinematicSection from "./CinematicSection";
import { Award } from "lucide-react";

const certs = [
  { title: "Python Essentials", issuer: "Cisco + OpenEDG" },
  { title: "Java Foundations", issuer: "Oracle" },
];

const CertificationsSection = () => (
  <CinematicSection className="py-24 md:py-32 px-6 bg-secondary">
    <div className="max-w-4xl mx-auto">
      <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4 font-body text-center">
        Certifications
      </p>
      <h2 className="cinema-heading text-3xl md:text-4xl text-center mb-12">Credentials</h2>

      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="cinema-card flex items-start gap-4 flex-1 max-w-sm"
          >
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
              <Award size={18} className="text-accent-foreground" />
            </div>
            <div>
              <h3 className="font-display text-base">{c.title}</h3>
              <p className="text-muted-foreground text-sm font-body">{c.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </CinematicSection>
);

export default CertificationsSection;
