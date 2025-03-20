import { AlertCircle, Home } from "lucide-react";
import Link from "next/link";
//meta data
import { globalMetaData } from "./utils/globalMetaDeta";
import { Metadata } from "next";

export const metadata: Metadata = globalMetaData;

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <AlertCircle className="w-16 h-16 text-[#ee0979]" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ee0979] to-[#ff6a00] 
            text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          <Home size={20} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}