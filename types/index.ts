export interface FormData {
  [key: string]: string; 
  H2S: string;
  CO2: string;
  CO: string;
  NOx: string;
  SOx: string;
}
  
  export interface PredictionResult {
    'H₂ Blend (%)': number;
    'CH₄ Content (%)': number;
    'Calorific Value (MJ/m³)': number;
  }
  
  export interface ChartData {
    name: string;
    h2: number;
    ch4: number;
    cv: number;
  }
  
  export interface MetricCardProps {
    value: string;
    label: string;
    color: 'teal' | 'cyan';
  }
  
  export interface ModelMetrics {
    r2Score: string;
    mae: string;
    rmse: string;
  }