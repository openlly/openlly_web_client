import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-[#1a1a1a] rounded-xl p-6 hover:shadow-lg transition-all border border-gray-700">
      <div className="w-12 h-12 bg-gradient-to-r from-[#ee0979] to-[#ff6a00] rounded-lg flex items-center justify-center text-white mb-4">
        {icon}
      </div>
      <h4 className="text-xl font-semibold mb-2 text-white">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
