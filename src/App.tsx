import { Send, Lock, Share2, MessageCircle, ChevronRight } from 'lucide-react';
import {links} from '../src/utils/constants';
function App() {
  const handleEarlyAccess = () => {
    window.open(links.earlyAccess, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ee0979] to-[#ff6a00]">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <nav className="flex justify-between items-center mb-16">
          <h1 className="text-white text-3xl font-bold">openlly</h1>
          <button 
            onClick={handleEarlyAccess}
            className="bg-white text-[#ee0979] px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all"
          >
            Get Early Access
          </button>
        </nav>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Share & Receive Anonymous Messages
            </h2>
            <p className="text-white/90 text-xl mb-8">
              Create your personal link, share it with friends, and receive honest, anonymous messages. Express yourself freely and connect authentically.
            </p>
            <button 
              onClick={handleEarlyAccess}
              className="bg-white text-[#ee0979] px-8 py-3 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all flex items-center gap-2"
            >
              Join Waitlist <ChevronRight size={20} />
            </button>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&q=80&w=2940"
                alt="People connecting" 
                className="rounded-xl w-full h-[400px] object-cover mb-6"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
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
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 text-center">
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

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-4">
          <p className="text-white/60 text-center">
            © 2024 Openlly. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: JSX.Element, title: string, description: string }) {
  return (
    <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
      <div className="w-12 h-12 bg-gradient-to-br from-[#ee0979] to-[#ff6a00] rounded-lg flex items-center justify-center text-white mb-4">
        {icon}
      </div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;