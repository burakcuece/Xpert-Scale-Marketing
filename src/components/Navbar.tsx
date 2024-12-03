import React from 'react';
import logo from './images/XpertScale_Marketing.png';

export default function Navbar() {
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  const getLinkClasses = (href: string) => {
    return 'text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium';
  };

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img src={logo} alt="Xpert Scale Marketing" className="h-8 sm:h-10" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className={getLinkClasses(href)}
                    onClick={() => {
                      const element = document.querySelector(href);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              // Hier könnte der Code für das mobile Menü hinzugefügt werden
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon für das mobile Menü */}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}