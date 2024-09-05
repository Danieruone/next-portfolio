// components
import { Hero } from "@/components/Hero";
import { NetworkChip } from "@/components/NetworkChip";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <div className="flex justify-center">
        <NetworkChip />
        <NetworkChip />
        <NetworkChip />
      </div>
    </div>
  );
}
