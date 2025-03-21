import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormData } from '@/types';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { Info, AlertTriangle, ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";

interface PredictionFormProps {
  onSubmit: (data: FormData) => void;
  isLoading: boolean;
}

// Define a type that ensures the keys match FormData
type FieldConfig = {
  [K in keyof FormData]: {
    label: string;
    tooltip: string;
    min: number;
    max: number;
  }
};

const formFields: FieldConfig = {
  'H2S': {
    label: 'H₂S (ppm)',
    tooltip: 'Hydrogen Sulfide in parts per million',
    min: 0,
    max: 1000
  },
  'CO2': {
    label: 'CO₂ (g/m³)',
    tooltip: 'Carbon Dioxide in grams per cubic meter',
    min: 0,
    max: 2000
  },
  'CO': {
    label: 'CO (g/m³)',
    tooltip: 'Carbon Monoxide in grams per cubic meter',
    min: 0,
    max: 1000
  },
  'NOx': {
    label: 'NOₓ (g/m³)',
    tooltip: 'Nitrogen Oxides in grams per cubic meter',
    min: 0,
    max: 500
  },
  'SOx': {
    label: 'SOₓ (g/m³)',
    tooltip: 'Sulfur Oxides in grams per cubic meter',
    min: 0,
    max: 500
  }
};

export const PredictionForm: React.FC<PredictionFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<FormData>({
    H2S: '',
    CO2: '',
    CO: '',
    NOx: '',
    SOx: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});

  const validateField = (name: keyof FormData, value: string): string => {
    if (!value) return 'Required';

    const numValue = parseFloat(value);
    const fieldConfig = formFields[name];

    if (isNaN(numValue)) return 'Must be a number';
    if (numValue < fieldConfig.min) return `Min value is ${fieldConfig.min}`;
    if (numValue > fieldConfig.max) return `Max value is ${fieldConfig.max}`;

    return '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    let hasErrors = false;

    (Object.keys(formData) as Array<keyof FormData>).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        hasErrors = true;
      }
    });

    setErrors(newErrors);

    if (!hasErrors) {
      onSubmit(formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (touched[name as keyof FormData]) {
      const error = validateField(name as keyof FormData, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));

    const error = validateField(name as keyof FormData, formData[name as keyof FormData]);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  return (
    <TooltipProvider>
      <Card className="w-full shadow-lg border dark:border-gray-800 bg-white dark:bg-gray-950 transition-all duration-300">
        <CardHeader className="bg-teal-600 dark:bg-teal-700 text-white p-6 rounded-t-lg">
          <CardTitle className="text-xl font-bold">Emission Prediction Model</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(Object.keys(formFields) as Array<keyof typeof formFields>).map((key) => {
                const field = formFields[key];
                const error = errors[key as keyof FormData];
                const isTouched = touched[key as keyof FormData];

                return (
                  <div key={key} className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <label
                        htmlFor={String(key)}
                        className="text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        {field.label}
                      </label>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="h-4 w-4 text-gray-400 dark:text-gray-500 cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent side="right" className="bg-gray-800 text-white dark:bg-gray-700 p-2 text-xs">
                          {field.tooltip}
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <div className="relative">
                      <Input
                        type="number"
                        id={String(key)}
                        name={String(key)}
                        placeholder={`Enter ${field.label}`}
                        value={formData[key as keyof FormData]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        min={field.min}
                        max={field.max}
                        className={`w-full transition-all ${error && isTouched
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-200 dark:border-red-700 dark:focus:ring-red-900'
                          : 'focus:ring-teal-500 focus:border-teal-500 dark:focus:border-teal-500 dark:focus:ring-teal-700'
                          } dark:bg-gray-900 dark:text-gray-100`}
                      />
                      {error && isTouched && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center mt-1 text-xs text-red-500 dark:text-red-400"
                        >
                          <AlertTriangle className="h-3 w-3 mr-1" />
                          {error}
                        </motion.div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <motion.div
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
              className="w-full mt-6"
            >
              <Button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 rounded-md shadow-md transition-colors
                           dark:bg-teal-600 dark:hover:bg-teal-700"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin mr-2"></div>
                    <span>Processing...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <span>Generate Prediction</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                )}
              </Button>
            </motion.div>
          </form>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
};