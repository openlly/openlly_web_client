import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="relative group bg-[#1a1a1a] rounded-2xl p-6 border border-gray-700 transition-all duration-300 ease-in-out hover:border-transparent hover:scale-105 hover:bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]">
      {/* Subtle animated gradient border */}
      <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-[#ff6a00] to-[#ee0979] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10 bg-[#1a1a1a] rounded-[calc(1rem-1px)] p-4">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-white/10 backdrop-blur-sm shadow-inner shadow-black/30">
          <div className="text-white">{icon}</div>
        </div>
        <h4 className="text-lg font-semibold mb-2 text-white">{title}</h4>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
}
