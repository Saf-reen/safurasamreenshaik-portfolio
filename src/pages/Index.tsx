import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import HowIWork from "@/components/portfolio/HowIWork";
import FeaturedProject from "@/components/portfolio/FeaturedProject";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ServicesSection from "@/components/portfolio/ServicesSection";
import LiveWebsitesSection from "@/components/portfolio/LiveWebsitesSection";
import ClientWorkSection from "@/components/portfolio/ClientWorkSection";
import GithubSection from "@/components/portfolio/GithubSection";
import StatsSection from "@/components/portfolio/StatsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import AchievementsSection from "@/components/portfolio/AchievementsSection";
import CertificationsSection from "@/components/portfolio/CertificationsSection";
import CaseStudySection from "@/components/portfolio/CaseStudySection";
import CurrentlyLearning from "@/components/portfolio/CurrentlyLearning";
import WhyHireMe from "@/components/portfolio/WhyHireMe";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";


import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "@/components/portfolio/Loader";

const Index = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="overflow-x-hidden min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" onFinished={() => setLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Navbar />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <HowIWork />
            <FeaturedProject />
            <ProjectsSection />
            <ServicesSection />
            <LiveWebsitesSection />
            <ClientWorkSection />
            <GithubSection />
            <StatsSection />
            <ExperienceSection />
            <AchievementsSection />
            <CertificationsSection />
            <CaseStudySection />
            <CurrentlyLearning />
            <WhyHireMe />
            <ContactSection />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
