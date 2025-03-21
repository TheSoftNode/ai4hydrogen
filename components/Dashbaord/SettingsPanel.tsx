import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Info, Settings, Database, BarChart, Save, RefreshCw } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

export const SettingsPanel: React.FC = () => {
  // State for various settings
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [apiEndpoint, setApiEndpoint] = useState('https://ai4hyq.onrender.com');
  const [precision, setPrecision] = useState<number[]>([2]);
  const [modelVersion, setModelVersion] = useState('v1.2.0');
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [dataRetention, setDataRetention] = useState('7');
  const [chartType, setChartType] = useState('area');

  // Function to simulate saving settings
  const handleSaveSettings = () => {
    // In a real app, this would save to localStorage, API, etc.
    console.log('Settings saved');
    // Show feedback (this would be replaced with a toast notification in a real app)
    alert('Settings saved successfully!');
  };

  // Function to simulate reset to defaults
  const handleResetDefaults = () => {
    setDarkMode(false);
    setNotifications(true);
    setApiEndpoint('https://ai4hyq.onrender.com');
    setPrecision([2]);
    setModelVersion('v1.2.0');
    setAutoRefresh(false);
    setDataRetention('7');
    setChartType('area');
  };

  return (
    <Card className="border-t-4 border-t-teal-500 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:border-t-teal-500">
      <CardHeader className="bg-gradient-to-r from-teal-50 to-transparent dark:from-teal-900/20 dark:to-transparent">
        <CardTitle className="text-teal-700 dark:text-teal-400 flex items-center gap-2">
          <Settings className="h-5 w-5" />
          Settings
        </CardTitle>
        <CardDescription className="dark:text-gray-400">
          Configure application preferences and model parameters
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="general" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              <span>General</span>
            </TabsTrigger>
            <TabsTrigger value="model" className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              <span>Model</span>
            </TabsTrigger>
            <TabsTrigger value="display" className="flex items-center gap-2">
              <BarChart className="h-4 w-4" />
              <span>Display</span>
            </TabsTrigger>
          </TabsList>

          <TooltipProvider>
            <TabsContent value="general" className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Dark Mode</Label>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Enable dark theme for the application</p>
                  </div>
                  <Switch
                    checked={darkMode}
                    onCheckedChange={setDarkMode}
                    className="data-[state=checked]:bg-teal-600"
                  />
                </div>

                <Separator className="my-4" />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Notifications</Label>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Receive alerts for prediction results</p>
                  </div>
                  <Switch
                    checked={notifications}
                    onCheckedChange={setNotifications}
                    className="data-[state=checked]:bg-teal-600"
                  />
                </div>

                <Separator className="my-4" />

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="apiEndpoint" className="text-base">API Endpoint</Label>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="h-4 w-4 text-gray-400 cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="w-80 text-xs">The server endpoint used for prediction model API calls</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <div className="flex gap-2">
                    <Input
                      id="apiEndpoint"
                      value={apiEndpoint}
                      onChange={(e) => setApiEndpoint(e.target.value)}
                      className="flex-1 dark:bg-gray-700"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setApiEndpoint('https://ai4hyq.onrender.com')}
                      className="h-10 w-10"
                    >
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Enter the base URL for the prediction API</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="model" className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="modelVersion" className="text-base">Model Version</Label>
                    <Select value={modelVersion} onValueChange={setModelVersion}>
                      <SelectTrigger className="w-[180px] dark:bg-gray-700">
                        <SelectValue placeholder="Select version" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="v1.0.0">v1.0.0 (Legacy)</SelectItem>
                        <SelectItem value="v1.1.0">v1.1.0</SelectItem>
                        <SelectItem value="v1.2.0">v1.2.0 (Current)</SelectItem>
                        <SelectItem value="v1.3.0-beta">v1.3.0 (Beta)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Select which model version to use for predictions</p>
                </div>

                <Separator className="my-4" />

                <div className="space-y-2">
                  <Label htmlFor="precision" className="text-base">Result Precision</Label>
                  <div className="pt-4 pb-2">
                    <Slider
                      id="precision"
                      min={0}
                      max={6}
                      step={1}
                      value={precision}
                      onValueChange={setPrecision}
                      className="w-full"
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>0</span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Number of decimal places to show in results ({precision} decimal places)</p>
                </div>

                <Separator className="my-4" />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Auto-Refresh</Label>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Automatically refresh predictions</p>
                  </div>
                  <Switch
                    checked={autoRefresh}
                    onCheckedChange={setAutoRefresh}
                    className="data-[state=checked]:bg-teal-600"
                  />
                </div>

                <Separator className="my-4" />

                <div className="space-y-2">
                  <Label htmlFor="dataRetention" className="text-base">Data Retention</Label>
                  <Select value={dataRetention} onValueChange={setDataRetention}>
                    <SelectTrigger id="dataRetention" className="w-full dark:bg-gray-700">
                      <SelectValue placeholder="Select retention period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 day</SelectItem>
                      <SelectItem value="7">7 days</SelectItem>
                      <SelectItem value="30">30 days</SelectItem>
                      <SelectItem value="90">90 days</SelectItem>
                      <SelectItem value="365">1 year</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-gray-500 dark:text-gray-400">How long to store prediction history</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="display" className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="chartType" className="text-base">Chart Type</Label>
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div
                      className={`border rounded-lg p-4 cursor-pointer flex flex-col items-center gap-2 ${chartType === 'area'
                        ? 'border-teal-500 bg-teal-50 dark:bg-teal-900/20'
                        : 'border-gray-200 dark:border-gray-700'
                        }`}
                      onClick={() => setChartType('area')}
                    >
                      <div className="h-32 w-full bg-gradient-to-b from-teal-100 to-teal-500/40 dark:from-teal-900/30 dark:to-teal-600/60 rounded-md"></div>
                      <span className="text-sm font-medium">Area Chart</span>
                    </div>
                    <div
                      className={`border rounded-lg p-4 cursor-pointer flex flex-col items-center gap-2 ${chartType === 'bar'
                        ? 'border-teal-500 bg-teal-50 dark:bg-teal-900/20'
                        : 'border-gray-200 dark:border-gray-700'
                        }`}
                      onClick={() => setChartType('bar')}
                    >
                      <div className="h-32 w-full flex items-end justify-around p-2">
                        <div className="h-3/5 w-1/6 bg-teal-500 dark:bg-teal-600 rounded-t-md"></div>
                        <div className="h-4/5 w-1/6 bg-teal-500 dark:bg-teal-600 rounded-t-md"></div>
                        <div className="h-2/5 w-1/6 bg-teal-500 dark:bg-teal-600 rounded-t-md"></div>
                        <div className="h-3/4 w-1/6 bg-teal-500 dark:bg-teal-600 rounded-t-md"></div>
                        <div className="h-1/2 w-1/6 bg-teal-500 dark:bg-teal-600 rounded-t-md"></div>
                      </div>
                      <span className="text-sm font-medium">Bar Chart</span>
                    </div>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Show Grid Lines</Label>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Display grid lines on charts</p>
                  </div>
                  <Switch
                    checked={true}
                    className="data-[state=checked]:bg-teal-600"
                  />
                </div>

                <Separator className="my-4" />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Show Legends</Label>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Display chart legends</p>
                  </div>
                  <Switch
                    checked={true}
                    className="data-[state=checked]:bg-teal-600"
                  />
                </div>

                <Separator className="my-4" />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Animation</Label>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Enable chart animations</p>
                  </div>
                  <Switch
                    checked={true}
                    className="data-[state=checked]:bg-teal-600"
                  />
                </div>
              </div>
            </TabsContent>
          </TooltipProvider>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-700">
        <Button
          variant="outline"
          onClick={handleResetDefaults}
          className="dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200"
        >
          Reset to Defaults
        </Button>
        <Button
          onClick={handleSaveSettings}
          className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-700 dark:hover:bg-teal-600"
        >
          <Save className="h-4 w-4 mr-2" />
          Save Settings
        </Button>
      </CardFooter>
    </Card>
  );
};