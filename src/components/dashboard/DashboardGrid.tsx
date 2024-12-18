import React from 'react';
import { MetricsGrid } from './MetricsGrid';
import { MetricsChart } from './MetricsChart';
import { useDashboardStore } from '../../store/dashboardStore';

const sampleChartData = [
  { name: 'Jan', followers: 4000, engagement: 2400 },
  { name: 'Feb', followers: 3000, engagement: 1398 },
  { name: 'Mar', followers: 2000, engagement: 9800 },
  { name: 'Apr', followers: 2780, engagement: 3908 },
  { name: 'May', followers: 1890, engagement: 4800 },
  { name: 'Jun', followers: 2390, engagement: 3800 },
];

export const DashboardGrid: React.FC = () => {
  const { metrics } = useDashboardStore();

  return (
    <div className="p-6 space-y-6">
      <MetricsGrid metrics={metrics} />
      <MetricsChart data={sampleChartData} />
    </div>
  );
};