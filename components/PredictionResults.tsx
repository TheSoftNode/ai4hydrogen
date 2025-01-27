import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { PredictionResult } from '@/types';

interface PredictionResultsProps {
    results: PredictionResult | null;
}

export const PredictionResults: React.FC<PredictionResultsProps> = ({ results }) => {
    if (!results) return null;

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
                {/* H2 Blend Card */}
                <Card className="border-t-4 border-t-teal-500">
                    <CardContent className="pt-6">
                        <div className="flex items-baseline justify-between">
                            <h3 className="text-sm font-bold text-gray-500">H₂ Blend</h3>
                            <div className="flex items-baseline">
                                <span className="text-2xl font-bold text-teal-700">
                                    {results['H2 Blend (%)']}
                                </span>
                                <span className="ml-1 text-sm text-gray-600">%</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* CH4 Content Card */}
                <Card className="border-t-4 border-t-cyan-600">
                    <CardContent className="pt-6">
                        <div className="flex items-baseline justify-between">
                            <h3 className="text-sm font-bold text-gray-500">CH₄ Content</h3>
                            <div className="flex items-baseline">
                                <span className="text-2xl font-bold text-cyan-700">
                                    {results['CH4 Content (%)']}
                                </span>
                                <span className="ml-1 text-sm text-gray-600">%</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Calorific Value Card */}
                <Card className="border-t-4 border-t-teal-500">
                    <CardContent className="pt-6">
                        <div className="flex items-baseline justify-between">
                            <h3 className="text-sm font-bold text-gray-500">Calorific Value</h3>
                            <div className="flex items-baseline">
                                <span className="text-2xl font-bold text-teal-700">
                                    {results['Calorific Value (MJ/m3)']}
                                </span>
                                <span className="ml-1 text-sm text-gray-600">MJ/m³</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};