import Link from 'next/link';
import { AppLogo } from './AppLogo/AppLogo';
import { appConfig } from '../utils/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f0f0f] border-t border-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <AppLogo />
            <p className="text-gray-400 mt-4 text-sm">
              Share & receive anonymous messages securely.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide">Legal</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-[#ee0979]">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#ee0979]">Terms of Service</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/about" className="hover:text-[#ee0979]">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#ee0979]">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide">Connect</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href={appConfig.TWITTER_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#ee0979]">Twitter</a>
              </li>
              <li>
                <a href={appConfig.INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#ee0979]">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-xs">
          <p>© {currentYear} Openlly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
