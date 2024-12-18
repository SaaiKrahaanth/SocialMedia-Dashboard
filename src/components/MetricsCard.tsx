import React from 'react';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';
import type { MetricData } from '../types';

interface MetricsCardProps {
  title: string;
  metric: MetricData;
}

export const MetricsCard = ({ title, metric }: MetricsCardProps) => {
  const getTrendIcon = () => {
    switch (metric.trend) {
      case 'up':
        return <ArrowUpRight className="text-green-500" />;
      case 'down':
        return <ArrowDownRight className="text-red-500" />;
      default:
        return <Minus className="text-gray-500" />;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">
        {title}
      </h3>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          {metric.value.toLocaleString()}
        </span>
        <div className="flex items-center space-x-1">
          {getTrendIcon()}
          <span
            className={`text-sm font-medium ${
              metric.trend === 'up'
                ? 'text-green-500'
                : metric.trend === 'down'
                ? 'text-red-500'
                : 'text-gray-500'
            }`}
          >
            {Math.abs(metric.change)}%
          </span>
        </div>
      </div>
    </div>
  );
};