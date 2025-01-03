import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-[#ee0979]" />
            <span className="text-xl font-bold">openlly</span>
          </Link>

          <div className="flex items-center gap-6">
            <Link to="/contact" className="text-gray-600 hover:text-[#ee0979]">
              Contact
            </Link>
            <button 
              onClick={() => window.open('https://forms.gle/your-google-form-url', '_blank')}
              className="bg-gradient-to-r from-[#ee0979] to-[#ff6a00] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              Get Early Access
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}