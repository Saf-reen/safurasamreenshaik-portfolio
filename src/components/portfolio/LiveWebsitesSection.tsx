import { motion } from "framer-motion";
import CinematicSection from "./CinematicSection";
import { ExternalLink } from "lucide-react";

import siteSria from "@/assets/site-sriainfotech.png";
import siteOnfocus from "@/assets/site-onfocus.png";
import siteNxgen from "@/assets/site-nxgentech.png";
import siteBioenergy from "@/assets/site-sriabioenergy.png";

const websites = [
  { name: "Sria Infotech", url: "https://sriainfotech.com", image: siteSria, desc: "SAP consulting & digital solutions" },
  { name: "OnFocus Software", url: "https://onfocussoftware.com", image: siteOnfocus, desc: "Digital innovation lab" },
  { name: "NxGen Tech Academy", url: "https://nxgentechacademy.com", image: siteNxgen, desc: "IT training institute" },
  { name: "Sria BioEnergy", url: "https://sriabioenergy.com", image: siteBioenergy, desc: "Renewable energy solutions" },
  { name: "NxSys", url: "https://nxsys.in", image: null, desc: "Enterprise solutions platform" },
];

const LiveWebsitesSection = () => (
  <CinematicSection id="live-websites" className="py-24 md:py-32 px-6 bg-secondary">
    <div className="max-w-6xl mx-auto">
      <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4 font-body text-center">
        Production Work
      </p>
      <h2 className="cinema-heading text-3xl md:text-4xl text-center mb-4">
        Live Websites
      </h2>
      <p className="text-muted-foreground font-body text-center mb-16 max-w-lg mx-auto text-sm">
        Real-world websites I've built and deployed for production use
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {websites.map((site, i) => (
          <motion.a
            key={site.url}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="group cinema-card overflow-hidden p-0 cursor-pointer"
          >
            {/* Preview image */}
            <div className="aspect-video bg-muted overflow-hidden">
              {site.image ? (
                <img
                  src={site.image}
                  alt={`${site.name} website preview`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-muted">
                  <span className="text-muted-foreground text-sm font-body">Preview unavailable</span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="p-5">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-display text-base">{site.name}</h3>
                <ExternalLink size={14} className="text-muted-foreground group-hover:text-peach-deep transition-colors duration-300" />
              </div>
              <p className="text-muted-foreground text-xs font-body mb-2">{site.desc}</p>
              <span className="text-xs text-peach-deep font-body group-hover:underline">
                {site.url.replace("https://", "")}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </CinematicSection>
);

export default LiveWebsitesSection;
