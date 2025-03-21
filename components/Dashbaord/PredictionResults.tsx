import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { PredictionResult } from '@/types';
import { Button } from "@/components/ui/button";
import { Copy, Trash2, Check, ArrowDownToLine } from 'lucide-react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip";

interface PredictionResultsProps {
    results: PredictionResult | null;
    onClear?: () => void; // Optional callback to clear results
}

export const PredictionResults: React.FC<PredictionResultsProps> = ({ results, onClear }) => {
    const [copiedState, setCopiedState] = useState<{ [key: string]: boolean }>({
        h2: false,
        ch4: false,
        cv: false,
        all: false
    });

    if (!results) return null;

    // Function to copy a single value
    const copyValue = (value: string, type: 'h2' | 'ch4' | 'cv') => {
        navigator.clipboard.writeText(value);
        setCopiedState({ ...copiedState, [type]: true });

        // Reset copied state after 2 seconds
        setTimeout(() => {
            setCopiedState({ ...copiedState, [type]: false });
        }, 2000);
    };

    // Function to copy all results
    const copyAllResults = () => {
        const formattedResults = `
H₂ Blend: ${results['H2 Blend (%)']}%
CH₄ Content: ${results['CH4 Content (%)']}%
Calorific Value: ${results['Calorific Value (MJ/m3)']} MJ/m³
        `.trim();

        navigator.clipboard.writeText(formattedResults);
        setCopiedState({ ...copiedState, all: true });

        // Reset copied state after 2 seconds
        setTimeout(() => {
            setCopiedState({ ...copiedState, all: false });
        }, 2000);
    };

    // Function to export results as JSON
    const exportResults = () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(results, null, 2));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "prediction_results.json");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    };

    return (
        <TooltipProvider>
            <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                    {/* H2 Blend Card */}
                    <Card className="border-t-4 border-t-teal-500 shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-gray-950 dark:border-gray-800">
                        <CardContent className="pt-6 pb-4">
                            <div className="flex items-baseline justify-between">
                                <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400">H₂ Blend</h3>
                                <div className="flex items-baseline">
                                    <span className="text-2xl font-bold text-teal-700 dark:text-teal-500">
                                        {results['H2 Blend (%)']}
                                    </span>
                                    <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">%</span>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-8 w-8 ml-2"
                                                onClick={() => copyValue(results['H2 Blend (%)'].toString(), 'h2')}
                                            >
                                                {copiedState.h2 ?
                                                    <Check className="h-4 w-4 text-green-500" /> :
                                                    <Copy className="h-4 w-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" />
                                                }
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{copiedState.h2 ? 'Copied!' : 'Copy value'}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* CH4 Content Card */}
                    <Card className="border-t-4 border-t-cyan-600 shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-gray-950 dark:border-gray-800">
                        <CardContent className="pt-6 pb-4">
                            <div className="flex items-baseline justify-between">
                                <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400">CH₄ Content</h3>
                                <div className="flex items-baseline">
                                    <span className="text-2xl font-bold text-cyan-700 dark:text-cyan-500">
                                        {results['CH4 Content (%)']}
                                    </span>
                                    <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">%</span>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-8 w-8 ml-2"
                                                onClick={() => copyValue(results['CH4 Content (%)'].toString(), 'ch4')}
                                            >
                                                {copiedState.ch4 ?
                                                    <Check className="h-4 w-4 text-green-500" /> :
                                                    <Copy className="h-4 w-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" />
                                                }
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{copiedState.ch4 ? 'Copied!' : 'Copy value'}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Calorific Value Card */}
                    <Card className="border-t-4 border-t-teal-500 shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-gray-950 dark:border-gray-800">
                        <CardContent className="pt-6 pb-4">
                            <div className="flex items-baseline justify-between">
                                <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400">Calorific Value</h3>
                                <div className="flex items-baseline">
                                    <span className="text-2xl font-bold text-teal-700 dark:text-teal-500">
                                        {results['Calorific Value (MJ/m3)']}
                                    </span>
                                    <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">MJ/m³</span>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-8 w-8 ml-2"
                                                onClick={() => copyValue(results['Calorific Value (MJ/m3)'].toString(), 'cv')}
                                            >
                                                {copiedState.cv ?
                                                    <Check className="h-4 w-4 text-green-500" /> :
                                                    <Copy className="h-4 w-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" />
                                                }
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{copiedState.cv ? 'Copied!' : 'Copy value'}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Actions footer */}
                <div className="flex gap-3 justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                    <Button
                        variant="outline"
                        size="sm"
                        className="text-red-600 hover:text-red-700 border-red-200 hover:border-red-300 dark:text-red-400 dark:hover:text-red-300 dark:border-red-900 dark:hover:border-red-800 dark:bg-gray-900 dark:hover:bg-gray-800"
                        onClick={onClear}
                    >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Clear Results
                    </Button>
                    <div className="flex flex-wrap gap-2">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="bg-white hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800"
                                    onClick={exportResults}
                                >
                                    <ArrowDownToLine className="h-4 w-4 mr-2" />
                                    Export
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Export as JSON</p>
                            </TooltipContent>
                        </Tooltip>
                        <Button
                            variant="outline"
                            size="sm"
                            className="bg-white hover:bg-gray-50 border-teal-200 hover:border-teal-300 text-teal-700 hover:text-teal-800 
                                       dark:bg-gray-900 dark:hover:bg-gray-800 dark:border-teal-900 dark:hover:border-teal-800 dark:text-teal-500 dark:hover:text-teal-400"
                            onClick={copyAllResults}
                        >
                            {copiedState.all ?
                                <Check className="h-4 w-4 mr-2 text-green-500" /> :
                                <Copy className="h-4 w-4 mr-2" />
                            }
                            {copiedState.all ? 'Copied!' : 'Copy All'}
                        </Button>
                    </div>
                </div>
            </div>
        </TooltipProvider>
    );
};