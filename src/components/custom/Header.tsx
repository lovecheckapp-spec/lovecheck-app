'use client';

import { Heart, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" prefetch={false} className="flex items-center gap-2 group">
            <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-2 rounded-xl group-hover:scale-110 transition-transform">
              <Heart className="w-5 h-5 text-white" fill="white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              LoveCheck
            </span>
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/mentores" prefetch={false} className="text-gray-700 hover:text-pink-500 transition-colors">
              Encontrar Mentor
            </Link>
            <Link href="/conteudos" prefetch={false} className="text-gray-700 hover:text-pink-500 transition-colors">
              Conteúdos
            </Link>
            <Link href="/sobre" prefetch={false} className="text-gray-700 hover:text-pink-500 transition-colors">
              Sobre
            </Link>
            <Link 
              href="/mentor/login" 
              prefetch={false}
              className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
            >
              Área do Mentor
            </Link>
          </nav>

          {/* Menu Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-3">
              <Link 
                href="/mentores" 
                prefetch={false}
                className="px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 rounded-lg transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Encontrar Mentor
              </Link>
              <Link 
                href="/conteudos" 
                prefetch={false}
                className="px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 rounded-lg transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Conteúdos
              </Link>
              <Link 
                href="/sobre" 
                prefetch={false}
                className="px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500 rounded-lg transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link 
                href="/mentor/login" 
                prefetch={false}
                className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all text-center"
                onClick={() => setMenuOpen(false)}
              >
                Área do Mentor
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
