/* ============================================
   App.jsx — The Tourist's Food Compass
   Main app shell with state-based navigation
   between Home, Explore, and Details screens
   ============================================ */

import { useState, useCallback } from 'react';
import './App.css';

import HomeScreen from './components/HomeScreen';
import ExploreScreen from './components/ExploreScreen';
import DetailsScreen from './components/DetailsScreen';
import BottomNav from './components/BottomNav';
import EtiquetteModal from './components/EtiquetteModal';

function App() {
  // Navigation state
  const [activeScreen, setActiveScreen] = useState('home');
  const [selectedDish, setSelectedDish] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState(null);

  // Track whether the Nshima etiquette modal has been shown
  const [hasSeenNshimaModal, setHasSeenNshimaModal] = useState(false);
  const [showEtiquetteModal, setShowEtiquetteModal] = useState(false);

  // Navigate to a screen
  const handleNavigate = useCallback((screen) => {
    setActiveScreen(screen);
    if (screen !== 'details') {
      setSelectedDish(null);
    }
    // Scroll to top on screen change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Select a dish and navigate to details
  const handleSelectDish = useCallback(
    (dish) => {
      setSelectedDish(dish);
      setActiveScreen('details');
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Trigger Nshima etiquette modal on first view
      if (dish.name === 'Nshima' && !hasSeenNshimaModal) {
        setTimeout(() => {
          setShowEtiquetteModal(true);
          setHasSeenNshimaModal(true);
        }, 800);
      }
    },
    [hasSeenNshimaModal]
  );

  // Go back from details to explore
  const handleBack = useCallback(() => {
    setActiveScreen('explore');
    setSelectedDish(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Set category filter from home screen and navigate to explore
  const handleCategoryFilter = useCallback((filterTags) => {
    setCategoryFilter(filterTags?.[0] || null);
  }, []);

  return (
    <div className="max-w-lg sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto bg-cream min-h-screen relative overflow-x-hidden">
      {/* Screen content */}
      {activeScreen === 'home' && (
        <HomeScreen
          onNavigate={handleNavigate}
          onCategoryFilter={handleCategoryFilter}
        />
      )}

      {activeScreen === 'explore' && (
        <ExploreScreen
          onSelectDish={handleSelectDish}
          initialFilter={categoryFilter}
        />
      )}

      {activeScreen === 'details' && (
        <DetailsScreen dish={selectedDish} onBack={handleBack} />
      )}

      {/* Bottom navigation (hidden on details screen) */}
      {activeScreen !== 'details' && (
        <BottomNav activeScreen={activeScreen} onNavigate={handleNavigate} />
      )}

      {/* Nshima etiquette modal */}
      <EtiquetteModal
        isOpen={showEtiquetteModal}
        onClose={() => setShowEtiquetteModal(false)}
      />
    </div>
  );
}

export default App;
