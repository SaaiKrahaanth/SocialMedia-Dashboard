import React from 'react';
import { MetricsCard } from './MetricsCard';
import type { PlatformMetrics } from '../../types';

interface MetricsGridProps {
  metrics: Record<string, PlatformMetrics>;
}

export const MetricsGrid: React.FC<MetricsGridProps> = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {Object.entries(metrics).map(([platform, platformMetrics]) => (
        <React.Fragment key={platform}>
          <MetricsCard
            title={`${platform} Followers`}
            metric={platformMetrics.followers}
          />
          <MetricsCard
            title={`${platform} Engagement`}
            metric={platformMetrics.engagement}
          />
        </React.Fragment>
      ))}
    </div>
  );
};