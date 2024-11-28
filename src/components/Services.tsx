import React from 'react';
import { LineChart, Target, Rocket, Users, Zap, BarChart } from 'lucide-react';

const services = [
  {
    icon: LineChart,
    title: 'Performance Marketing',
    description: 'Datengetriebene Werbekampagnen auf Google Ads und Meta Ads mit nachweisbarem ROI und messbaren Ergebnissen'
  },
  {
    icon: Target,
    title: 'Paid Advertising',
    description: 'Strategisch optimierte Werbekampagnen auf allen relevanten Plattformen für maximale Reichweite und Conversion'
  },
  {
    icon: Rocket,
    title: 'Skalierungs-Strategien',
    description: 'Systematische Wachstumsstrategien zur effizienten Skalierung Ihres Marketing-Budgets und Geschäftserfolgs'
  },
  {
    icon: Users,
    title: 'Zielgruppen-Optimierung',
    description: 'KI-gestützte Zielgruppenanalyse für präzise Kundenansprache und minimale Streuverluste in Ihren Kampagnen'
  },
  {
    icon: Zap,
    title: 'Conversion-Optimierung',
    description: 'Kontinuierliche Optimierung Ihrer Verkaufsprozesse und Landing Pages für maximale Conversion-Raten'
  },
  {
    icon: BarChart,
    title: 'Marketing Automation',
    description: 'Automatisierte Marketing-Prozesse für effiziente Kundengewinnung und nachhaltige Kundenbindung'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white sm:text-4xl px-4">
            Unsere Leistungen
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-400 px-4">
            Professionelle Performance Marketing Lösungen für maximales Wachstum
          </p>
        </div>

        <div className="mt-12 sm:mt-20 grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
              <div className="relative p-6 sm:p-8 bg-black border border-green-500/10 rounded-xl hover:border-green-500/30 transition-all h-full flex flex-col items-center text-center">
                <service.icon className="h-10 w-10 sm:h-12 sm:w-12 text-green-500 mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}