import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import CinematicSection from "./CinematicSection";
import { Star, Rocket, Trophy, Code2, X, Maximize2 } from "lucide-react";
import certCodeVita from "@/assets/cert-codevita.png";

const items = [
  { 
    id: "codevita",
    icon: Code2, 
    title: "TCS CodeVita Global Rank", 
    desc: "Secured Global Rank 1139 in TCS CodeVita, a global competitive programming contest, demonstrating strong problem-solving and algorithmic skills on an international stage.",
    badge: "Global Rank 1139",
    image: certCodeVita,
    featured: true
  },
  { 
    id: "star-performer",
    icon: Star, 
    title: "Star Performer Award", 
    desc: "Recognized at Sria Infotech for outstanding contributions and consistent delivery of high-quality work in a production environment."
  },
  { 
    id: "onsite",
    icon: Trophy, 
    title: "On-Site Client Experience", 
    desc: "Gained significant professional experience working directly at client locations (Sai Balaji) to gather requirements and implement UI refinements based on real-time feedback." 
  },
  { 
    id: "production",
    icon: Rocket, 
    title: "Production Success", 
    desc: "Successfully architected and delivered multiple production-level websites and custom ERP modules across various industry domains." 
  },
];

const AchievementCard = ({ 
  item, 
  isFeatured, 
  index, 
  onImageClick 
}: { 
  item: any; 
  isFeatured?: boolean; 
  index: number; 
  onImageClick: (img: string) => void; 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20, x: isFeatured ? 0 : 20 }}
    whileInView={{ opacity: 1, y: 0, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className={`bg-background rounded-xl border border-border group transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl ${
      isFeatured ? "p-7 border-peach shadow-md" : "p-5 shadow-sm"
    }`}
  >
    <div className="flex flex-col text-left">
      <div className="flex items-start justify-between mb-4">
        <div className="p-2.5 bg-secondary/50 rounded-lg text-peach group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500">
          <item.icon size={isFeatured ? 24 : 20} />
        </div>
        
        {item.badge && (
          <span className="px-3 py-1 bg-peach/10 text-peach text-[10px] tracking-widest uppercase font-bold rounded-full border border-peach/20">
            {item.badge}
          </span>
        )}
      </div>
      
      <h3 className={`font-display mb-3 group-hover:text-peach transition-colors duration-300 ${isFeatured ? "text-2xl" : "text-lg"}`}>
        {item.title}
      </h3>
      
      <p className="text-muted-foreground text-sm font-body mb-6 leading-relaxed">
        {item.desc}
      </p>

      {item.image && (
        <div 
          className="mt-auto aspect-[16/10] rounded-lg overflow-hidden relative cursor-pointer border border-border/50 group/img"
          onClick={() => onImageClick(item.image!)}
        >
           <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
           />
           <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Maximize2 size={24} className="text-white transform scale-90 group-hover/img:scale-100 transition-transform duration-300" />
           </div>
        </div>
      )}
    </div>
  </motion.div>
);

const AchievementsSection = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  const [featuredItem, ...otherItems] = items;

  return (
    <CinematicSection id="achievements" className="py-12 md:py-24 px-6 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4 font-body text-center lg:text-left">
            Recognition
          </p>
          <h2 className="cinema-heading text-3xl md:text-5xl mb-4 text-center lg:text-left">Achievements</h2>
          <p className="text-muted-foreground font-body text-sm max-w-lg text-center lg:text-left mx-auto lg:mx-0">
             Key achievements reflecting real-world impact and technical excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] gap-8 lg:gap-12 items-start">
          {/* Featured Achievement */}
          <AchievementCard 
            item={featuredItem} 
            isFeatured={true} 
            index={0} 
            onImageClick={setSelectedCert} 
          />
          
          {/* Supporting Achievements Column */}
          <div className="flex flex-col gap-6">
            {otherItems.map((item, i) => (
              <AchievementCard 
                key={item.id} 
                item={item} 
                index={i + 1} 
                onImageClick={setSelectedCert} 
              />
            ))}
          </div>
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
                alt="Achievement Detail" 
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </CinematicSection>
  );
};

export default AchievementsSection;
