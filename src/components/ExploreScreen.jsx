/* ============================================
   ExploreScreen — The Food Glossary
   Visual grid of dishes with filter tags
   ============================================ */

import { useState } from 'react';
import { dishes, filterTags } from '../data/mockData';

export default function ExploreScreen({ onSelectDish, initialFilter }) {
  const [activeFilter, setActiveFilter] = useState(initialFilter || 'all');

  // Filter dishes based on selected tag
  const filteredDishes =
    activeFilter === 'all'
      ? dishes
      : dishes.filter((dish) =>
          dish.category.some((cat) => cat === activeFilter)
        );

  return (
    <div className="min-h-screen pb-24 chitenge-bg">
      {/* ── Header ── */}
      <div className="px-5 pt-14 pb-4 sm:px-8 md:px-12 lg:px-16">
        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-earth-800 animate-fade-in-up">
          Explore Zambian
          <span className="text-terracotta-500"> Cuisine</span>
        </h1>
        <p className="text-earth-400 text-sm sm:text-base mt-1 animate-fade-in-up stagger-1">
          Tap a dish to discover its story
        </p>
      </div>

      {/* ── Search Bar (visual placeholder) ── */}
      <div className="px-5 mb-4 animate-fade-in-up stagger-2 sm:px-8 md:px-12 lg:px-16">
        <div className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 sm:py-3.5 shadow-sm border border-earth-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-earth-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <span className="text-earth-300 text-sm sm:text-base">Search dishes, ingredients...</span>
        </div>
      </div>

      {/* ── Filter Tags (horizontal scroll) ── */}
      <div className="px-5 mb-5 animate-fade-in-up stagger-3 sm:px-8 md:px-12 lg:px-16">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {filterTags.map((tag) => {
            const isActive = activeFilter === tag.id;
            return (
              <button
                key={tag.id}
                onClick={() => setActiveFilter(tag.id)}
                className={`flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 shrink-0 ${
                  isActive
                    ? 'bg-gradient-to-r from-terracotta-500 to-terracotta-600 text-white shadow-md shadow-terracotta-500/20'
                    : 'bg-white text-earth-500 border border-earth-100 hover:border-terracotta-200 hover:text-terracotta-500'
                }`}
              >
                <span>{tag.icon}</span>
                <span>{tag.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Results Count ── */}
      <div className="px-5 mb-3 sm:px-8 md:px-12 lg:px-16">
        <p className="text-earth-400 text-xs sm:text-sm font-medium">
          {filteredDishes.length} {filteredDishes.length === 1 ? 'dish' : 'dishes'} found
        </p>
      </div>

      {/* ── Dish Grid ── */}
      <div className="px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {filteredDishes.map((dish, i) => (
            <button
              key={dish.id}
              onClick={() => onSelectDish(dish)}
              className={`animate-fade-in-up stagger-${(i % 8) + 1} group text-left rounded-2xl overflow-hidden bg-white shadow-sm border border-earth-50 hover:shadow-md hover:border-terracotta-100 transition-all duration-300 active:scale-[0.97]`}
            >
              {/* Real food image */}
              <div className="relative h-28 sm:h-36 md:h-40 lg:h-44 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                {/* Rating badge */}
                <div className="absolute top-2 right-2 bg-black/30 backdrop-blur-sm text-white text-[10px] sm:text-xs font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full flex items-center gap-0.5">
                  <span className="text-maize-300">★</span>
                  {dish.rating}
                </div>
              </div>

              {/* Card body */}
              <div className="p-3 sm:p-4">
                <h3 className="font-semibold text-sm sm:text-base text-earth-800 group-hover:text-terracotta-600 transition-colors">
                  {dish.name}
                </h3>
                <p className="text-[11px] sm:text-xs text-earth-400 mt-0.5 line-clamp-1">
                  {dish.subtitle}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mt-2">
                  {dish.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] sm:text-[10px] font-medium bg-terracotta-50 text-terracotta-600 px-2 py-0.5 rounded-full border border-terracotta-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Empty state */}
        {filteredDishes.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <div className="text-5xl mb-3">🍽️</div>
            <p className="text-earth-400 text-sm font-medium">No dishes found for this filter</p>
            <button
              onClick={() => setActiveFilter('all')}
              className="mt-3 text-terracotta-500 text-sm font-semibold hover:underline"
            >
              Show all dishes
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
