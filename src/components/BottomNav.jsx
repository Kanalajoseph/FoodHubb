/* ============================================
   BottomNav — Mobile tab bar navigation
   Three tabs: Home, Explore, (Details is
   accessed by tapping a dish card)
   ============================================ */

export default function BottomNav({ activeScreen, onNavigate }) {
  const tabs = [
    {
      id: 'home',
      label: 'Home',
      icon: (active) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={active ? 0 : 1.8} className="w-6 h-6">
          <path d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      ),
    },
    {
      id: 'explore',
      label: 'Explore',
      icon: (active) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={active ? 0 : 1.8} className="w-6 h-6">
          <path d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
        </svg>
      ),
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-xl border-t border-earth-100 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
      <div className="max-w-lg mx-auto flex justify-around items-center py-2 px-4">
        {tabs.map((tab) => {
          const isActive = activeScreen === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`flex flex-col items-center gap-0.5 px-6 py-1.5 rounded-2xl transition-all duration-300 ${
                isActive
                  ? 'text-terracotta-500'
                  : 'text-earth-300 hover:text-earth-500'
              }`}
            >
              {/* Active indicator dot */}
              <div className="relative">
                {tab.icon(isActive)}
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-terracotta-500" />
                )}
              </div>
              <span className={`text-[10px] font-medium ${isActive ? 'text-terracotta-600' : ''}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
      {/* Safe area padding for iOS */}
      <div className="h-[env(safe-area-inset-bottom)]" />
    </nav>
  );
}
