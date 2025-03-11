'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Wind, Leaf, Droplets, LineChart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const SustainabilitySection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const energyTransitionPoints = [
        {
            icon: <Wind className="h-6 w-6 text-teal-500 dark:text-teal-400" />,
            title: "Hydrogen Integration",
            description: "Support for hydrogen blending in existing gas networks to reduce carbon emissions.",
        },
        {
            icon: <Leaf className="h-6 w-6 text-green-500 dark:text-green-400" />,
            title: "Biomethane Support",
            description: "Enhanced monitoring for biomethane integration to promote circular economy solutions.",
        },
        {
            icon: <Droplets className="h-6 w-6 text-blue-500 dark:text-blue-400" />,
            title: "Synthetic Gas Analysis",
            description: "Advanced analytics for synthetic gas monitoring to enable novel energy carriers.",
        },
    ];

    const chartVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="sustainability" className="relative py-24">
            {/* Background with Animated Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Main Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-white to-cyan-50 dark:from-gray-800 dark:to-cyan-950"></div>

                {/* Animated Wave Background */}
                <svg className="absolute bottom-0 w-full opacity-30 dark:opacity-20" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                        fill="#0891b2"
                        fillOpacity="0.2"
                        d="M0,192L48,170.7C96,149,192,107,288,122.7C384,139,480,213,576,213.3C672,213,768,139,864,117.3C960,96,1056,128,1152,149.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></motion.path>
                    <motion.path
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: 0.3 }}
                        fill="#0e7490"
                        fillOpacity="0.2"
                        d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,144C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></motion.path>
                </svg>
            </div>

            <div ref={sectionRef} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                        Accelerating the Transition to <span className="text-teal-700 dark:text-teal-400">Sustainable Energy</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-gray-300">
                        AI4HyQ is more than just a monitoring tool; it's a catalyst for decarbonization and energy transition.
                    </p>
                    <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500"></div>
                </motion.div>

                <div className="mt-16 grid gap-12 lg:grid-cols-2">
                    {/* Left Column - Energy Transition Points */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-800/80"
                    >
                        <div className="absolute -right-6 -top-6 h-12 w-12 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400"></div>
                        <div className="absolute -bottom-6 -left-6 h-12 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"></div>

                        <h3 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                            Supporting Global Energy Goals
                        </h3>

                        <div className="space-y-8">
                            {energyTransitionPoints.map((point, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 rounded-lg bg-gray-100 p-3 shadow-md dark:bg-gray-700/50">
                                        {point.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-gray-900 dark:text-white">{point.title}</h4>
                                        <p className="mt-2 text-gray-600 dark:text-gray-300">{point.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8">
                            <p className="text-gray-600 dark:text-gray-300">
                                Aligns with major initiatives including:
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="rounded-full bg-teal-100 px-4 py-2 text-sm font-medium text-teal-800 dark:bg-teal-900/30 dark:text-teal-200">
                                    Ireland's Climate Action Plan
                                </span>
                                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-200">
                                    EU Hydrogen Roadmap
                                </span>
                                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800 dark:bg-green-900/30 dark:text-green-200">
                                    Net Zero Initiatives
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Visualization */}
                    <div className="flex flex-col justify-center">
                        <div className="relative h-[340px] rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-800/80">
                            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                                Projected Impact on Emissions Reduction
                            </h3>

                            {/* Animated Charts */}
                            <div className="relative h-64">
                                {/* Graph 1 - Line Chart */}
                                <motion.div
                                    variants={chartVariants}
                                    initial="hidden"
                                    animate={isInView ? "visible" : "hidden"}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className="absolute inset-0"
                                >
                                    <div className="h-full w-full rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <LineChart className="h-4 w-4 text-teal-500" />
                                                <span className="text-xs font-medium text-gray-600 dark:text-gray-300">CO2 Reduction</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="h-3 w-3 rounded-full bg-teal-500"></div>
                                                <span className="text-xs text-gray-500 dark:text-gray-400">With AI4HyQ</span>
                                                <div className="h-3 w-3 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                                                <span className="text-xs text-gray-500 dark:text-gray-400">Traditional</span>
                                            </div>
                                        </div>

                                        <div className="mt-2 h-[calc(100%-30px)]">
                                            <div className="flex h-full w-full items-end justify-between gap-1 border-b border-l border-gray-200 dark:border-gray-700">
                                                {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
                                                    <div key={i} className="flex h-full flex-1 flex-col justify-end">
                                                        <motion.div
                                                            initial={{ height: 0 }}
                                                            animate={{ height: `${20 + (i * 8)}%` }}
                                                            transition={{ duration: 1, delay: 0.6 + (i * 0.1) }}
                                                            className="w-full rounded-t-sm bg-teal-500 dark:bg-teal-400"
                                                        ></motion.div>
                                                        <motion.div
                                                            initial={{ height: 0 }}
                                                            animate={{ height: `${10 + (i * 5)}%` }}
                                                            transition={{ duration: 1, delay: 0.6 + (i * 0.1) }}
                                                            className="absolute w-3 rounded-t-sm bg-gray-300 dark:bg-gray-600"
                                                            style={{ left: `calc(${(i + 0.5) * (100 / 8)}% - 1.5px)` }}
                                                        ></motion.div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="mt-2 flex justify-between text-xs text-gray-500 dark:text-gray-400">
                                                <span>Year 1</span>
                                                <span>Year 4</span>
                                                <span>Year 8</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Call to Action */}
                            <div className="absolute -bottom-6 left-0 right-0 mx-auto flex w-4/5 justify-center">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.6, delay: 0.8 }}
                                >
                                    <Link href="/auth/login">
                                        <Button className="group flex w-full items-center gap-2 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 px-8 py-6 text-white hover:from-teal-700 hover:to-cyan-700 dark:from-teal-500 dark:to-cyan-500 dark:hover:from-teal-600 dark:hover:to-cyan-600">
                                            Start Your Sustainability Journey
                                            <motion.div
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{ repeat: Infinity, duration: 1.5 }}
                                            >
                                                →
                                            </motion.div>
                                        </Button>
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SustainabilitySection;