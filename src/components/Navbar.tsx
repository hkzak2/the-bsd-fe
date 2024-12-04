import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { Logo } from './Logo';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export function Navbar({ isMenuOpen, setIsMenuOpen }: NavbarProps) {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navLinks = [
    { path: '/companies', label: 'Companies' },
    { path: '/people', label: 'People' },
    { path: '/investors', label: 'Investors' },
  ];

  return (
    <nav className="fixed w-full z-50">
      {/* Light rays effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[800px] bg-gradient-to-b from-primary/20 to-transparent rotate-12 blur-3xl transform -translate-x-1/2"></div>
        <div className="absolute -top-32 right-1/4 w-[500px] h-[800px] bg-gradient-to-b from-secondary/20 to-transparent -rotate-12 blur-3xl transform translate-x-1/2"></div>
      </div>
      
      {/* Navbar content with glass effect */}
      <div className="relative bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary p-[1px]">
                <div className="w-full h-full rounded-xl card-gradient flex items-center justify-center">
                  <Logo />
                </div>
              </div>
              <span className="text-xl font-bold text-foreground">The BSD</span>
            </Link>
            
            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex flex-1 items-center justify-center gap-12">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`relative py-2 transition-colors ${
                    isActive(path)
                      ? 'text-foreground font-medium'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {label}
                  {isActive(path) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>
            
            {/* Right side actions */}
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link 
                to="/about"
                className={`hidden md:block pill bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 ${
                  isActive('/about') ? 'opacity-90' : ''
                }`}
              >
                About Us
              </Link>
              <button 
                className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden relative bg-background/95 backdrop-blur-sm border-b border-border">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`block px-4 py-2 transition-colors ${
                  isActive(path)
                    ? 'text-foreground font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/about"
              className={`block px-4 py-2 transition-colors ${
                isActive('/about')
                  ? 'text-foreground font-medium'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}