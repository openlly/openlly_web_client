export function MissionSection() {
  return (
    <section className="mb-16">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">About Openlly</h1>

      <div className="prose prose-lg max-w-none dark:prose-invert">
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          Founded in 2024, Openlly emerged from a simple yet powerful idea: creating a space where people can express themselves freely and authentically, without the fear of judgment or social constraints.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Our Mission</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          At Openlly, we're dedicated to fostering genuine connections through anonymous communication. We believe that sometimes the most honest conversations happen when people feel safe to express themselves without the weight of their identity attached to their words.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Our Vision</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          We envision a world where meaningful conversations flourish, where feedback is constructive, and where people can share their thoughts without fear. Our platform is built on the foundation of privacy, security, and user empowerment.
        </p>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">What Sets Us Apart</h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li>• End-to-end encryption for all messages</li>
            <li>• Advanced spam detection and content moderation</li>
            <li>• User-centric design focused on privacy</li>
            <li>• Commitment to data protection and user rights</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
