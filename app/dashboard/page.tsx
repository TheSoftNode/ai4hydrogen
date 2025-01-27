'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, AlertCircle, BarChart3, Settings2 } from 'lucide-react';
import { PredictionForm } from '@/components/PredictionForm';
import { PredictionResults } from '@/components/PredictionResults';
import { DataVisualization } from '@/components/DataVisualization';
import { SettingsPanel } from '@/components/SettingsPanel';
import { FormData, PredictionResult, ChartData } from '@/types';
import Footer from '@/components/Footer';

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
            const formDataObj: Record<string, string> = {
                H2S: formData.H2S,
                CO2: formData.CO2,
                CO: formData.CO,
                NOx: formData.NOx,
                SOx: formData.SOx,
            };

            const response = await fetch('https://ai4hyq.onrender.com/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataObj),
            });

            if (!response.ok)
            {
                throw new Error('Prediction failed');
            }

            const data = await response.json();
            console.log(data);
            if (data.success)
            {
                setPredictionResults(data.prediction);
            } else
            {
                throw new Error('Prediction was not successful');
            }
        } catch (err)
        {
            setError('Failed to make prediction. Please try again.');
        } finally
        {
            setIsLoading(false);
        }
    };


    const chartData: ChartData[] = predictionResults ? [
        {
            name: 'Current Prediction',
            h2: predictionResults['H2 Blend (%)'] || 0,
            ch4: predictionResults['CH4 Content (%)'] || 0,
            cv: predictionResults['Calorific Value (MJ/m3)'] || 0
        }
    ] : [];


    return (
        <>
            <div className="min-h-screen bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">
                                <span className="text-teal-700">AI4</span>
                                <span className="text-cyan-600">HyQ</span>
                            </h1>
                            <p className="mt-2 text-gray-600">Predict hydrogen blend properties using machine learning</p>
                        </div>

                        <Tabs defaultValue="predict" className="space-y-4">
                            <TabsList className="grid w-full grid-cols-3 bg-white shadow-sm">
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
                                <DataVisualization data={chartData} />
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