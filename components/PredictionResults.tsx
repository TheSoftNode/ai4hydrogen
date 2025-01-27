import React from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from 'lucide-react';
import { PredictionResult } from '@/types';

interface PredictionResultsProps
{
    results: PredictionResult | null;
}

export const PredictionResults: React.FC<PredictionResultsProps> = ({ results }) =>
{
    if (!results) return null;

    return (
        <div className="space-y-4">
            <Alert className="border-l-4 border-cyan-500 bg-cyan-50">
                <AlertCircle className="h-4 w-4 text-cyan-600" />
                <AlertTitle className="text-cyan-800">Prediction Results</AlertTitle>
                <AlertDescription className="text-cyan-700">
                    <div className="mt-2 space-y-2">
                        <p>H₂ Blend: {results['H₂ Blend (%)']}%</p>
                        <p>CH₄ Content: {results['CH₄ Content (%)']}%</p>
                        <p>Calorific Value: {results['Calorific Value (MJ/m³)']} MJ/m³</p>
                    </div>
                </AlertDescription>
            </Alert>
        </div>
    );
};