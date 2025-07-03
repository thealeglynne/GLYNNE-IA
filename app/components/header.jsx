'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCloseMenu = () => setIsMenuOpen(false);

  const navItems = [
    { label: 'Arquitectura', path: '/arquitectura' },
    { label: 'Automatización', path: '/automatizacion' },
    { label: 'Integración', path: '/integracion' },
    { label: 'Autonomía', path: '/autonomia' },
    { label: 'Contact', path: '/contact' },

    { label: 'GLY-IA', path: '/chat' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-2 flex items-center justify-between transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      {/* Logo más pequeño */}
      <img
        src="/logo2.png"
        alt="Logo"
        className="h-6 sm:h-7 md:h-8 cursor-pointer"
        onClick={() => router.push('/')}
      />

      {/* Desktop Nav compacto */}
      <nav className="hidden lg:flex gap-3 xl:gap-5 items-center">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => router.push(item.path)}
            className="text-black hover:text-neutral-600 transition text-xs sm:text-sm"
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Toggle para mobile */}
      <div className="lg:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black">
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`absolute top-full left-0 right-0 mt-2 bg-white shadow-md lg:hidden transform transition-all duration-300 origin-top ${
          isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col divide-y divide-black/10">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                router.push(item.path);
                handleCloseMenu();
              }}
              className="text-black hover:text-neutral-600 px-6 py-3 text-left text-sm"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
