import React from 'react';
import { Award, Users, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white sm:text-4xl px-4">
            Über Xpert Scale Marketing
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Wir sind Ihr Partner für digitales Wachstum. Mit datengetriebenen Strategien und innovativen Lösungen bringen wir Ihr Unternehmen auf das nächste Level.
          </p>
        </div>

        <div className="mt-12 sm:mt-20">
          <div className="grid grid-cols-1 gap-6 sm:gap-12 sm:grid-cols-2 lg:grid-cols-3 px-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
              <div className="relative p-6 sm:p-8 bg-black border border-green-500/10 rounded-xl hover:border-green-500/30 transition-all h-full">
                <Award className="h-10 w-10 sm:h-12 sm:w-12 text-green-500 mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Expertise</h3>
                <p className="text-sm sm:text-base text-gray-400">
                  Über 10 Jahre Erfahrung in digitalem Marketing und Performance-Optimierung. Wir kennen die neuesten Trends und Technologien.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
              <div className="relative p-6 sm:p-8 bg-black border border-green-500/10 rounded-xl hover:border-green-500/30 transition-all h-full">
                <Users className="h-10 w-10 sm:h-12 sm:w-12 text-green-500 mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Unser Team</h3>
                <p className="text-sm sm:text-base text-gray-400">
                  Ein Team von Experten aus den Bereichen Marketing, Analyse und Technologie arbeitet Hand in Hand für Ihren Erfolg.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
              <div className="relative p-6 sm:p-8 bg-black border border-green-500/10 rounded-xl hover:border-green-500/30 transition-all h-full">
                <TrendingUp className="h-10 w-10 sm:h-12 sm:w-12 text-green-500 mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Unsere Mission</h3>
                <p className="text-sm sm:text-base text-gray-400">
                  Wir helfen Unternehmen dabei, ihr volles Potenzial im digitalen Raum zu entfalten und nachhaltig zu wachsen.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 text-center px-4">
            <div className="p-4 sm:p-6">
              <div className="text-2xl sm:text-4xl font-bold text-green-500 mb-2">500+</div>
              <div className="text-sm sm:text-base text-gray-400">Erfolgreiche Projekte</div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="text-2xl sm:text-4xl font-bold text-green-500 mb-2">95%</div>
              <div className="text-sm sm:text-base text-gray-400">Kundenzufriedenheit</div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="text-2xl sm:text-4xl font-bold text-green-500 mb-2">10+</div>
              <div className="text-sm sm:text-base text-gray-400">Jahre Erfahrung</div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="text-2xl sm:text-4xl font-bold text-green-500 mb-2">50M+</div>
              <div className="text-sm sm:text-base text-gray-400">Verwaltetes Werbebudget</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}