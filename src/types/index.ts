export type SocialMediaPlatform = 'instagram' | 'youtube' | 'facebook' | 'twitter' | 'linkedin';

export interface SocialMediaProfile {
  platform: SocialMediaPlatform;
  url: string;
}

export interface MetricData {
  value: number;
  change: number;
  trend: 'up' | 'down' | 'neutral';
}

export interface PlatformMetrics {
  followers: MetricData;
  engagement: MetricData;
  posts: MetricData;
  views: MetricData;
}

export interface DashboardData {
  [key: string]: PlatformMetrics;
}