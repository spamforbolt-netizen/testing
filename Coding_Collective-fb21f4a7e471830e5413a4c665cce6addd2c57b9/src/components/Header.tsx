import { Terminal } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const navItems = ['Home', 'About', 'Contact'];

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-md shadow-lg border-b border-yellow-400/20 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => onNavigate('Home')}
        >
          <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
            <Terminal className="w-6 h-6 text-black" />
          </div>
          <h1 className="text-xl font-bold text-yellow-400">
            CCC Comp Practice
          </h1>
        </div>

        <nav className="flex gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => onNavigate(item)}
              className={`text-sm font-medium transition-colors hover:text-yellow-400 ${
                currentPage === item ? 'text-yellow-400' : 'text-gray-300'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
