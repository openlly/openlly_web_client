import { motion } from "framer-motion";
import { Shield, Heart, Users, Lock } from "lucide-react";

export function Values() {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy First",
      description: "We prioritize user privacy in every decision we make.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "User Trust",
      description: "Building and maintaining user trust is at the core of our operations.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Fostering a supportive and respectful community environment.",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Security",
      description: "Implementing robust security measures to protect user data.",
    },
  ];

  return (
    <motion.section
      className="mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="text-3xl font-bold mb-10 text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Values
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-[#1a1a1a] border border-gray-700 p-6 rounded-xl shadow-sm"
          >
            <div className="text-pink-500 mb-4">{value.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-white">
              {value.title}
            </h3>
            <p className="text-gray-400 text-sm">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
