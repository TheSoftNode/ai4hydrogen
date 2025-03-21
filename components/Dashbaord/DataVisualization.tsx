// import React from 'react';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { ChartData } from '@/types';

// interface DataVisualizationProps {
//   data: ChartData[];
// }

// export const DataVisualization: React.FC<DataVisualizationProps> = ({ data }) => {
//   return (
//     <Card className="border-t-4 border-t-teal-500">
//       <CardHeader>
//         <CardTitle className="text-teal-700">Data Visualization</CardTitle>
//         <CardDescription>
//           View trends and patterns in the hydrogen blend data
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         <div className="h-96">
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart data={data}>
//               <CartesianGrid strokeDasharray="3 3" className="opacity-50" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Line type="monotone" dataKey="h2" stroke="#0d9488" name="H₂ Blend (%)" />
//               <Line type="monotone" dataKey="ch4" stroke="#0891b2" name="CH₄ Content (%)" />
//               <Line type="monotone" dataKey="cv" stroke="#0e7490" name="Calorific Value (MJ/m³)" />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

import React, { useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartData } from '@/types';

interface DataVisualizationProps {
  data: ChartData[];
}

interface DistributionPoint {
  x: number;
  y: number;
}

interface BellCurveDataPoint {
  x: string;
  h2: number;
  ch4: number;
  cv: number;
}

// Function to generate normal distribution data points
const generateNormalDistribution = (mean: number, stdDev: number, numPoints: number = 100): DistributionPoint[] => {
  const points: DistributionPoint[] = [];
  const range = 4 * stdDev; // Cover ±2 standard deviations
  const step = range / numPoints;

  for (let i = 0; i <= numPoints; i++) {
    const x = mean - 2 * stdDev + i * step;
    // Normal distribution formula
    const y = (1 / (stdDev * Math.sqrt(2 * Math.PI))) *
      Math.exp(-0.5 * Math.pow((x - mean) / stdDev, 2));
    points.push({ x, y });
  }

  return points;
};

export const DataVisualization: React.FC<DataVisualizationProps> = ({ data }) => {
  // Generate bell curve data based on the input data
  const bellCurveData = useMemo((): BellCurveDataPoint[] => {
    if (!data || data.length === 0) {
      return [];
    }

    // Get the values from the first data point
    const { h2, ch4, cv } = data[0];

    // Generate points for each metric
    // Using different standard deviations to make curves visually distinct
    const h2Points = generateNormalDistribution(h2, h2 * 0.15);
    const ch4Points = generateNormalDistribution(ch4, ch4 * 0.12);
    const cvPoints = generateNormalDistribution(cv, cv * 0.10);

    // Combine all points
    return h2Points.map((point, i) => ({
      x: point.x.toFixed(2),
      h2: h2Points[i].y * h2 * 5, // Scale for visibility
      ch4: ch4Points[i].y * ch4 * 5,
      cv: cvPoints[i].y * cv * 5
    }));
  }, [data]);

  // If no data, show a placeholder message
  if (!data || data.length === 0) {
    return (
      <Card className="border-t-4 border-t-teal-500 dark:border-t-teal-400 dark:bg-gray-800 dark:text-gray-100">
        <CardHeader>
          <CardTitle className="text-teal-700 dark:text-teal-400">Data Visualization</CardTitle>
          <CardDescription className="dark:text-gray-400">
            View trends and patterns in the hydrogen blend data
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-96 flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-lg border border-dashed border-gray-300 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400">No data available to visualize</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-t-4 border-t-teal-500 dark:border-t-teal-400 dark:bg-gray-800 dark:text-gray-100">
      <CardHeader>
        <CardTitle className="text-teal-700 dark:text-teal-400">Data Visualization</CardTitle>
        <CardDescription className="dark:text-gray-400">
          Normal distribution curves for hydrogen blend properties
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={bellCurveData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-50" />
              <XAxis
                dataKey="x"
                label={{
                  value: 'Value',
                  position: 'insideBottomRight',
                  offset: -10
                }}
              />
              <YAxis label={{
                value: 'Probability',
                angle: -90,
                position: 'insideLeft'
              }} />
              <Tooltip
                formatter={(value, name) => {
                  const formattedValue = typeof value === 'number' ? value.toFixed(2) : value;
                  return [formattedValue, name];
                }}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="h2"
                stroke="#22c55e"
                fill="#22c55e"
                fillOpacity={0.6}
                name="H₂ Blend (%)"
              />
              <Area
                type="monotone"
                dataKey="ch4"
                stroke="#14b8a6"
                fill="#14b8a6"
                fillOpacity={0.6}
                name="CH₄ Content (%)"
              />
              <Area
                type="monotone"
                dataKey="cv"
                stroke="#6366f1"
                fill="#6366f1"
                fillOpacity={0.6}
                name="Calorific Value (MJ/m³)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};