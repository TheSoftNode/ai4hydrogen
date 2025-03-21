'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, AlertCircle, BarChart3, Settings2, AlertTriangle, Info } from 'lucide-react';
import { PredictionForm } from '@/components/Dashbaord/PredictionForm';
import { PredictionResults } from '@/components/Dashbaord/PredictionResults';
import { DataVisualization } from '@/components/Dashbaord/DataVisualization';
import { SettingsPanel } from '@/components/Dashbaord/SettingsPanel';
import { FormData, PredictionResult, ChartData } from '@/types';

export default function Dashboard() {
    const [predictionResults, setPredictionResults] = useState<PredictionResult | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const clearResults = () => {
        setPredictionResults(null);
    };

    const handleSubmit = async (formData: FormData) => {
        setIsLoading(true);
        setError(null);
        try {
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

            if (!response.ok) {
                throw new Error('Prediction failed');
            }

            const data = await response.json();
            console.log(data);
            if (data.success) {
                setPredictionResults(data.prediction);
            } else {
                throw new Error('Prediction was not successful');
            }
        } catch (err) {
            setError('Failed to make prediction. Please try again.');
        } finally {
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
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="space-y-8">
                        <div className="bg-white dark:bg-gray-800 shadow-sm rounded-xl p-6 border border-gray-100 dark:border-gray-700">
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center">
                                <span className="text-teal-700 dark:text-teal-500">AI4</span>
                                <span className="text-cyan-600 dark:text-cyan-400">HyQ</span>
                                <span className="ml-2 px-2 py-1 text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300 rounded-md">ML-Powered</span>
                            </h1>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">Predict hydrogen blend properties using machine learning</p>

                            {/* Development Warning Banner */}
                            <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-800/60 px-4 py-3 flex items-start gap-3">
                                <div className="mt-0.5 flex-shrink-0">
                                    <AlertTriangle className="h-5 w-5 text-amber-500 dark:text-amber-400" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-amber-800 dark:text-amber-300">Development Preview</h3>
                                    <div className="mt-1 text-sm text-amber-700 dark:text-amber-400">
                                        <p>This application is currently under active development. Prediction results may not be accurate and should be used for demonstration purposes only. Model calibration and validation are still in progress.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Tabs defaultValue="predict" className="space-y-6">
                            <TabsList className="grid w-full grid-cols-3 bg-white dark:bg-gray-800 shadow-md rounded-xl border border-gray-100 dark:border-gray-700 p-1">
                                <TabsTrigger
                                    value="predict"
                                    className="data-[state=active]:bg-teal-50 dark:data-[state=active]:bg-teal-900/30 data-[state=active]:text-teal-700 dark:data-[state=active]:text-teal-400 rounded-lg flex items-center gap-2 transition-all duration-200"
                                >
                                    <Activity className="h-4 w-4" />
                                    Predict
                                </TabsTrigger>
                                <TabsTrigger
                                    value="visualize"
                                    className="data-[state=active]:bg-teal-50 dark:data-[state=active]:bg-teal-900/30 data-[state=active]:text-teal-700 dark:data-[state=active]:text-teal-400 rounded-lg flex items-center gap-2 transition-all duration-200"
                                >
                                    <BarChart3 className="h-4 w-4" />
                                    Visualize
                                </TabsTrigger>
                                <TabsTrigger
                                    value="settings"
                                    className="data-[state=active]:bg-teal-50 dark:data-[state=active]:bg-teal-900/30 data-[state=active]:text-teal-700 dark:data-[state=active]:text-teal-400 rounded-lg flex items-center gap-2 transition-all duration-200"
                                >
                                    <Settings2 className="h-4 w-4" />
                                    Settings
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="predict" className="space-y-4">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <Card className="border-t-4 border-t-teal-500 dark:border-gray-700 dark:border-t-teal-500 shadow-md hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 overflow-hidden">
                                        <CardHeader className="bg-gradient-to-r from-teal-50 to-white dark:from-gray-800 dark:to-gray-800 pb-6">
                                            <CardTitle className="text-teal-700 dark:text-teal-400 flex items-center gap-2">
                                                <Activity className="h-5 w-5" />
                                                Make Prediction
                                            </CardTitle>
                                            <CardDescription className="dark:text-gray-400">
                                                Enter the gas composition values to predict hydrogen blend properties
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <PredictionForm onSubmit={handleSubmit} isLoading={isLoading} />
                                        </CardContent>
                                    </Card>

                                    <Card className="border-t-4 border-t-cyan-500 dark:border-gray-700 dark:border-t-cyan-500 shadow-md hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 overflow-hidden">
                                        <CardHeader className="bg-gradient-to-r from-cyan-50 to-white dark:from-gray-800 dark:to-gray-800 pb-6">
                                            <CardTitle className="text-cyan-700 dark:text-cyan-400 flex items-center gap-2">
                                                <BarChart3 className="h-5 w-5" />
                                                Results
                                            </CardTitle>
                                            <CardDescription className="dark:text-gray-400">
                                                View the predicted properties of your hydrogen blend
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="relative">
                                            {error && (
                                                <Alert variant="destructive" className="mb-4 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
                                                    <AlertCircle className="h-4 w-4" />
                                                    <AlertTitle>Error</AlertTitle>
                                                    <AlertDescription>{error}</AlertDescription>
                                                </Alert>
                                            )}
                                            {!predictionResults && !error && (
                                                <div className="text-center py-12 px-4 text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/30 rounded-lg border border-dashed border-gray-300 dark:border-gray-700">
                                                    <p>Enter values and make a prediction to see results</p>
                                                </div>
                                            )}
                                            {predictionResults && (
                                                <div className="mb-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/50 px-4 py-3 flex items-center gap-2">
                                                    <Info className="h-4 w-4 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                                                    <p className="text-xs text-blue-700 dark:text-blue-300">Results are approximations based on the current model version and may not reflect actual values.</p>
                                                </div>
                                            )}
                                            <PredictionResults results={predictionResults} onClear={clearResults} />
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>

                            <TabsContent value="visualize">
                                <Card className="shadow-md hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 border dark:border-gray-700">
                                    <CardHeader>
                                        <CardTitle className="text-gray-800 dark:text-gray-200">Data Visualization</CardTitle>
                                        <CardDescription className="dark:text-gray-400">
                                            Visualize your prediction data
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        {chartData.length > 0 && (
                                            <div className="mb-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/50 px-4 py-3 flex items-center gap-2">
                                                <Info className="h-4 w-4 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                                                <p className="text-xs text-blue-700 dark:text-blue-300">Visualizations are based on model predictions and may not represent actual distributions.</p>
                                            </div>
                                        )}
                                        <DataVisualization data={chartData} />
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="settings">
                                <Card className="shadow-md hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 border dark:border-gray-700">
                                    <CardHeader>
                                        <CardTitle className="text-gray-800 dark:text-gray-200">Settings</CardTitle>
                                        <CardDescription className="dark:text-gray-400">
                                            Configure your prediction settings
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <SettingsPanel />
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </>
    );
}