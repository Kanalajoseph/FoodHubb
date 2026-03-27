/* ============================================
   DetailsScreen — The Experience Hub
   Full dish view with hero, ingredients,
   cultural context, and mock map card
   ============================================ */

export default function DetailsScreen({ dish, onBack }) {
  if (!dish) return null;

  return (
    <div className="min-h-screen pb-24 bg-cream">
      {/* ── Hero Image Section ── */}
      <div className="relative">
        {/* Real food photo hero */}
        <div className="relative h-72 sm:h-80 md:h-96 lg:h-[28rem] overflow-hidden">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        </div>

        {/* Back button */}
        <button
          onClick={onBack}
          className="absolute top-12 left-4 sm:left-6 md:left-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/30 transition-colors z-20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Rating badge */}
        <div className="absolute top-12 right-4 sm:right-6 md:right-10 bg-black/20 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center gap-1 z-20">
          <span className="text-maize-300 text-sm sm:text-base">★</span>
          {dish.rating}
          <span className="text-white/60 font-normal">({dish.reviews})</span>
        </div>

        {/* Curved overlap */}
        <svg viewBox="0 0 400 30" className="absolute -bottom-1 left-0 w-full" preserveAspectRatio="none">
          <path d="M0 30 Q200 0 400 30 L400 30 L0 30 Z" fill="#FFF8F0" />
        </svg>
      </div>

      {/* ── Dish Info ── */}
      <div className="px-5 -mt-3 relative z-10 sm:px-8 md:px-12 lg:px-16">
        {/* Responsive layout: side-by-side on larger screens */}
        <div className="md:grid md:grid-cols-5 md:gap-8 lg:gap-12">
          {/* Main content */}
          <div className="md:col-span-3">
            {/* Name & subtitle */}
            <div className="animate-fade-in-up">
              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-earth-800">{dish.name}</h1>
              <p className="text-terracotta-500 text-sm sm:text-base md:text-lg font-medium mt-0.5">{dish.subtitle}</p>
            </div>

            {/* Quick info pills */}
            <div className="flex gap-2 sm:gap-3 mt-4 animate-fade-in-up stagger-1 flex-wrap">
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-earth-100 text-xs sm:text-sm">
                <span>⏱️</span>
                <span className="text-earth-600 font-medium">{dish.prepTime}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-earth-100 text-xs sm:text-sm">
                <span>📊</span>
                <span className="text-earth-600 font-medium">{dish.difficulty}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-earth-100 text-xs sm:text-sm">
                <span className="text-maize-500">★</span>
                <span className="text-earth-600 font-medium">{dish.rating}</span>
              </div>
            </div>

            {/* Description */}
            <div className="mt-5 animate-fade-in-up stagger-2">
              <h2 className="font-display text-base sm:text-lg md:text-xl font-bold text-earth-800 mb-2">About this dish</h2>
              <p className="text-sm sm:text-base text-earth-500 leading-relaxed">{dish.description}</p>
            </div>

            {/* ── Cultural Context Card ── */}
            <div className="mt-5 animate-fade-in-up stagger-3">
              <h2 className="font-display text-base sm:text-lg md:text-xl font-bold text-earth-800 mb-2">Cultural Context</h2>
              <div className="bg-gradient-to-br from-terracotta-50 to-maize-50 rounded-2xl p-4 sm:p-5 border border-terracotta-100">
                <div className="flex gap-3 items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-terracotta-400 to-maize-400 flex items-center justify-center text-xl sm:text-2xl shrink-0 shadow-sm">
                    🏛️
                  </div>
                  <p className="text-sm sm:text-base text-earth-600 leading-relaxed">{dish.culturalContext}</p>
                </div>
              </div>
            </div>

            {/* ── Ingredients ── */}
            <div className="mt-5 animate-fade-in-up stagger-4">
              <h2 className="font-display text-base sm:text-lg md:text-xl font-bold text-earth-800 mb-2">Ingredients</h2>
              <div className="flex flex-wrap gap-2">
                {dish.ingredients.map((ingredient, i) => (
                  <span
                    key={i}
                    className="bg-white px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-sm sm:text-base text-earth-600 font-medium border border-earth-100 shadow-sm flex items-center gap-1.5"
                  >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-terracotta-400 to-maize-400 shrink-0" />
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Tags ── */}
            <div className="mt-5 animate-fade-in-up stagger-5">
              <div className="flex flex-wrap gap-2">
                {dish.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gradient-to-r from-terracotta-500 to-terracotta-600 text-white text-xs sm:text-sm font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar: Where to eat (on md+ screens, this sits beside main content) */}
          <div className="md:col-span-2">
            {/* ── Where to Eat — Mock Map Card ── */}
            <div className="mt-6 md:mt-0 md:sticky md:top-6 animate-fade-in-up stagger-6">
              <h2 className="font-display text-base sm:text-lg md:text-xl font-bold text-earth-800 mb-2">Where to eat this</h2>
              <div className="bg-white rounded-2xl overflow-hidden border border-earth-100 shadow-sm">
                {/* Map placeholder */}
                <div className="relative h-36 sm:h-44 md:h-48 bg-gradient-to-br from-zambia-100 to-zambia-200 flex items-center justify-center overflow-hidden">
                  {/* Map grid lines */}
                  <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(0deg,transparent,transparent_19px,#2D5F2D_19px,#2D5F2D_20px),repeating-linear-gradient(90deg,transparent,transparent_19px,#2D5F2D_19px,#2D5F2D_20px)]" />

                  {/* Map pin */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-terracotta-500 flex items-center justify-center text-white text-lg sm:text-xl shadow-lg shadow-terracotta-500/30 animate-bounce">
                      📍
                    </div>
                    <div className="w-3 h-3 rounded-full bg-terracotta-500/30 mt-1" />
                  </div>

                  {/* Map label */}
                  <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 text-[10px] sm:text-xs font-medium text-earth-600 shadow-sm">
                    🗺️ Interactive map preview
                  </div>
                </div>

                {/* Restaurant info */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl bg-gradient-to-br from-terracotta-400 to-terracotta-500 flex items-center justify-center text-xl sm:text-2xl shrink-0 shadow-sm">
                      🏪
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm sm:text-base text-earth-800">{dish.restaurant.name}</h3>
                      <p className="text-xs sm:text-sm text-earth-400 mt-0.5">{dish.restaurant.address}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-maize-500 text-xs sm:text-sm">★</span>
                        <span className="text-xs sm:text-sm font-medium text-earth-600">{dish.restaurant.rating}</span>
                        <span className="text-earth-300 text-xs">•</span>
                        <span className="text-xs sm:text-sm text-earth-400">{dish.restaurant.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA button */}
                  <button className="w-full mt-4 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-zambia-500 to-zambia-600 text-white text-sm sm:text-base font-semibold shadow-md shadow-zambia-500/20 active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                    </svg>
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Spacer ── */}
        <div className="h-8" />
      </div>
    </div>
  );
}
