import React from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-black min-h-screen text-white">
    <Navbar />
    {children}
    <Footer />
  </div>
  
  );
}