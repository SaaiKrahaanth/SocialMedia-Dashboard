import React from 'react';
import { Input } from '../ui/Input';
import { PLATFORM_CONFIGS } from '../../lib/constants';
import type { SocialMediaPlatform } from '../../types';

interface ProfileUrlInputProps {
  value: string;
  onChange: (value: string) => void;
  platform: SocialMediaPlatform | '';
  error?: string;
}

export const ProfileUrlInput: React.FC<ProfileUrlInputProps> = ({
  value,
  onChange,
  platform,
  error,
}) => {
  const config = platform ? PLATFORM_CONFIGS[platform as SocialMediaPlatform] : null;
  const placeholder = config 
    ? `e.g., ${config.placeholder}`
    : 'Select a platform first';

  return (
    <div className="space-y-1">
      <Input
        type="url"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        error={error}
        disabled={!platform}
        className="bg-gray-900 text-gray-100"
      />
      {config && !error && (
        <p className="text-sm text-gray-400">
          Enter your {config.name} profile URL
        </p>
      )}
    </div>
  );
};