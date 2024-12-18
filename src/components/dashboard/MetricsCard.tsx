import React from 'react';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';
import type { MetricData } from '../../types';
import { cn } from '../../lib/utils';

interface MetricsCardProps {
  title: string;
  metric: MetricData;
}

const TrendIcon = ({ trend }: { trend: MetricData['trend'] }) => {
  switch (trend) {
    case 'up':
      return <ArrowUpRight className="text-green-500" />;
    case 'down':
      return <ArrowDownRight className="text-red-500" />;
    default:
      return <Minus className="text-gray-500" />;
  }
};

export const MetricsCard: React.FC<MetricsCardProps> = ({ title, metric }) => {
  const trendColorClass = cn(
    'text-sm font-medium',
    metric.trend === 'up' && 'text-green-500',
    metric.trend === 'down' && 'text-red-500',
    metric.trend === 'neutral' && 'text-gray-500'
  );

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-700/50">
      <h3 className="text-lg font-semibold text-gray-200 mb-2">
        {title}
      </h3>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-white">
          {metric.value.toLocaleString()}
        </span>
        <div className="flex items-center space-x-1">
          <TrendIcon trend={metric.trend} />
          <span className={trendColorClass}>
            {Math.abs(metric.change)}%
          </span>
        </div>
      </div>
    </div>
  );
};