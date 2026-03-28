import { motion } from "framer-motion";
import CinematicSection from "./CinematicSection";
import { ExternalLink } from "lucide-react";

import siteSria from "@/assets/site-sriainfotech.png";
import siteOnfocus from "@/assets/site-onfocus.png";
import siteNxgen from "@/assets/site-nxgentech.png";
import siteBioenergy from "@/assets/site-sriabioenergy.png";
import siteNxsys from "@/assets/site-nxsys.png";
import siteSaibalaji from "@/assets/site-saibalaji.png";
import siteEskoolia from "@/assets/site-eskoolia.png";

const websites = [
  { name: "Sria Infotech", url: "https://sriainfotech.com", image: siteSria, desc: "SAP consulting & digital solutions" },
  { name: "OnFocus Software", url: "https://onfocussoftware.com", image: siteOnfocus, desc: "Digital innovation lab" },
  { name: "NxGen Tech Academy", url: "https://nxgentechacademy.com", image: siteNxgen, desc: "IT training institute" },
  { name: "Sria BioEnergy", url: "https://sriabioenergy.com", image: siteBioenergy, desc: "Renewable energy solutions" },
  { name: "NxSys", url: "https://nxsys.in", image: siteNxsys, desc: "Enterprise solutions platform" },
  { name: "Sai Balaji Motion Studio", url: "https://saibalaji-motion-studio.vercel.app/", image: siteSaibalaji, desc: "Creative motion studio portfolio" },
  { name: "Eskoolia", url: "https://eskoolia.com/", image: siteEskoolia, desc: "School ERP product website" },
];

const LiveWebsitesSection = () => (
  <CinematicSection id="live-websites" className="py-8 md:py-10 px-6 bg-secondary">
    <div className="max-w-6xl mx-auto">
      <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4 font-body text-center">
        Production Websites & Live Projects
      </p>
      <h2 className="cinema-heading text-3xl md:text-4xl text-center mb-4">
        Live Websites
      </h2>
      <p className="text-muted-foreground font-body text-center mb-16 max-w-lg mx-auto text-sm">
        Real-world web applications developed and deployed for clients across different industries.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {websites.map((site, i) => (
          <motion.div
            key={site.url}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="group cinema-card overflow-hidden p-0 flex flex-col h-full hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500"
          >
            {/* Preview image */}
            <div className="aspect-video bg-muted overflow-hidden relative">
              {site.image ? (
                <img
                  src={site.image}
                  alt={`${site.name} website preview`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-muted">
                  <span className="text-muted-foreground text-sm font-body">Preview unavailable</span>
                </div>
              )}
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                 <div className="bg-background/90 p-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <ExternalLink size={20} className="text-accent-foreground" />
                 </div>
              </div>
            </div>

            {/* Info */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="mb-4">
                <h3 className="font-display text-lg mb-1 group-hover:text-peach-deep transition-colors duration-300">{site.name}</h3>
                <p className="text-muted-foreground text-xs font-body line-clamp-2">{site.desc}</p>
              </div>
              
              <div className="mt-auto flex items-center justify-between">
                <span className="text-[10px] tracking-wider text-muted-foreground uppercase font-medium">
                  {site.url.replace("https://", "").replace("www.", "")}
                </span>
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium px-4 py-2 bg-secondary text-secondary-foreground rounded-full 
                             hover:bg-accent hover:text-accent-foreground transition-all duration-300 flex items-center gap-2"
                >
                  Visit Site
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </CinematicSection>
);

export default LiveWebsitesSection;
