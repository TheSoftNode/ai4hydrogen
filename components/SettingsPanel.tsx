import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const SettingsPanel: React.FC = () => {
  return (
    <Card className="border-t-4 border-t-teal-500">
      <CardHeader>
        <CardTitle className="text-teal-700">Settings</CardTitle>
        <CardDescription>
          Configure application preferences and model parameters
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">Settings panel coming soon...</p>
      </CardContent>
    </Card>
  );
};