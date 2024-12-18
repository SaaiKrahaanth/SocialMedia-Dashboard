import React, { useState } from 'react';
import { Button } from './ui/Button';
import { useDashboardStore } from '../store/dashboardStore';
import { 
  Instagram, 
  Youtube, 
  Facebook, 
  Twitter, 
  Linkedin,
  PlusCircle
} from 'lucide-react';

const platformIcons = {
  instagram: Instagram,
  youtube: Youtube,
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
};

export const ProfileInput = () => {
  const [url, setUrl] = useState('');
  const [platform, setPlatform] = useState<string>('');
  const addProfile = useDashboardStore((state) => state.addProfile);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url && platform) {
      addProfile({ platform: platform as any, url });
      setUrl('');
      setPlatform('');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Add Social Media Profile
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-wrap gap-2 mb-4">
          {Object.entries(platformIcons).map(([key, Icon]) => (
            <button
              key={key}
              type="button"
              onClick={() => setPlatform(key)}
              className={`p-3 rounded-full transition-all ${
                platform === key
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
              }`}
            >
              <Icon size={24} />
            </button>
          ))}
        </div>
        
        <div className="flex gap-2">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter profile URL"
            className="flex-1 p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            required
          />
          <Button type="submit" disabled={!url || !platform}>
            <PlusCircle className="mr-2" size={20} />
            Add Profile
          </Button>
        </div>
      </form>
    </div>
  );
};