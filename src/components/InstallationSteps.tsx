import React from "react";

const steps = [
  {
    number: "1",
    title: "Download Your Variant",
    description:
      "Choose the Windows desktop installer for central dispatch or download the Android APK for mobile order taking.",
  },
  {
    number: "2",
    title: "Sign In via Google OAuth",
    description:
      "Log in securely using your organization credentials with automatic role authorization.",
  },
  {
    number: "3",
    title: "Instant Real-Time Sync",
    description:
      "All inventory records, catalog items, and wholesale orders automatically synchronize across all connected devices in real time.",
  },
];

const stepCardStyle: React.CSSProperties = {
  background:
    "linear-gradient(135deg, rgba(255, 255, 255, 0.62) 0%, rgba(228, 233, 240, 0.42) 50%, rgba(240, 243, 246, 0.52) 100%)",
  backdropFilter: "blur(14px) saturate(118%)",
  WebkitBackdropFilter: "blur(14px) saturate(118%)",
  boxShadow:
    "0 8px 28px -4px rgba(15, 23, 42, 0.08), 0 2px 6px -1px rgba(15, 23, 42, 0.04), inset 0 1.5px 0px 0px rgba(255, 255, 255, 0.90), inset 0 -1px 0px 0px rgba(180, 190, 205, 0.20)",
};

function StepCardContent({ step }: { step: (typeof steps)[0] }) {
  return (
    <>
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#141414] text-white text-xs font-bold mb-3 sm:mb-4">
        {step.number}
      </div>
      <h3 className="font-semibold text-sm sm:text-base text-[#141414]">
        {step.title}
      </h3>
      <p className="mt-1.5 text-xs text-[#5A5A5A] leading-relaxed">
        {step.description}
      </p>
    </>
  );
}

export function InstallationSteps() {
  return (
    <div className="mt-10 sm:mt-14 max-w-5xl mx-auto overflow-x-clip">
      <h2 className="text-lg sm:text-xl font-bold text-[#141414] text-center mb-6 sm:mb-8">
        Get Started in 3 Simple Steps
      </h2>

      {/* Unified Responsive 3-Step Grid (single DOM tree for SSR & accessibility) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {steps.map((step) => (
          <div
            key={step.number}
            className="rounded-2xl border border-white/60 p-5 sm:p-6 transition-all duration-300 hover:border-white/85"
            style={stepCardStyle}
          >
            <StepCardContent step={step} />
          </div>
        ))}
      </div>
    </div>
  );
}
