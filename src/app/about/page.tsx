"use client";
import { motion } from "framer-motion";
import { Layout } from "../components/Layout";
import { MissionSection } from "../components/about/MissionSections";
import { Values } from "../components/about/Values";

export default function AboutUs() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 py-12 text-white">
        <motion.h1
          className="text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Openlly
        </motion.h1>

        <MissionSection />
        <Values />
      </div>
    </Layout>
  );
}
