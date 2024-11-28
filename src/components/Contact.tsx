import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white sm:text-4xl px-4">
            Kontaktieren Sie uns
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-400 px-4">
            Bereit, Ihr Unternehmen zu skalieren? Lassen Sie uns über Ihre Ziele sprechen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div className="space-y-6 sm:space-y-8 px-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Phone className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">Telefon</h3>
                <p className="mt-1 text-gray-400">+49 163 6753600</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Mail className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">E-Mail</h3>
                <p className="mt-1 text-gray-400">info@xpertscale.de</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <MapPin className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">Standort</h3>
                <p className="mt-1 text-gray-400">Recklinghausen, Deutschland</p>
              </div>
            </div>
          </div>

          <form className="space-y-4 sm:space-y-6 px-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full bg-gray-900 border border-gray-800 rounded-md shadow-sm py-2 px-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                E-Mail
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full bg-gray-900 border border-gray-800 rounded-md shadow-sm py-2 px-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Nachricht
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full bg-gray-900 border border-gray-800 rounded-md shadow-sm py-2 px-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-green-500 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all transform hover:scale-105 active:scale-95"
            >
              Nachricht senden
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}