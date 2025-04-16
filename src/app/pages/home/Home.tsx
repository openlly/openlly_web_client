"use client";

import { useEffect, useState } from "react";
import { Send, Lock, Share2, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/app/utils/cn";
import { Layout } from "@/app/components/Layout";
import GooglePlayButton from "@/app/components/StoreButton/GooglePlayStoreButton";
import AppStoreButton from "@/app/components/StoreButton/AppStoreButton";
import { appConfig } from "@/app/utils/constants";
import { FeatureCard } from "@/app/components/home/FeatureCard";
import { motion, AnimatePresence } from "framer-motion";
import Image1 from "@/assets/HomePage/image_1.jpg";
import Image2 from "@/assets/HomePage/image_2.jpg";
import Image3 from "@/assets/HomePage/image_3.jpg";

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
    image: Image1,
  },
  {
    title: "Connect Without Boundaries",
    description:
      "Break down barriers and foster genuine connections through anonymous messaging. Be yourself, truly.",
    image: Image2,
  },
  {
    title: "Join The Revolution",
    description:
      "Be part of the next generation of social connection. Download Openlly and start your journey.",
    image: Image3,
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % sections.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout isHomePage={true}>
      {/* Background Image Layer */}
      <div className="fixed inset-0 z-[-1]">
        <AnimatePresence mode="wait">
          {sections.map(
            (section, index) =>
              activeSection === index && (
                <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <Image
                  src={section.image}
                  alt="Hero background"
                  fill
                  priority
                  className="object-cover object-center sm:object-[center_30%]" // Better focus
                />
                <div className="absolute inset-0 bg-black/70 sm:bg-black/60" /> {/* Slightly stronger overlay on mobile */}
              </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.h1
                key={sections[activeSection].title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-5xl md:text-6xl font-bold mb-6"
              >
                {sections[activeSection].title}
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={sections[activeSection].description}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-gray-300 mb-8"
              >
                {sections[activeSection].description}
              </motion.p>
            </AnimatePresence>

            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <AppStoreButton url={appConfig.IOS_DOWNLOAD_LINK} theme="dark" />
              <GooglePlayButton
                url={appConfig.ANDROID_DOWNLOAD_LINK}
                theme="dark"
              />
            <Link
  href="/invite"
  className="inline-block px-6 py-3 font-semibold rounded-xl shadow-md transition-all text-center relative overflow-hidden bg-white text-black hover:text-white group"
>
  <span className="relative z-10">🎟️ Apply for Early Access</span>
  <div className="absolute inset-0 z-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
</Link>

            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
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

      {/* Features Section */}
      <section className="py-24 relative z-10">
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
                  icon={<feature.icon className="w-6 h-6 text-white" />}
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
        className="py-24 relative z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 text-center border border-white/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Be Among The First
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Join the waitlist and be the first to experience the next
              generation of anonymous messaging.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
              <div className="opacity-70">
                <AppStoreButton
                  url={appConfig.IOS_DOWNLOAD_LINK}
                  theme="dark"
                />
                <span className="text-sm text-white/80 ml-1">Coming soon</span>
              </div>
              <div className="opacity-70">
                <GooglePlayButton
                  url={appConfig.ANDROID_DOWNLOAD_LINK}
                  theme="dark"
                />
                <span className="text-sm text-white/80 ml-1">Coming soon</span>
              </div>
              
            </div>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
}
