import { Layout } from '../components/Layout';
import { MissionSection } from '../components/About/MissionSections';
import { Values } from '../components/About/Values';


export function AboutUs() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 py-12">
        <MissionSection />
        <Values />
      </div>
    </Layout>
  );
}