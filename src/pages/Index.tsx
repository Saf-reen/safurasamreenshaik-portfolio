import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import AchievementsSection from "@/components/portfolio/AchievementsSection";
import CertificationsSection from "@/components/portfolio/CertificationsSection";
import CaseStudySection from "@/components/portfolio/CaseStudySection";
import StatsSection from "@/components/portfolio/StatsSection";
import GallerySection from "@/components/portfolio/GallerySection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => (
  <div className="overflow-x-hidden">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <StatsSection />
    <ExperienceSection />
    <AchievementsSection />
    <CertificationsSection />
    <CaseStudySection />
    <GallerySection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
