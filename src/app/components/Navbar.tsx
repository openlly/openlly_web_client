import { AppLogo } from "./AppLogo/AppLogo";
export function Navbar() {
  return (
    <nav className="bg-[#0f0f0f] border-b border-gray-800 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <AppLogo isAnimated={true} repeat={false}/>
        </div>
      </div>
    </nav>
  );
}
