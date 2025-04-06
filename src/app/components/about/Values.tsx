import { Shield, Heart, Users, Lock } from 'lucide-react';

export function Values() {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy First",
      description: "We prioritize user privacy in every decision we make."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "User Trust",
      description: "Building and maintaining user trust is at the core of our operations."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Fostering a supportive and respectful community environment."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Security",
      description: "Implementing robust security measures to protect user data."
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Our Values</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((value, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
          >
            <div className="text-[#ee0979] mb-4">{value.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {value.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
