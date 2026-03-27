/* ============================================
   EtiquetteModal — Cultural Tip Pop-up
   Triggers on first Nshima view with
   animated slide-up + fade backdrop
   ============================================ */

import { useEffect, useState } from 'react';

export default function EtiquetteModal({ isOpen, onClose }) {
  const [visible, setVisible] = useState(false);

  // Delay mount animation so CSS transition triggers
  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end justify-center transition-all duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Backdrop overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal content */}
      <div
        className={`relative w-full max-w-lg mx-4 mb-4 rounded-3xl bg-cream shadow-2xl overflow-hidden transition-all duration-500 ease-out ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        {/* Decorative top pattern */}
        <div className="h-2 bg-gradient-to-r from-terracotta-500 via-maize-400 to-zambia-500" />

        {/* Content */}
        <div className="p-6">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-earth-100 flex items-center justify-center text-earth-500 hover:bg-earth-200 transition-colors"
          >
            ✕
          </button>

          {/* Icon */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-terracotta-100 to-maize-100 flex items-center justify-center text-3xl mb-4 mx-auto animate-scale-in">
            🫧
          </div>

          {/* Title */}
          <h3 className="font-display text-xl font-bold text-earth-800 text-center mb-2">
            A Warm Zambian Tradition
          </h3>

          {/* Divider */}
          <div className="w-12 h-1 bg-gradient-to-r from-terracotta-400 to-maize-400 rounded-full mx-auto mb-4" />

          {/* Body text */}
          <p className="text-earth-600 text-sm leading-relaxed text-center mb-4">
            Before enjoying your <span className="font-semibold text-terracotta-600">Nshima</span>, 
            a basin of warm water will be brought to your table.
          </p>

          <div className="bg-gradient-to-br from-terracotta-50 to-maize-50 rounded-2xl p-4 mb-5 border border-terracotta-100">
            <p className="text-earth-700 text-sm leading-relaxed text-center">
              <span className="font-semibold">🤚 The Hand-Washing Ritual:</span> Please wash 
              your hands before and after the meal. This is both a hygienic practice and a 
              beautiful sign of respect in Zambian dining culture.
            </p>
          </div>

          <div className="flex gap-2 text-xs text-earth-500 justify-center mb-5">
            <span className="bg-zambia-50 text-zambia-700 px-3 py-1 rounded-full border border-zambia-100">
              🤝 Eat with right hand
            </span>
            <span className="bg-maize-50 text-maize-700 px-3 py-1 rounded-full border border-maize-100">
              🙏 Say "Natotela"
            </span>
          </div>

          {/* Dismiss button */}
          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-terracotta-500 to-terracotta-600 text-white font-semibold text-sm shadow-lg shadow-terracotta-500/25 active:scale-[0.98] transition-transform"
          >
            Got it, let's eat! 🍚
          </button>
        </div>
      </div>
    </div>
  );
}
