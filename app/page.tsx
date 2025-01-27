"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { ArrowRight, Atom } from 'lucide-react';
import SplashFooter from '@/components/SplashFooter';

const SplashScreen = () => {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleEnterDashboard = () => {
    router.push('/dashboard');
  };

  return (
    <>
    <div className="relative flex items-center justify-center overflow-hidden">
      {/* Sophisticated Background */}
      <div className="absolute inset-0 z-0">
        {/* Primary Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-cyan-50" />
        
        {/* Animated Circles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        </motion.div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(13,148,136,0.07)_1px,transparent_1px),linear-gradient(to_right,rgba(13,148,136,0.07)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-white/50 to-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-screen">
          {/* Logo Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-xl">
              <Atom className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-6xl mb-6">
              <span className="text-teal-700">AI4</span>
              <span className="text-cyan-600">HyQ</span>
            </h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full mx-auto flex flex-col items-center justify-center"
            >
              <p className="text-lg sm:text-xl text-gray-600 font-light mb-12 max-w-3xl">
              A fully automated AI-enabled platform for real-time gas quality analytics, providing accurate, efficient, and actionable insights for industrial and environmental applications
              </p>

              {/* Decorative Line */}
              <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-12 rounded-full" />
              
              <Button
                onClick={handleEnterDashboard}
                className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-12 py-6 text-xl flex items-center gap-3 group shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl transform hover:scale-105"
              >
                Enter Dashboard
                <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>

    <SplashFooter />
    </>
    
  );
};

export default SplashScreen;