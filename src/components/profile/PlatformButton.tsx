import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '../../lib/utils';

interface PlatformButtonProps {
  icon: LucideIcon;
  platform: string;
  isSelected: boolean;
  onClick: () => void;
}

export const PlatformButton: React.FC<PlatformButtonProps> = ({
  icon: Icon,
  platform,
  isSelected,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "p-3 rounded-lg transition-all duration-200",
        "hover:bg-gray-700",
        "focus:outline-none focus:ring-2 focus:ring-blue-500",
        isSelected
          ? "bg-blue-600 text-white"
          : "bg-gray-900 text-gray-400"
      )}
      title={`Add ${platform} profile`}
    >
      <Icon size={24} />
    </button>
  );
};