import { motion } from "framer-motion";

export function MissionSection() {
  return (
    <motion.section
      className="mb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.1 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="prose prose-lg max-w-none text-gray-300 dark:prose-invert"
      >
        <p className="text-xl text-gray-400 mb-6">
          Founded in 2024, Openlly emerged from a simple yet powerful idea: creating a space where people can express themselves freely and authentically, without the fear of judgment or social constraints.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-white">Our Mission</h2>
        <p className="mb-6 text-gray-400">
          At Openlly, we're dedicated to fostering genuine connections through anonymous communication. We believe that sometimes the most honest conversations happen when people feel safe to express themselves without the weight of their identity attached to their words.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-white">Our Vision</h2>
        <p className="mb-6 text-gray-400">
          We envision a world where meaningful conversations flourish, where feedback is constructive, and where people can share their thoughts without fear. Our platform is built on the foundation of privacy, security, and user empowerment.
        </p>

        <div className="bg-[#1f1f1f] border border-gray-700 p-6 rounded-2xl mb-8">
          <h3 className="text-xl font-semibold mb-3 text-white">What Sets Us Apart</h3>
          <ul className="space-y-3 text-gray-400 list-disc list-inside">
            <li>End-to-end encryption for all messages</li>
            <li>Advanced spam detection and content moderation</li>
            <li>User-centric design focused on privacy</li>
            <li>Commitment to data protection and user rights</li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
}
