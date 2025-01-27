import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCardProps, ModelMetrics } from '@/types';

interface ModelInsightsProps {
  metrics: ModelMetrics;
}

const MetricCard: React.FC<MetricCardProps> = ({ value, label, color }) => (
  <Card className={`border-l-4 border-l-${color}-500`}>
    <CardContent className="pt-6">
      <div className={`text-2xl font-bold text-${color}-700`}>{value}</div>
      <p className="text-sm text-gray-600">{label}</p>
    </CardContent>
  </Card>
);

export const ModelInsights: React.FC<ModelInsightsProps> = ({ metrics }) => {
  return (
    <Card className="border-t-4 border-t-teal-500">
      <CardHeader>
        <CardTitle className="text-teal-700">Model Insights</CardTitle>
        <CardDescription>
          Understand the model's performance and feature importance
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-teal-700">Model Performance</h3>
            <p className="text-sm text-gray-600">Random Forest Regressor</p>
            <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-4">
              <MetricCard value={metrics.r2Score} label="R² Score" color="teal" />
              <MetricCard value={metrics.mae} label="MAE" color="cyan" />
              <MetricCard value={metrics.rmse} label="RMSE" color="teal" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};