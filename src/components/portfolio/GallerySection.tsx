import { motion } from "framer-motion";
import CinematicSection from "./CinematicSection";
import workspaceImg from "@/assets/workspace.jpg";
import codingImg from "@/assets/coding-setup.jpg";

const GallerySection = () => (
  <CinematicSection className="py-24 md:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        {[workspaceImg, codingImg].map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="aspect-video rounded-lg overflow-hidden"
          >
            <img
              src={src}
              alt="Developer workspace"
              className="w-full h-full object-cover grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </CinematicSection>
);

export default GallerySection;
