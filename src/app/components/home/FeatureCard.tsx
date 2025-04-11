import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="relative group bg-[#1a1a1a] rounded-2xl p-6 border border-gray-700 transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(255,106,0,0.3)] hover:border-[#ff6a00] hover:scale-[1.03] cursor-pointer">
      {/* Gradient Border on Hover */}
      <div className="absolute -inset-px rounded-2xl z-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#ee0979] to-[#ff6a00] blur-md transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="w-10 h-10 p-2 bg-gradient-to-r from-[#ee0979] to-[#ff6a00] rounded-lg flex items-center justify-center mb-4 shadow-inner shadow-black/20">
          <div className="text-black">{icon}</div>
        </div>
        <h4 className="text-xl font-semibold mb-2 text-white">{title}</h4>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
}
