// components
import { Hero } from "@/components/Hero";
import { NetworkSection } from "@/components/NetworkSection";
import { AboutMe } from "@/components/AboutMe";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <NetworkSection />
      <AboutMe />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
