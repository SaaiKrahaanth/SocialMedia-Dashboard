import { useEffect } from 'react';
import { useDashboardStore } from '../../store/dashboardStore';

export const useTheme = () => {
  const { theme, setTheme } = useDashboardStore();

  useEffect(() => {
    // Set initial theme
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return { theme, toggleTheme };
};