import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AppPreview } from "@/components/AppPreview";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { WorkflowSection } from "@/components/WorkflowSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#FCFCF9] overflow-hidden flex flex-col justify-between">
      {/* Background Subtle Gradient Lights */}
      <div className="pointer-events-none absolute inset-0 -z-10 ambient-glow" />

      <div>
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* App Workspace Preview Card */}
        <AppPreview />

        {/* Features Bento Grid */}
        <FeaturesGrid />

        {/* 3-Step Workflow Section */}
        <WorkflowSection />

        {/* Bottom Call to Action Section */}
        <CtaSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
