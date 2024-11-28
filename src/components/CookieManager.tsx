import React from 'react';
import { Cookie, X } from 'lucide-react';

interface CookieManagerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CookieManager({ isOpen, onClose }: CookieManagerProps) {
  const cookieTypes = [
    {
      id: 'essential',
      name: 'Essentielle Cookies',
      description: 'Diese Cookies sind für die Grundfunktionen der Website erforderlich.',
      required: true
    },
    {
      id: 'analytics',
      name: 'Analyse Cookies',
      description: 'Helfen uns zu verstehen, wie Besucher mit der Website interagieren.',
      required: false
    },
    {
      id: 'marketing',
      name: 'Marketing Cookies',
      description: 'Werden verwendet, um Werbung relevanter für Sie zu gestalten.',
      required: false
    }
  ];

  const handleSave = () => {
    const preferences = cookieTypes.reduce((acc, cookie) => {
      const checkbox = document.getElementById(cookie.id) as HTMLInputElement;
      acc[cookie.id] = cookie.required || checkbox?.checked || false;
      return acc;
    }, {} as Record<string, boolean>);

    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    localStorage.setItem('cookiesAccepted', 'true');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="cookie-manager-title" role="dialog" aria-modal="true">
      <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-black/75 transition-opacity" aria-hidden="true" onClick={onClose} />

        <div className="inline-block transform overflow-hidden rounded-lg bg-black text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
          <div className="border border-green-500/10 bg-black px-4 pt-5 pb-4 sm:p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <Cookie className="h-6 w-6 text-green-500" />
                <h3 className="ml-3 text-lg font-medium leading-6 text-white" id="cookie-manager-title">
                  Cookie-Einstellungen
                </h3>
              </div>
              <button
                onClick={onClose}
                className="rounded-md bg-black text-gray-400 hover:text-white focus:outline-none"
              >
                <span className="sr-only">Schließen</span>
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-6 space-y-6">
              {cookieTypes.map((cookie) => (
                <div key={cookie.id} className="relative flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id={cookie.id}
                      name={cookie.id}
                      type="checkbox"
                      defaultChecked={cookie.required}
                      disabled={cookie.required}
                      className="h-4 w-4 rounded border-gray-700 bg-gray-900 text-green-500 focus:ring-green-500 focus:ring-offset-black"
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor={cookie.id} className="font-medium text-white">
                      {cookie.name}
                    </label>
                    <p className="text-sm text-gray-400">{cookie.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-green-500/10 bg-black/50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="button"
              onClick={handleSave}
              className="inline-flex w-full justify-center rounded-md bg-green-500 px-3 py-2 text-sm font-medium text-black shadow-sm hover:bg-green-400 sm:ml-3 sm:w-auto transition-all transform hover:scale-105 active:scale-95"
            >
              Einstellungen speichern
            </button>
            <button
              type="button"
              onClick={onClose}
              className="mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white sm:mt-0 sm:w-auto"
            >
              Abbrechen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}