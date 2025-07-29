import React from 'react';
import { BookOpen } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative bg-gradient-to-r from-pink-600 via-purple-700 to-indigo-800 text-white py-16 px-4">
      <div className="absolute top-4 right-4">
        <a
          href="https://sale.doisminutos.co"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-pink-700 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-pink-100 transition-colors"
        >
          Ganhe dinheiro publicando histórias
        </a>
      </div>

      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center mb-6">
          <img 
            src="/logo.png"
            alt="Logo"
            className="w-37 h-36 mr-9 rounded-full shadow-lg"
          />
        </div>

        <div className="items-center justify-center mb-4 rounded-full shadow-lg">
          <p className="text-xl md:text-2xl text-purple-100 font-bold mb-2">
            Produtora de Histórias
          </p>

          <p className="text-lg text-purple-200 max-w-2xl mx-auto leading-relaxed">
            Narrativas que transformam instantes em eternidade. 
            Descubra histórias que tocam a alma em apenas dois minutos.
          </p>
        </div>
      </div>
    </header>
  );
}
