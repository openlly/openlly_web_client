export function Footer() {
  return (
    <footer className="bg-black opacity-80 text-white p-6 w-full fixed bottom-0 left-0 right-0 flex items-center justify-center">
      <div className="flex items-center gap-2">
        <span className="text-sm">Powered by</span>
        <a href="https://openlly.com" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-blue-500 hover:underline">
          Openlly
        </a>
        <span className="text-sm">&copy; 2023 Openlly</span>
      </div>
    </footer>
  );
}
