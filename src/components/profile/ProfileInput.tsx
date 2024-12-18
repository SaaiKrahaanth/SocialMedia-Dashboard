import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { PlatformButton } from './PlatformButton';
import { ProfileUrlInput } from './ProfileUrlInput';
import { useDashboardStore } from '../../store/dashboardStore';
import { validateUrl } from '../../lib/validators';
import { PLATFORM_CONFIGS } from '../../lib/constants';
import { 
  Instagram, 
  Youtube, 
  Facebook, 
  Twitter, 
  Linkedin,
  PlusCircle
} from 'lucide-react';
import type { SocialMediaPlatform } from '../../types';

const platformIcons = {
  instagram: Instagram,
  youtube: Youtube,
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
} as const;

export const ProfileInput: React.FC = () => {
  const [url, setUrl] = useState('');
  const [platform, setPlatform] = useState<SocialMediaPlatform | ''>('');
  const [error, setError] = useState('');
  const addProfile = useDashboardStore((state) => state.addProfile);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!platform) {
      setError('Please select a platform');
      return;
    }

    if (!validateUrl(url, platform)) {
      setError(`Invalid ${PLATFORM_CONFIGS[platform].name} profile URL`);
      return;
    }

    addProfile({ platform, url });
    setUrl('');
    setPlatform('');
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-xl border border-gray-700/50">
      <h2 className="text-2xl font-bold mb-6 text-gray-100">
        Add Social Media Profile
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-wrap gap-3">
          {Object.entries(platformIcons).map(([key, Icon]) => (
            <PlatformButton
              key={key}
              icon={Icon}
              platform={key}
              isSelected={platform === key}
              onClick={() => {
                setPlatform(key as SocialMediaPlatform);
                setError('');
              }}
            />
          ))}
        </div>
        
        <div className="flex gap-3 flex-col sm:flex-row">
          <div className="flex-1">
            <ProfileUrlInput
              value={url}
              onChange={(value) => {
                setUrl(value);
                setError('');
              }}
              platform={platform}
              error={error}
            />
          </div>
          <Button 
            type="submit" 
            disabled={!url || !platform}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 h-auto sm:h-[42px]"
          >
            <PlusCircle className="mr-2" size={20} />
            Add Profile
          </Button>
        </div>
      </form>
    </div>
  );
};