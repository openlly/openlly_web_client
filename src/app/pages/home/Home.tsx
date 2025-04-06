"use client";

import {
  Send,
  Lock,
  Share2,
  MessageCircle,
  
} from "lucide-react";
import Image from "next/image";
import { Layout } from "../../components/Layout";
import { FeatureCard } from "../../components/home/FeatureCard";
import background from "../../../../public/background.webp";
import { GooglePlayButton } from "react-mobile-app-button";
import { AppStoreButton } from "react-mobile-app-button";

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 text-white">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              Share & Receive Anonymous Messages
            </h2>
            <p className="text-gray-300 text-xl mb-8">
              Create your personal link, share it with friends, and receive
              honest, anonymous messages. Express yourself freely and connect
              authentically.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="opacity-70 flex flex-col items-start">
                <GooglePlayButton url={""} theme="dark" />
              </div>
              <div className="opacity-70 flex flex-col items-start">
                  <AppStoreButton url={""} theme="dark" />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 shadow-xl">
              <Image
                src={background}
                alt="People connecting"
                className="rounded-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Why Choose Openlly?
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Lock />}
              title="100% Anonymous"
              description="Share your thoughts without revealing your identity"
            />
            <FeatureCard
              icon={<Share2 />}
              title="Easy Sharing"
              description="Share your link across all social media platforms"
            />
            <FeatureCard
              icon={<MessageCircle />}
              title="Instant Feedback"
              description="Receive real-time messages from your audience"
            />
            <FeatureCard
              icon={<Send />}
              title="Quick Setup"
              description="Create your profile in seconds and start receiving messages"
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="bg-gradient-to-r from-[#ee0979] to-[#ff6a00] rounded-2xl p-12">
            <h3 className="text-4xl font-bold text-white mb-6">
              Be Among The First To Try Openlly
            </h3>
            <p className="text-white/90 text-xl mb-8 max-w-2xl">
              The Openlly app is launching soon. Stay tuned and be ready to
              experience the next generation of anonymous messaging.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="opacity-70">
                <GooglePlayButton url={""} theme="dark" />
                <span className="text-sm text-white/80 ml-1">Coming soon</span>
              </div>
              <div className="opacity-70">
                <AppStoreButton url={""} theme="dark" />
                <span className="text-sm text-white/80 ml-1">Coming soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
