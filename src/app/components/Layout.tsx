import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  isHomePage?: boolean;
}

export function Layout({ children, isHomePage = false }: LayoutProps) {
  return (
    <div
      className={`min-h-screen text-white flex flex-col ${
        isHomePage ? 'bg-black/10 backdrop-blur-2xl' : 'bg-black'
      }`}
    >
      <Navbar isHomePage={isHomePage} />
      <main className="flex-grow pt-[72px]">{children}</main>
      <Footer isHomePage={isHomePage} />
    </div>
  );
}
