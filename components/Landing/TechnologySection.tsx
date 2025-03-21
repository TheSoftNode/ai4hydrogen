'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Server, Cpu, Lightbulb, AlertTriangle, Database } from 'lucide-react';

interface Technology {
    icon: JSX.Element;
    title: string;
    description: string;
    delay: number;
}

interface FloatingIcon {
    icon: JSX.Element;
    color: string;
    delay: number;
}

// Define CSS custom properties interface
interface CustomCSSProperties extends React.CSSProperties {
    '--tw-gradient-from'?: string;
    '--tw-gradient-to'?: string;
    '--tw-gradient-stops'?: string;
}

const TechnologySection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const technologies: Technology[] = [
        {
            icon: <Database className="h-8 w-8 text-teal-500 dark:text-teal-400" />,
            title: "Data-Driven Optimization",
            description: "AI-based decision-making algorithms that continuously learn and improve efficiency with each data point.",
            delay: 0.1
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-amber-500 dark:text-amber-400" />,
            title: "Fault & Anomaly Detection",
            description: "Instant alerts on gas quality inconsistencies to prevent issues before they affect performance.",
            delay: 0.2
        },
        {
            icon: <Lightbulb className="h-8 w-8 text-yellow-500 dark:text-yellow-400" />,
            title: "Operational Insights",
            description: "Intelligent reporting and dashboards for enhanced management and regulatory compliance.",
            delay: 0.3
        }
    ];

    const floatingIcons: FloatingIcon[] = [
        { icon: <Code className="h-6 w-6" />, color: "bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-300", delay: 0.2 },
        { icon: <Server className="h-6 w-6" />, color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-300", delay: 0.4 },
        { icon: <Cpu className="h-6 w-6" />, color: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300", delay: 0.6 }
    ];

    // Create the style object with proper TypeScript typing
    const verticalLinesStyle: CustomCSSProperties = {
        backgroundImage: 'repeating-linear-gradient(90deg, var(--tw-gradient-stops))',
        backgroundSize: '60px 100%',
        '--tw-gradient-from': '#0891b2',
        '--tw-gradient-to': 'transparent',
        '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to)'
    };

    return (
        <section id="technology" className="relative py-24">
            {/* Sophisticated Background */}
            <div className="absolute inset-0 z-0 bg-gray-50 dark:bg-gray-900">
                {/* Vertical Lines Pattern */}
                <div
                    className="absolute inset-0 opacity-10 dark:opacity-20"
                    style={verticalLinesStyle}
                ></div>

                {/* Circuit Board Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%">
                        <pattern id="circuitPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path
                                d="M20 10H80M50 10V30M80 30H20M20 30V50H30M70 30V50H80M30 50H70M50 50V70M30 70H70M50 70V90M20 90H80"
                                className="stroke-teal-600 dark:stroke-teal-400"
                                fill="none"
                                strokeWidth="2"
                            />
                        </pattern>
                        <rect x="0" y="0" width="100%" height="100%" fill="url(#circuitPattern)" />
                    </svg>
                </div>
            </div>

            <div ref={sectionRef} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                        Innovative Technology for a <span className="text-teal-700 dark:text-teal-400">Smarter Future</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-gray-300">
                        Designed with energy providers, industrial users, and regulators in mind, HyQ provides a seamless, scalable, and future-ready solution.
                    </p>
                    <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500"></div>
                </motion.div>

                <div className="mt-16">
                    <div className="relative mx-auto flex max-w-5xl flex-col items-center justify-center">
                        {/* Floating Icons */}
                        {floatingIcons.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: item.delay }}
                                className={`absolute z-20 flex h-12 w-12 items-center justify-center rounded-full shadow-lg ${item.color}`}
                                style={{
                                    top: `${20 + (index * 20)}%`,
                                    left: index % 2 === 0 ? '5%' : '90%',
                                }}
                            >
                                {item.icon}
                            </motion.div>
                        ))}

                        {/* Central Technology Visualization */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.8 }}
                            className="relative flex w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-gray-800"
                        >
                            {/* Top Connector Line */}
                            <div className="absolute left-1/2 top-0 h-8 w-2 -translate-x-1/2 bg-teal-500 dark:bg-teal-400"></div>

                            <div className="w-full p-8">
                                {/* AI Visualization */}
                                <div className="mx-auto mb-8 flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-teal-100 to-cyan-50 shadow-inner dark:from-teal-900/20 dark:to-cyan-900/20">
                                    <div className="relative h-36 w-36 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 p-0.5 dark:from-teal-400 dark:to-cyan-400">
                                        <div className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-gray-800">
                                            <div className="relative h-28 w-28">
                                                {/* Animated Brain Network Visualization */}
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="h-4 w-4 rounded-full bg-teal-500 dark:bg-teal-400"></div>
                                                </div>
                                                {/* Connection Lines */}
                                                {[...Array(8)].map((_, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0 }}
                                                        animate={isInView ? { opacity: [0.4, 0.8, 0.4] } : { opacity: 0 }}
                                                        transition={{
                                                            duration: 2,
                                                            delay: i * 0.2,
                                                            repeat: Infinity,
                                                            repeatType: 'loop'
                                                        }}
                                                        className="absolute left-1/2 top-1/2 h-1 w-24 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-teal-500 to-cyan-500/0 dark:from-teal-400 dark:to-cyan-400/0"
                                                        style={{
                                                            transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                                                            transformOrigin: 'left center'
                                                        }}
                                                    >
                                                        <motion.div
                                                            animate={isInView ?
                                                                {
                                                                    x: [0, 100, 0],
                                                                } : {}
                                                            }
                                                            transition={{
                                                                duration: 3,
                                                                delay: i * 0.2,
                                                                repeat: Infinity,
                                                                repeatType: 'loop'
                                                            }}
                                                            className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-cyan-500 dark:bg-cyan-400"
                                                        />
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="mb-3 text-center text-2xl font-bold text-gray-900 dark:text-white">
                                    HyQ Core Technology
                                </h3>
                                <p className="mb-8 text-center text-lg text-gray-600 dark:text-gray-300">
                                    Our proprietary AI algorithms transform gas quality monitoring with unparalleled precision and intelligence.
                                </p>

                                {/* Connector Line */}
                                <div className="relative mx-auto mb-8 h-24 w-0.5 bg-gradient-to-b from-teal-500 to-cyan-500">
                                    <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-md ring-2 ring-teal-500 dark:bg-gray-800 dark:ring-teal-400"></div>
                                </div>

                                {/* Technology Feature Blocks */}
                                <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                                    {technologies.map((tech, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                            transition={{ duration: 0.6, delay: tech.delay }}
                                            className="rounded-xl bg-gray-50 p-6 shadow-md transition-transform hover:translate-y-[-5px] dark:bg-gray-700/50"
                                        >
                                            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-white shadow-md dark:bg-gray-800/80">
                                                {tech.icon}
                                            </div>
                                            <h4 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{tech.title}</h4>
                                            <p className="text-gray-600 dark:text-gray-300">{tech.description}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Bottom Connector Line */}
                        <div className="h-16 w-0.5 bg-gradient-to-b from-teal-500 to-transparent dark:from-teal-400"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnologySection;