'use client';

import React from 'react';
import Link from 'next/link';
import { AppLogo } from './AppLogo/AppLogo';
//props
interface NavbarProps {
  isHomePage?: boolean;
}

export function Navbar({ isHomePage = false }: NavbarProps) {
  return (
    <nav
      className={`${
      //   'bg-black/10 backdrop-blur-lg border-t border-white/10 text-white
        isHomePage ? 'bg-transparent border-t border-white/10 text-white' : 'bg-[#0f0f0f] border-b border-gray-800'
      } text-white transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <AppLogo isAnimated={true} repeat={false} />

          <ul className="hidden md:flex gap-6 text-sm font-medium">
            <li>
              <Link href="/" className="hover:text-[#ee0979] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#ee0979] transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#ee0979] transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
