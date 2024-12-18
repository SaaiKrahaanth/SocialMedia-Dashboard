import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

interface MetricsChartProps {
  data: Array<{
    name: string;
    followers: number;
    engagement: number;
  }>;
}

export const MetricsChart: React.FC<MetricsChartProps> = ({ data }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-700/50">
      <h3 className="text-xl font-semibold mb-4 text-white">
        Growth Trends
      </h3>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="name" 
              stroke="#9CA3AF"
              tick={{ fill: '#9CA3AF' }}
            />
            <YAxis 
              stroke="#9CA3AF"
              tick={{ fill: '#9CA3AF' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937',
                border: '1px solid #374151',
                borderRadius: '0.5rem',
                color: '#F3F4F6'
              }}
            />
            <Legend 
              wrapperStyle={{ 
                color: '#F3F4F6'
              }}
            />
            <Line
              type="monotone"
              dataKey="followers"
              stroke="#8B5CF6"
              strokeWidth={2}
              dot={{ fill: '#8B5CF6' }}
              name="Followers"
            />
            <Line
              type="monotone"
              dataKey="engagement"
              stroke="#10B981"
              strokeWidth={2}
              dot={{ fill: '#10B981' }}
              name="Engagement"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};