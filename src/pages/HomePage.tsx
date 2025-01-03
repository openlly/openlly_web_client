import { Send, Lock, Share2, MessageCircle, ChevronRight } from 'lucide-react';
import { FeatureCard } from '../components/Home/FeatureCard';
import { Layout } from '../components/Layout';

export function HomePage() {
  const handleEarlyAccess = () => {
    window.open('https://forms.gle/your-google-form-url', '_blank');
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Share & Receive Anonymous Messages
            </h2>
            <p className="text-gray-600 text-xl mb-8">
              Create your personal link, share it with friends, and receive honest, anonymous messages. Express yourself freely and connect authentically.
            </p>
            <button 
              onClick={handleEarlyAccess}
              className="bg-gradient-to-r from-[#ee0979] to-[#ff6a00] text-white px-8 py-3 rounded-full font-semibold text-lg hover:opacity-90 transition-all flex items-center gap-2"
            >
              Join Waitlist <ChevronRight size={20} />
            </button>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-200 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&q=80&w=2940"
                alt="People connecting" 
                className="rounded-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <h3 className="text-3xl font-bold text-center mb-12">Why Choose Openlly?</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Lock />}
              title="100% Anonymous"
              description="Share your thoughts without revealing your identity"
            />
            <FeatureCard 
              icon={<Share2 />}
              title="Easy Sharing"
              description="Share your link across all social media platforms"
            />
            <FeatureCard 
              icon={<MessageCircle />}
              title="Instant Feedback"
              description="Receive real-time messages from your audience"
            />
            <FeatureCard 
              icon={<Send />}
              title="Quick Setup"
              description="Create your profile in seconds and start receiving messages"
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="bg-gradient-to-r from-[#ee0979] to-[#ff6a00] rounded-2xl p-12 text-center">
            <h3 className="text-4xl font-bold text-white mb-6">
              Be Among The First To Try Openlly
            </h3>
            <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
              Join our waiting list today and get exclusive early access when we launch. Be part of the next generation of anonymous messaging.
            </p>
            <button 
              onClick={handleEarlyAccess}
              className="bg-white text-[#ee0979] px-8 py-3 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all inline-flex items-center gap-2"
            >
              Apply for Early Access <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}