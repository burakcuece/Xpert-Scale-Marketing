import React, { useState, useEffect } from 'react';
import { Menu, X, BarChart2 } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Start' },
    { href: '#services', label: 'Leistungen' },
    { href: '#about', label: 'Über uns' },
    { href: '#contact', label: 'Kontakt' }
  ];

  const getLinkClasses = (href: string) => {
    const section = href.replace('#', '');
    return `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
      activeSection === section
        ? 'text-green-500 bg-green-500/10'
        : 'text-gray-300 hover:text-green-500'
    }`;
  };

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <BarChart2 className="h-8 w-8 text-green-500" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className={getLinkClasses(href)}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`block ${getLinkClasses(href)}`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}