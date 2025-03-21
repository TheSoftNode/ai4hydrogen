'use client';

import React from 'react';
import { ArrowRight, Database, Gauge, Atom, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';

const HeroSection: React.FC = () => {
    return (
        <section className="relative min-h-screen pt-8 md:pt-0 w-full overflow-hidden">
            {/* Background Image with improved visibility */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero/hero.jpg"
                    alt="Gas plant"
                    fill
                    priority
                    className="object-cover"
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                        filter: 'brightness(0.65)',
                    }}
                />

                {/* Simplified overlay for better readability */}
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-gray-900/50 to-gray-900/70" />
            </div>

            {/* Hero Content - Simplified layout with improved spacing */}
            <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-12 md:px-8 lg:px-12">
                {/* Logo */}
                <div className="mb-10">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 shadow-lg">
                        <Atom className="h-12 w-12 text-white" />
                    </div>
                </div>

                {/* Title and subtitle - Improved spacing and readability */}
                <div className="mb-12 text-center">
                    <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
                        <span className="block mb-2">
                            <span className="text-teal-400">H</span>
                            <span className="text-cyan-400">yQ</span>
                        </span>
                        <span className="block text-3xl font-light md:text-4xl">
                            Revolutionizing Gas Quality Monitoring with AI
                        </span>
                    </h1>

                    <p className="mx-auto mb-10 max-w-3xl text-xl text-white">
                        Real-Time Monitoring | Predictive Analytics | Sustainable Energy
                    </p>

                    {/* Feature badges - Cleaner appearance */}
                    <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
                        <div className="flex items-center rounded-full bg-teal-900/80 px-5 py-2.5 text-sm text-teal-100">
                            <Gauge className="mr-2 h-4 w-4" />
                            Real-Time Analytics
                        </div>
                        <div className="flex items-center rounded-full bg-cyan-900/80 px-5 py-2.5 text-sm text-cyan-100">
                            <Database className="mr-2 h-4 w-4" />
                            AI-Powered Insights
                        </div>
                        <div className="flex items-center rounded-full bg-blue-900/80 px-5 py-2.5 text-sm text-blue-100">
                            <Zap className="mr-2 h-4 w-4" />
                            Energy Efficiency
                        </div>
                    </div>

                    {/* CTA Buttons - Improved layout and spacing */}
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link href="/auth/login">
                            <Button className="h-14 w-full min-w-[180px] rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 px-8 text-lg font-medium text-white sm:w-auto">
                                <span className="flex items-center">
                                    Get Started
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </span>
                            </Button>
                        </Link>
                        <Link href="#features">
                            <Button variant="outline" className="h-14 w-full min-w-[180px] rounded-xl border-2 border-gray-300/30 bg-gray-900/50 px-8 text-lg font-medium text-gray-100 hover:bg-gray-800/70 hover:text-white sm:w-auto">
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;