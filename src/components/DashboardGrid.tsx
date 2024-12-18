import React from 'react';
import { MetricsCard } from './MetricsCard';
import { useDashboardStore } from '../store/dashboardStore';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export const DashboardGrid = () => {
  const { metrics } = useDashboardStore();

  // Sample data for the chart
  const chartData = [
    { name: 'Jan', followers: 4000, engagement: 2400 },
    { name: 'Feb', followers: 3000, engagement: 1398 },
    { name: 'Mar', followers: 2000, engagement: 9800 },
    { name: 'Apr', followers: 2780, engagement: 3908 },
    { name: 'May', followers: 1890, engagement: 4800 },
    { name: 'Jun', followers: 2390, engagement: 3800 },
  ];

  return (
    <div className="p-6 space-y-6">
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

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
          Growth Trends
        </h3>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="followers"
                stroke="#8884d8"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="engagement"
                stroke="#82ca9d"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};