import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Discover from './pages/Discover.tsx';
import Adventures from './pages/Adventures.tsx';
import Chat from './pages/Chat.tsx';
import Profile from './pages/Profile.tsx';

const Navigation = () => {
  const location = useLocation();
  const tabs = [
    { path: '/', icon: 'fa-home', label: 'Accueil' },
    { path: '/discover', icon: 'fa-compass', label: 'Explorer' },
    { path: '/adventures', icon: 'fa-map-marked-alt', label: 'Sorties' },
    { path: '/chat', icon: 'fa-comments', label: 'Messages' },
    { path: '/profile', icon: 'fa-user', label: 'Profil' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 glass z-50 px-6 py-3 flex justify-between items-center md:top-0 md:bottom-auto md:flex-col md:w-20 md:h-screen md:py-10">
      <div className="hidden md:block mb-10">
        <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
          <i className="fas fa-motorcycle text-white text-xl"></i>
        </div>
      </div>
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.path;
        return (
          <Link
            key={tab.path}
            to={tab.path}
            className={`flex flex-col items-center space-y-1 transition-colors ${
              isActive ? 'text-orange-500' : 'text-slate-400 hover:text-white'
            }`}
          >
            <i className={`fas ${tab.icon} text-xl`}></i>
            <span className="text-[10px] md:hidden">{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen pb-20 md:pb-0 md:pl-20">
        <Navigation />
        <main className="max-w-4xl mx-auto p-4 md:p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/adventures" element={<Adventures />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;