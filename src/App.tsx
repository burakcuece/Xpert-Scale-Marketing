import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import CookieBanner from './components/CookieBanner';

export default function App() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      
      <footer className="bg-black py-8 border-t border-green-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Xpert Scale Marketing. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>

      {/* <CookieBanner /> */}
    </div>
  );
}