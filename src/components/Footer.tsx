import React from 'react';
import { Heart, Mail, BookOpen, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <h3 className="text-2xl font-bold">Dois Minutos</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Transformando ideias em histórias que ficam na memória. 
              Cada narrativa é cuidadosamente feita para tocar corações.
            </p>
          </div>
          
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-orange-300">Conecte-se</h4>
            <div className="flex justify-center space-x-4">
              <a 
                href="mailto:contato@doisminutos.com" 
                className="flex items-center justify-center w-12 h-12 bg-pink-600 rounded-full hover:bg-pink-700 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-orange-300">Missão</h4>
            <p className="text-gray-300 leading-relaxed">
              Acreditamos no poder das histórias para inspirar, 
              conectar e transformar vidas através da arte narrativa.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Feito com <Heart className="w-4 h-4 mx-2 text-red-400" /> pela equipe Dois Minutos
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2025 Dois Minutos - Produtora de Histórias. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}