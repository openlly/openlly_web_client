"use client";

import { useEffect, useState } from "react";
import { Send, Lock, Share2, MessageCircle } from "lucide-react";
import Image from "next/image";
import { cn } from "@/app/utils/cn";
import { Layout } from "@/app/components/Layout";
import GooglePlayButton from "@/app/components/StoreButton/GooglePlayStoreButton";
import AppStoreButton from "@/app/components/StoreButton/AppStoreButton";
import { appConfig } from "@/app/utils/constants";
import { FeatureCard } from "@/app/components/home/FeatureCard";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    icon: Lock,
    title: "100% Anonymous",
    description: "Share your thoughts without revealing your identity",
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description: "Share your link across all social media platforms",
  },
  {
    icon: MessageCircle,
    title: "Instant Feedback",
    description: "Receive real-time messages from your audience",
  },
  {
    icon: Send,
    title: "Quick Setup",
    description: "Create your profile in seconds and start receiving messages",
  },
];

const sections = [
  {
    title: "Share Your Thoughts Anonymously",
    description:
      "Create your personal link, share it with friends, and receive honest, anonymous messages. Express yourself freely.",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070",
  },
  {
    title: "Connect Without Boundaries",
    description:
      "Break down barriers and foster genuine connections through anonymous messaging. Be yourself, truly.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070",
  },
  {
    title: "Join The Revolution",
    description:
      "Be part of the next generation of social connection. Download Openlly and start your journey.",
    image:
      "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070",
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % sections.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* Hero Section with slider */}
      <div className="relative h-screen">
        <AnimatePresence mode="wait">
          {sections.map((section, index) => (
            activeSection === index && (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="absolute inset-0 bg-black/60 z-10" />
                <Image
                  src={section.image}
                  alt="Hero background"
                  fill
                  className="object-cover"
                />
                <div className="relative z-20 h-full container mx-auto px-4 flex items-center">
                  <div className="max-w-2xl">
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-5xl md:text-6xl font-bold mb-6"
                    >
                      {section.title}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-xl text-gray-300 mb-8"
                    >
                      {section.description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="flex gap-4"
                    >
                      <AppStoreButton url={appConfig.IOS_DOWNLOAD_LINK} theme="dark" />
                      <GooglePlayButton
                        url={appConfig.ANDROID_DOWNLOAD_LINK}
                        theme="dark"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSection(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                activeSection === index ? "w-8 bg-white" : "bg-white/50"
              )}
            />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Choose Openlly?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <FeatureCard
                  icon={<feature.icon className="w-6 h-6 text-black" />}
                  title={feature.title}
                  description={feature.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-24"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#ee0979] to-[#ff6a00] rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Be Among The First
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Join the waitlist and be the first to experience the next generation of anonymous messaging.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="opacity-70">
                <AppStoreButton url={appConfig.IOS_DOWNLOAD_LINK} theme="dark" />
                <span className="text-sm text-white/80 ml-1">Coming soon</span>
              </div>
              <div className="opacity-70">
                <GooglePlayButton url={appConfig.ANDROID_DOWNLOAD_LINK} theme="dark" />
                <span className="text-sm text-white/80 ml-1">Coming soon</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
}
