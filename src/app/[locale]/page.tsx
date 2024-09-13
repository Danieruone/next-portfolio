// components
import { Hero } from "@/components/Hero";
import { NetworkSection } from "@/components/NetworkSection";
import { AboutMe } from "@/components/AboutMe";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full pb-20">
      <div className="relative bg-[url('/bg-code.webp')] bg-cover pt-20 pb-10 text-gray-800">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="px-5 relative z-20">
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
