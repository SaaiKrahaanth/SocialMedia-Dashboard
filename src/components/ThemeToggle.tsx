import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Button } from './ui/Button';
import { useTheme } from '../lib/hooks/useTheme';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="fixed top-4 right-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50"
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </Button>
  );
};