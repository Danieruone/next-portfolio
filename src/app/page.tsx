// components
import { Hero } from "@/components/Hero";
import { NetworkSection } from "@/components/NetworkSection";
import { AboutMe } from "@/components/AboutMe";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full pb-20">
      <div className="bg bg-blue-400 pt-20 pb-10 text-gray-800">
        <div className="px-5">
          <Hero />
          <NetworkSection />
        </div>
      </div>
      <div className="container mx-auto px-5">
        <AboutMe />
        <ProjectsSection />
        <Footer />
      </div>
    </div>
  );
}
