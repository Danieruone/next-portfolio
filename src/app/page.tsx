// components
import { AboutMe } from "@/components/AboutMe";
import { Hero } from "@/components/Hero";
import { NetworkSection } from "@/components/NetworkSection";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <NetworkSection />
      <AboutMe />

      <div className="mt-10">
        <h2 className="font-light">My proyects</h2>
      </div>
    </div>
  );
}
