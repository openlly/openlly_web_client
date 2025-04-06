"use client";

import { appConfig } from "@/app/utils/constants";
import { ChevronRight, Sparkles } from "lucide-react";
import { GooglePlayButton, AppStoreButton } from "react-mobile-app-button";

export function EarlyAccessBanner() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#1e1e2f] to-[#2b273f] p-4 sm:p-5 shadow-lg text-white text-sm">
      {/* Background blobs */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-pink-600/20 rounded-full blur-3xl opacity-10" />
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl opacity-10" />

      <div className="relative z-10 flex flex-col items-center gap-3 text-center">
        {/* Tagline */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/30 rounded-full shadow-inner backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
          <h3 className="text-sm font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Premium Q&A Awaits
          </h3>
          <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
        </div>

        {/* Description */}
        <p className="text-white/70 text-xs sm:text-sm max-w-xs">
          Be the first to try Openlly. Receive & respond to anonymous messages with flair.
        </p>

        {/* Store buttons */}
        <div className="flex flex-wrap justify-center gap-2">
          <GooglePlayButton
            url={appConfig.ANDROID_DOWNLOAD_LINK}
            theme="dark"
            className="scale-[0.85] sm:scale-100 hover:scale-105 transition-transform"
          />
          <AppStoreButton
            url={appConfig.IOS_DOWNLOAD_LINK}
            theme="dark"
            className="scale-[0.85] sm:scale-100 hover:scale-105 transition-transform"
          />
        </div>

        {/* CTA */}
        <div className="mt-1 flex items-center gap-1 text-xs text-white/60 font-medium">
          <span>Join early</span>
          <ChevronRight size={14} className="animate-bounce-x" />
        </div>
      </div>
    </div>
  );
}
