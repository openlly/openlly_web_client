"use client";
import { MissionSection } from '../components/about/MissionSections';
import { Values } from '../components/about/Values';
import { Layout } from '../components/Layout';



export default function AboutUs() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 py-12">
        <MissionSection />
        <Values />
      </div>
    </Layout>
  );
}