import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartData } from '@/types';

interface DataVisualizationProps {
  data: ChartData[];
}

export const DataVisualization: React.FC<DataVisualizationProps> = ({ data }) => {
  return (
    <Card className="border-t-4 border-t-teal-500">
      <CardHeader>
        <CardTitle className="text-teal-700">Data Visualization</CardTitle>
        <CardDescription>
          View trends and patterns in the hydrogen blend data
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-50" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="h2" stroke="#0d9488" name="H₂ Blend (%)" />
              <Line type="monotone" dataKey="ch4" stroke="#0891b2" name="CH₄ Content (%)" />
              <Line type="monotone" dataKey="cv" stroke="#0e7490" name="Calorific Value (MJ/m³)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};