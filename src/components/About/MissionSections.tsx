
export function MissionSection() {
  return (
    <section className="mb-16">
      <h1 className="text-4xl font-bold mb-8">About Openlly</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 mb-6">
          Founded in 2024, Openlly emerged from a simple yet powerful idea: creating a space where people can express themselves freely and authentically, without the fear of judgment or social constraints.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-6">
          At Openlly, we're dedicated to fostering genuine connections through anonymous communication. We believe that sometimes the most honest conversations happen when people feel safe to express themselves without the weight of their identity attached to their words.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p className="mb-6">
          We envision a world where meaningful conversations flourish, where feedback is constructive, and where people can share their thoughts without fear. Our platform is built on the foundation of privacy, security, and user empowerment.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-3">What Sets Us Apart</h3>
          <ul className="space-y-3">
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