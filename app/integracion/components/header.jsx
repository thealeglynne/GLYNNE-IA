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

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Arquitectura', path: '/arquitectura' },
    { label: 'Automatización', path: '/automatizacion' },
    { label: 'Integración', path: '/integracion' },
    { label: 'Autonomía', path: '/autonomia' },
    { label: 'Transformación', path: '/transformacion' },
    { label: 'Contact', path: '/contact' },
    { label: 'Nosotros', path: '/nosotros' },
    { label: 'GLY-IA', path: '/chat' }, // Ruta especial
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-3 flex items-center justify-between transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white shadow-md'
      }`}
    >
      {/* Logo */}
      <img
        src="/logo2.png"
        alt="Logo"
        className="h-8 sm:h-10 md:h-12 cursor-pointer"
        onClick={() => router.push('/')}
      />

      {/* Desktop Nav */}
      <nav className="hidden lg:flex gap-4 xl:gap-6 items-center">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => router.push(item.path)}
            className="text-black hover:text-neutral-600 transition text-sm md:text-base"
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Mobile Toggle */}
      <div className="lg:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
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
              className="text-black hover:text-neutral-600 px-6 py-4 text-left text-sm"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
