"use client"

import BenefitsSection from '@/components/Landing/BenefitsSection';
import CtaSection from '@/components/Landing/CtaSection';
import FeaturesSection from '@/components/Landing/FeaturesSection';
import HeroSection from '@/components/Landing/HeroSection';
import SustainabilitySection from '@/components/Landing/SustainabilitySection';
import TechnologySection from '@/components/Landing/TechnologySection';
import React, { useEffect, useState } from 'react';


const SplashScreen = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);



  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <SustainabilitySection />
      <TechnologySection />
      <CtaSection />
    </>

  );
}

export default SplashScreen;