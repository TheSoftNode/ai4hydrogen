import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormData } from '@/types';

interface PredictionFormProps {
  onSubmit: (data: FormData) => void;
  isLoading: boolean;
}

const formFields = {
  'H2S': 'H₂S (ppm)',
  'CO2': 'CO₂ (g/m³)',
  'CO': 'CO (g/m³)',
  'NOx': 'NOₓ (g/m³)',
  'SOx': 'SOₓ (g/m³)'
} as const;

export const PredictionForm: React.FC<PredictionFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<FormData>({
    H2S: '',
    CO2: '',
    CO: '',
    NOx: '',
    SOx: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(formFields).map(([key, label]) => (
          <div key={key} className="space-y-2">
            <label htmlFor={key} className="text-sm font-medium text-gray-700">{label}</label>
            <Input
              type="number"
              id={key}
              name={key}
              placeholder={`Enter ${label}`}
              value={formData[key as keyof FormData]}
              onChange={handleChange}
              required
              className="w-full focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
        ))}
      </div>
      <Button 
        type="submit" 
        className="w-full bg-teal-600 hover:bg-teal-700 text-white transition-colors"
        disabled={isLoading}
      >
        {isLoading ? 'Predicting...' : 'Make Prediction'}
      </Button>
    </form>
  );
};