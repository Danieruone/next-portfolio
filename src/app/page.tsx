// components
import { AboutMe } from "@/components/AboutMe";
import { Hero } from "@/components/Hero";
import { NetworkSection } from "@/components/NetworkSection";
import { ProjectsSection } from "@/components/ProjectsSection";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <NetworkSection />
      <AboutMe />
      <ProjectsSection />
    </div>
  );
}
