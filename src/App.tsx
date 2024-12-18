import React from 'react';
import { ProfileInput } from './components/profile/ProfileInput';
import { DashboardGrid } from './components/dashboard/DashboardGrid';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 transition-colors duration-200">
      <ThemeToggle />
      
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Social Media Dashboard
          </h1>
          <p className="text-gray-400">
            Track and analyze your social media presence across platforms
          </p>
        </header>

        <ProfileInput />
        <DashboardGrid />
      </div>
    </div>
  );
}

export default App;