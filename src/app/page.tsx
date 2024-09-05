// components
import { Hero } from "@/components/Hero";
import { NetworkChip } from "@/components/NetworkChip";
import { NetworkSection } from "@/components/NetworkSection";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <NetworkSection />
    </div>
  );
}
