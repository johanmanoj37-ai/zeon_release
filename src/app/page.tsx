import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AppPreview } from "@/components/AppPreview";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { WorkflowSection } from "@/components/WorkflowSection";
import { SeoOverviewSection } from "@/components/SeoOverviewSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import { softwareSchema } from "@/lib/seo-schema";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <div
        className="relative min-h-screen overflow-x-clip flex flex-col justify-between"
        style={{
          background: `
            radial-gradient(ellipse 70% 65% at 68% 42%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.18) 38%, transparent 68%),
            radial-gradient(ellipse 50% 40% at 30% 18%, rgba(255,255,255,0.22) 0%, transparent 65%),
            linear-gradient(160deg, #C6CAD0 0%, #BCC1C7 28%, #B4B9C0 60%, #ABB0B7 100%)
          `,
        }}
      >
        <div>
          <Navbar />
          <main>
            <Hero />
            <AppPreview />
            <FeaturesGrid />
            <WorkflowSection />
            <SeoOverviewSection />
            <CtaSection />
          </main>
        </div>

        <Footer />
      </div>
    </>
  );
}
