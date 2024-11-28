import React from 'react';
import { Target, Zap } from 'react-feather';

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Willkommen bei Xpert Scale Marketing
          </h1>
          <p className="mt-4 text-lg leading-6 text-gray-300">
            Wir helfen Ihnen, Ihr Geschäft auf die nächste Stufe zu heben.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="animate-float">
              <div className="p-4 bg-black/50 backdrop-blur-lg rounded-xl border border-green-500/20 shadow-lg shadow-green-500/10">
                <Target className="h-8 w-8 text-green-500 mx-auto" />
                <p className="mt-2 text-sm text-gray-300">Gezielte Kampagnen</p>
              </div>
            </div>
            
            <div className="animate-float delay-600">
              <div className="p-4 bg-black/50 backdrop-blur-lg rounded-xl border border-green-500/20 shadow-lg shadow-green-500/10">
                <Zap className="h-8 w-8 text-green-500 mx-auto" />
                <p className="mt-2 text-sm text-gray-300">Schnelles Wachstum</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-green-500 hover:bg-green-400 transition-all shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transform hover:scale-105 active:scale-95"
            >
              Jetzt starten
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}