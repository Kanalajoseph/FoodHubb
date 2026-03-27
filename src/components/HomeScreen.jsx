/* ============================================
   HomeScreen — The Welcome Guide
   Warm welcome, hero, category buttons,
   and cultural etiquette card
   ============================================ */

import { categories, etiquetteTips } from '../data/mockData';

export default function HomeScreen({ onNavigate, onCategoryFilter }) {
  return (
    <div className="min-h-screen pb-24">
      {/* ── Hero Section ── */}
      <div className="chitenge-bg chitenge-hero relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-terracotta-500 via-terracotta-600 to-earth-700" />

        {/* Decorative circles */}
        <div className="absolute top-[-40px] right-[-30px] w-40 h-40 rounded-full bg-maize-400/20 blur-2xl" />
        <div className="absolute bottom-[-20px] left-[-30px] w-32 h-32 rounded-full bg-zambia-400/15 blur-xl" />

        <div className="relative z-10 px-5 pt-14 pb-10">
          {/* Mini badge */}
          <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white/90 text-xs font-medium px-3 py-1.5 rounded-full mb-4 animate-fade-in-up">
            <span>🇿🇲</span>
            <span>The Tourist&apos;s Food Compass</span>
          </div>

          {/* Welcome heading */}
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight mb-3 animate-fade-in-up stagger-1">
            Welcome to Zambia!
            <br />
            <span className="text-maize-300">Let&apos;s eat.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/80 text-sm leading-relaxed max-w-xs animate-fade-in-up stagger-2">
            Discover the rich flavors, stories, and traditions behind Zambia&apos;s
            most beloved dishes.
          </p>

          {/* Hero decorative food icons */}
          <div className="flex gap-3 mt-6 animate-fade-in-up stagger-3">
            {['🍚', '🥜', '🐟', '🍵'].map((emoji, i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-2xl border border-white/10"
              >
                {emoji}
              </div>
            ))}
          </div>
        </div>

        {/* Curved bottom */}
        <svg
          viewBox="0 0 400 30"
          className="absolute bottom-0 left-0 w-full"
          preserveAspectRatio="none"
        >
          <path d="M0 30 Q200 0 400 30 L400 30 L0 30 Z" fill="#FFF8F0" />
        </svg>
      </div>

      {/* ── Quick Categories ── */}
      <div className="px-5 -mt-1">
        <h2 className="font-display text-lg font-bold text-earth-800 mb-3 animate-fade-in-up stagger-3">
          What are you craving?
        </h2>

        <div className="flex flex-col gap-3">
          {categories.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => {
                onCategoryFilter(cat.filterTags);
                onNavigate('explore');
              }}
              className={`animate-fade-in-up stagger-${i + 4} group relative overflow-hidden rounded-2xl p-4 text-left transition-all duration-300 active:scale-[0.98]`}
            >
              {/* Card gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${cat.gradient} opacity-90`} />
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,white_0px,white_1px,transparent_1px,transparent_8px)]" />

              <div className="relative z-10 flex items-center gap-4">
                {/* Emoji icon */}
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl shrink-0 border border-white/20 group-hover:scale-110 transition-transform">
                  {cat.emoji}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base">{cat.name}</h3>
                  <p className="text-white/75 text-xs mt-0.5">{cat.description}</p>
                </div>
                {/* Arrow */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white/60 ml-auto shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── Learn the Basics — Etiquette Card ── */}
      <div className="px-5 mt-8 mb-6">
        <h2 className="font-display text-lg font-bold text-earth-800 mb-3 animate-fade-in-up">
          Learn the Basics
        </h2>

        <div className="bg-gradient-to-br from-cream-dark to-cream rounded-2xl border border-earth-100 overflow-hidden shadow-sm animate-fade-in-up">
          {/* Header bar */}
          <div className="bg-gradient-to-r from-earth-500 to-earth-600 px-4 py-3 flex items-center gap-2">
            <span className="text-lg">🤝</span>
            <span className="text-white font-semibold text-sm">Zambian Dining Etiquette</span>
          </div>

          {/* Tips list */}
          <div className="p-4 space-y-3">
            {etiquetteTips.map((tip) => (
              <div key={tip.id} className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-xl bg-terracotta-50 flex items-center justify-center text-lg shrink-0 border border-terracotta-100">
                  {tip.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-earth-800">{tip.title}</h4>
                  <p className="text-xs text-earth-500 leading-relaxed mt-0.5">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Fun Fact Banner ── */}
      <div className="px-5 mb-8">
        <div className="bg-gradient-to-r from-zambia-500 to-zambia-600 rounded-2xl p-4 flex items-center gap-3 shadow-lg shadow-zambia-500/15 animate-fade-in-up">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl shrink-0">
            💡
          </div>
          <div>
            <p className="text-white/90 text-xs leading-relaxed">
              <span className="font-semibold text-white">Did you know?</span> Zambians consume 
              over 100kg of Nshima per person per year, making it one of the highest maize 
              consumption rates in the world!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
