import { PLATFORM_CONFIGS } from './constants';
import type { SocialMediaPlatform } from '../types';

export const validateUrl = (url: string, platform: SocialMediaPlatform): boolean => {
  const config = PLATFORM_CONFIGS[platform];
  return config.urlPattern.test(url);
};