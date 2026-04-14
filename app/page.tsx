import { Navbar } from "@/components/navbar";
import { HomeDashboard } from "@/components/home-dashboard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1a1a1a]">
      <Navbar />
      <HomeDashboard />
    </div>
  );
}
