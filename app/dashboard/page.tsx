'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, AlertCircle, BarChart3, Settings2 } from 'lucide-react';
import { PredictionForm } from '@/components/PredictionForm';
import { PredictionResults } from '@/components/PredictionResults';
import { DataVisualization } from '@/components/DataVisualization';
import { ModelInsights } from '@/components/ModelInsights';
import { SettingsPanel } from '@/components/SettingsPanel';
import { FormData, PredictionResult, ChartData } from '@/types';
import Footer from '@/components/Footer';

const mockChartData: ChartData[] = [
    { name: 'Sample 1', h2: 65, ch4: 35, cv: 38 },
    { name: 'Sample 2', h2: 70, ch4: 30, cv: 36 },
    { name: 'Sample 3', h2: 75, ch4: 25, cv: 34 },
    { name: 'Sample 4', h2: 80, ch4: 20, cv: 32 },
    { name: 'Sample 5', h2: 85, ch4: 15, cv: 30 },
];

const mockMetrics = {
    r2Score: '0.95',
    mae: '0.03',
    rmse: '0.05'
};

export default function Dashboard()
{
    const [predictionResults, setPredictionResults] = useState<PredictionResult | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (formData: FormData) =>
    {
        setIsLoading(true);
        setError(null);
        try
        {
            // Convert FormData to a simple object
            const formDataObj: Record<string, string> = {
                H2S: formData.H2S,
                CO2: formData.CO2,
                CO: formData.CO,
                NOx: formData.NOx,
                SOx: formData.SOx,
            };

            const response = await fetch('http://localhost:5000/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(formDataObj),
            });

            if (!response.ok)
            {
                throw new Error('Prediction failed');
            }

            const data = await response.json();
            setPredictionResults(data);
        } catch (err)
        {
            setError('Failed to make prediction. Please try again.');
        } finally
        {
            setIsLoading(false);
        }
    };

    return (
        <>
         <div className="min-h-screen bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="space-y-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">
                            <span className="text-teal-700">AI4</span>
                            <span className="text-cyan-600">Hydrogen</span>
                        </h1>
                        <p className="mt-2 text-gray-600">Predict hydrogen blend properties using machine learning</p>
                    </div>

                    <Tabs defaultValue="predict" className="space-y-4">
                        <TabsList className="grid w-full grid-cols-4 bg-white shadow-sm">
                            <TabsTrigger
                                value="predict"
                                className="data-[state=active]:bg-teal-50 data-[state=active]:text-teal-700 flex items-center gap-2"
                            >
                                <Activity className="h-4 w-4" />
                                Predict
                            </TabsTrigger>
                            <TabsTrigger
                                value="visualize"
                                className="data-[state=active]:bg-teal-50 data-[state=active]:text-teal-700 flex items-center gap-2"
                            >
                                <BarChart3 className="h-4 w-4" />
                                Visualize
                            </TabsTrigger>
                            <TabsTrigger
                                value="insights"
                                className="data-[state=active]:bg-teal-50 data-[state=active]:text-teal-700 flex items-center gap-2"
                            >
                                <AlertCircle className="h-4 w-4" />
                                Insights
                            </TabsTrigger>
                            <TabsTrigger
                                value="settings"
                                className="data-[state=active]:bg-teal-50 data-[state=active]:text-teal-700 flex items-center gap-2"
                            >
                                <Settings2 className="h-4 w-4" />
                                Settings
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="predict">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <Card className="border-t-4 border-t-teal-500">
                                    <CardHeader>
                                        <CardTitle className="text-teal-700">Make Prediction</CardTitle>
                                        <CardDescription>
                                            Enter the gas composition values to predict hydrogen blend properties
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <PredictionForm onSubmit={handleSubmit} isLoading={isLoading} />
                                    </CardContent>
                                </Card>

                                <Card className="border-t-4 border-t-cyan-500">
                                    <CardHeader>
                                        <CardTitle className="text-cyan-700">Results</CardTitle>
                                        <CardDescription>
                                            View the predicted properties of your hydrogen blend
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        {error && (
                                            <Alert variant="destructive">
                                                <AlertCircle className="h-4 w-4" />
                                                <AlertTitle>Error</AlertTitle>
                                                <AlertDescription>{error}</AlertDescription>
                                            </Alert>
                                        )}
                                        <PredictionResults results={predictionResults} />
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        <TabsContent value="visualize">
                            <DataVisualization data={mockChartData} />
                        </TabsContent>

                        <TabsContent value="insights">
                            <ModelInsights metrics={mockMetrics} />
                        </TabsContent>

                        <TabsContent value="settings">
                            <SettingsPanel />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>

        <Footer />
        </>
    );
}