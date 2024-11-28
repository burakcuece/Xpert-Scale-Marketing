import React, { useState, useEffect } from 'react';
import { Cookie, X, Settings } from 'lucide-react';
import CookieManager from './CookieManager';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isManagerOpen, setIsManagerOpen] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true
    };
    localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted));
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  const declineCookies = () => {
    const minimal = {
      essential: true,
      analytics: false,
      marketing: false
    };
    localStorage.setItem('cookiePreferences', JSON.stringify(minimal));
    localStorage.setItem('cookiesAccepted', 'false');
    setIsVisible(false);
  };

  const openManager = () => {
    setIsManagerOpen(true);
    setIsVisible(false);
  };

  if (!isVisible && !isManagerOpen) return null;

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-black/95 backdrop-blur-sm border-t border-green-500/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Cookie className="h-6 w-6 text-green-500 flex-shrink-0" />
                <p className="text-sm text-gray-300">
                  Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern.
                  <button
                    onClick={openManager}
                    className="text-green-500 hover:text-green-400 ml-1 inline-flex items-center"
                  >
                    Einstellungen verwalten
                    <Settings className="h-4 w-4 ml-1" />
                  </button>
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <button
                  onClick={declineCookies}
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  Ablehnen
                </button>
                <button
                  onClick={acceptCookies}
                  className="px-4 py-2 text-sm font-medium rounded-md text-black bg-green-500 hover:bg-green-400 transition-all transform hover:scale-105 active:scale-95"
                >
                  Alle akzeptieren
                </button>
                <button
                  onClick={declineCookies}
                  className="sm:hidden p-2 text-gray-400 hover:text-white"
                  aria-label="Banner schließen"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <CookieManager
        isOpen={isManagerOpen}
        onClose={() => setIsManagerOpen(false)}
      />
    </>
  );
}