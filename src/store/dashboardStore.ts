import { create } from 'zustand';
import type { SocialMediaProfile, PlatformMetrics } from '../types';

interface DashboardStore {
  profiles: SocialMediaProfile[];
  metrics: Record<string, PlatformMetrics>;
  theme: 'light' | 'dark';
  addProfile: (profile: SocialMediaProfile) => void;
  removeProfile: (platform: string) => void;
  setTheme: (theme: 'light' | 'dark') => void;
}

const defaultMetrics: PlatformMetrics = {
  followers: { value: 0, change: 0, trend: 'neutral' },
  engagement: { value: 0, change: 0, trend: 'neutral' },
  posts: { value: 0, change: 0, trend: 'neutral' },
  views: { value: 0, change: 0, trend: 'neutral' },
};

export const useDashboardStore = create<DashboardStore>((set) => ({
  profiles: [],
  metrics: {},
  theme: 'dark',
  addProfile: (profile) =>
    set((state) => {
      // Add mock metrics for demonstration
      const mockMetrics = {
        followers: { value: Math.floor(Math.random() * 10000), change: 5, trend: 'up' },
        engagement: { value: Math.floor(Math.random() * 1000), change: 3, trend: 'up' },
        posts: { value: Math.floor(Math.random() * 100), change: 2, trend: 'up' },
        views: { value: Math.floor(Math.random() * 50000), change: 8, trend: 'up' },
      } as PlatformMetrics;

      return {
        profiles: [...state.profiles, profile],
        metrics: {
          ...state.metrics,
          [profile.platform]: mockMetrics,
        },
      };
    }),
  removeProfile: (platform) =>
    set((state) => {
      const { [platform]: _, ...remainingMetrics } = state.metrics;
      return {
        profiles: state.profiles.filter((p) => p.platform !== platform),
        metrics: remainingMetrics,
      };
    }),
  setTheme: (theme) => set({ theme }),
}));