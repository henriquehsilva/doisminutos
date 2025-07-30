import React from 'react';
import { Menu } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-pink-600 via-purple-700 to-indigo-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img 
            src="/logo-fundo-claro.png"
            alt="Logo"
            className="w-18 h-16 rounded-full shadow-lg"
          />
          <div>
            <p className="text-lg font-semibold">Produtora de Histórias</p>
            <p className="text-sm text-purple-200">Narrativas que transformam instantes em eternidade</p>
          </div>
        </div>

        <div className="hidden sm:block">
          <a
            href="https://sale.doisminutos.co"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:from-pink-600 hover:to-pink-800 transform hover:scale-105 transition-all duration-300"
          >
            Ganhe dinheiro publicando histórias
          </a>
        </div>

        <div className="sm:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="sm:hidden px-4 pb-4">
          <a
            href="https://sale.doisminutos.co"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:from-pink-600 hover:to-pink-800 transform hover:scale-105 transition-all duration-300"
          >
            Ganhe dinheiro publicando histórias
          </a>
        </div>
      )}
    </header>
  );
}
