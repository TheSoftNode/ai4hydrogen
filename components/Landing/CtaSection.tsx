'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check, Zap, Clock, BarChart4, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const CtaSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const benefits = [
        "Real-time gas quality screening",
        "Predictive analytics for gas fluctuations",
        "Enhanced energy efficiency with AI optimization",
        "Seamless integration with existing infrastructure",
        "Support for regulatory compliance standards"
    ];

    return (
        <section id="features" className="relative py-24">
            {/* Background with animated gradient */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-gray-900 dark:to-cyan-950"></div>

                {/* Animated Gradient Shape */}
                <motion.div
                    animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: 'mirror',
                        duration: 15,
                        ease: 'linear',
                    }}
                    className="absolute inset-0 opacity-30 dark:opacity-20"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(8, 145, 178, 0.5), transparent 50%)',
                        backgroundSize: '100% 100%',
                    }}
                />

                {/* Hexagon Pattern */}
                <svg className="absolute inset-0 h-full w-full opacity-5 dark:opacity-10" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                        <path
                            d="M25 0L50 14.4L50 28.8L25 43.4L0 28.8L0 14.4Z"
                            className="fill-teal-500 dark:fill-teal-400"
                            fillOpacity="0.3"
                        />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#hexagons)" />
                </svg>
            </div>

            <div ref={sectionRef} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
                    {/* Left Column - Product Features */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col justify-center"
                    >
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            Revolutionizing <span className="text-teal-700 dark:text-teal-400">Gas Quality Monitoring</span> with AI
                        </h2>
                        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                            Real-Time Monitoring | Predictive Analytics | Sustainable Energy
                        </p>

                        <div className="mt-8">
                            <div className="mb-6 rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
                                <div className="flex flex-col items-center gap-4 sm:flex-row">
                                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30">
                                        <Shield className="h-10 w-10 text-teal-700 dark:text-teal-400" />
                                    </div>
                                    <div className="text-center sm:text-left">
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">AI-Powered Platform</h3>
                                        <p className="text-gray-600 dark:text-gray-300">Accurate, efficient, and sustainable</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="rounded-xl bg-white p-4 shadow-lg dark:bg-gray-800">
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100 dark:bg-cyan-900/30">
                                            <Clock className="h-6 w-6 text-cyan-700 dark:text-cyan-400" />
                                        </div>
                                        <div className="text-center">
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Real-Time</h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-300">Continuous Monitoring</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-xl bg-white p-4 shadow-lg dark:bg-gray-800">
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                                            <BarChart4 className="h-6 w-6 text-blue-700 dark:text-blue-400" />
                                        </div>
                                        <div className="text-center">
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Predictive</h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-300">Advanced Analytics</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                                Key Benefits of HyQ:
                            </h4>

                            <ul className="mb-8 space-y-3">
                                {benefits.map((benefit, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                        transition={{ duration: 0.3, delay: 0.1 + (index * 0.1) }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30">
                                            <Check className="h-4 w-4 text-teal-700 dark:text-teal-400" />
                                        </div>
                                        <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Right Column - CTA Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col justify-center"
                    >
                        <div className="relative overflow-hidden rounded-2xl border-t-8 border-teal-500 bg-white shadow-2xl dark:border-teal-400 dark:bg-gray-800">
                            {/* Decorative Elements */}
                            <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-teal-100 opacity-50 dark:bg-teal-900/30"></div>
                            <div className="absolute -bottom-12 -left-12 h-24 w-24 rounded-full bg-cyan-100 opacity-50 dark:bg-cyan-900/30"></div>

                            <div className="relative p-8">
                                <div className="mb-6 flex items-center justify-center">
                                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 shadow-lg dark:from-teal-400 dark:to-cyan-400">
                                        <Zap className="h-10 w-10 text-white" />
                                    </div>
                                </div>

                                <h3 className="mb-3 text-center text-2xl font-bold text-gray-900 dark:text-white">
                                    Empowering the Future of Energy
                                </h3>

                                <p className="mb-8 text-center text-gray-600 dark:text-gray-300">
                                    Ready to optimize your gas network with AI-driven precision and sustainability? Join us today!
                                </p>

                                <div className="mb-8 space-y-4">
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                        transition={{ duration: 0.4, delay: 0.3 }}
                                        className="rounded-lg bg-gray-50 p-4 dark:bg-gray-700/50"
                                    >
                                        <h4 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
                                            For Energy Providers
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            Enhance efficiency, reduce costs, and meet regulatory requirements with real-time monitoring.
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                        transition={{ duration: 0.4, delay: 0.4 }}
                                        className="rounded-lg bg-gray-50 p-4 dark:bg-gray-700/50"
                                    >
                                        <h4 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
                                            For Industrial Users
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            Optimize gas usage, improve process efficiency, and reduce environmental impact.
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                        transition={{ duration: 0.4, delay: 0.5 }}
                                        className="rounded-lg bg-gray-50 p-4 dark:bg-gray-700/50"
                                    >
                                        <h4 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
                                            For Regulators
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            Ensure compliance, monitor emissions, and support the transition to sustainable energy.
                                        </p>
                                    </motion.div>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <Link href="/auth/login">
                                        <Button className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 py-6 text-lg font-medium text-white transition-all duration-300 hover:from-teal-700 hover:to-cyan-700 dark:from-teal-500 dark:to-cyan-500 dark:hover:from-teal-600 dark:hover:to-cyan-600">
                                            Get Started
                                            <ArrowRight className="transition-transform group-hover:translate-x-1" />
                                        </Button>
                                    </Link>

                                    <Link href="#contact">
                                        <Button variant="outline" className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-gray-300 py-6 text-lg font-medium text-gray-800 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800">
                                            Contact Sales
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;