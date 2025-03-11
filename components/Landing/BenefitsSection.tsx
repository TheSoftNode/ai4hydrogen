'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, Activity, ShieldCheck, Flame, BarChart4, LucideIcon, Puzzle } from 'lucide-react';

interface BenefitItemProps {
    icon: LucideIcon;
    title: string;
    description: string;
    delay: number;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ icon: Icon, title, description, delay }) => {
    const itemRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(itemRef, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={itemRef}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay }}
            className="flex gap-4"
        >
            <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg dark:from-cyan-600 dark:to-blue-700">
                    <Icon className="h-6 w-6" />
                </div>
            </div>
            <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{description}</p>
            </div>
        </motion.div>
    );
};

interface Benefit {
    icon: LucideIcon;
    title: string;
    description: string;
    delay: number;
}

const BenefitsSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const benefits: Benefit[] = [
        {
            icon: Activity,
            title: "Real-Time Gas Quality Screening",
            description: "Eliminate the need for manual sampling or outdated chromatographs with continuous, accurate monitoring.",
            delay: 0.1
        },
        {
            icon: BarChart4,
            title: "Predictive Analytics",
            description: "Leverage AI to anticipate fluctuations and proactively adjust gas blends for optimal performance.",
            delay: 0.2
        },
        {
            icon: Flame,
            title: "Enhanced Energy Efficiency",
            description: "Reduce gas flues and optimize fuel usage for maximum sustainability and cost savings.",
            delay: 0.3
        },
        {
            icon: Puzzle,
            title: "Seamless Integration",
            description: "Works effortlessly with existing energy infrastructures requiring minimal changes to current systems.",
            delay: 0.4
        },
        {
            icon: ShieldCheck,
            title: "Regulatory Compliance",
            description: "Help industries meet stringent environmental and energy standards with automated reporting.",
            delay: 0.5
        }
    ];

    return (
        <section id="benefits" className="relative bg-white py-24 dark:bg-gray-800">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                {/* Abstract Shapes */}
                <div className="absolute right-0 top-0 -z-10 h-[50%] w-[50%] translate-x-1/3 -translate-y-1/4 rounded-full bg-gradient-to-br from-cyan-100/40 to-teal-100/40 blur-3xl dark:from-cyan-900/20 dark:to-teal-900/20"></div>
                <div className="absolute bottom-0 left-0 -z-10 h-[40%] w-[40%] -translate-x-1/4 translate-y-1/4 rounded-full bg-gradient-to-tr from-blue-100/40 to-purple-100/40 blur-3xl dark:from-blue-900/20 dark:to-purple-900/20"></div>

                {/* Dotted Pattern */}
                <svg className="absolute left-0 top-0 -z-10 h-full w-full opacity-5 dark:opacity-10" width="100%" height="100%">
                    <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" className="fill-cyan-900" />
                    </pattern>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#dotPattern)" />
                </svg>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    {/* Left Column - Image/Visualization */}
                    <motion.div
                        ref={sectionRef}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.8 }}
                        className="relative mx-auto max-w-md lg:max-w-none"
                    >
                        <div className="relative rounded-2xl">
                            {/* Stylized Image Frame */}
                            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-1 shadow-xl dark:border-gray-700 dark:from-gray-800 dark:to-gray-700">
                                <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-xl">
                                    <div className="h-full w-full bg-gradient-to-r from-teal-500 to-cyan-500 p-2 dark:from-teal-600 dark:to-cyan-600">
                                        <div className="h-full w-full rounded-lg bg-white p-4 dark:bg-gray-800">
                                            {/* Stylized Dashboard Visualization */}
                                            <div className="grid h-full w-full grid-cols-3 gap-2 rounded-md">
                                                <div className="col-span-3 rounded-md bg-gray-100 p-2 dark:bg-gray-700">
                                                    <div className="h-4 w-24 rounded-full bg-teal-200 dark:bg-teal-800"></div>
                                                    <div className="mt-2 h-28 rounded-md bg-white dark:bg-gray-600">
                                                        <div className="h-full w-full rounded-md bg-gradient-to-r from-teal-500/20 to-cyan-500/20 p-2 dark:from-teal-500/40 dark:to-cyan-500/40">
                                                            <motion.div
                                                                animate={{
                                                                    height: ['60%', '80%', '40%', '70%', '60%'],
                                                                }}
                                                                transition={{
                                                                    repeat: Infinity,
                                                                    repeatType: 'loop',
                                                                    duration: 5,
                                                                }}
                                                                className="w-full rounded-md bg-gradient-to-r from-teal-500 to-cyan-500 dark:from-teal-400 dark:to-cyan-400"
                                                            ></motion.div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2 rounded-md bg-gray-100 p-2 dark:bg-gray-700">
                                                    <div className="h-4 w-20 rounded-full bg-cyan-200 dark:bg-cyan-800"></div>
                                                    <div className="mt-2 grid h-24 grid-cols-7 gap-1">
                                                        {[...Array(7)].map((_, i) => (
                                                            <motion.div
                                                                key={i}
                                                                animate={{
                                                                    height: [`${60 + (i * 5)}%`, `${80 - (i * 3)}%`, `${50 + (i * 4)}%`],
                                                                }}
                                                                transition={{
                                                                    repeat: Infinity,
                                                                    repeatType: 'loop',
                                                                    duration: 4,
                                                                    delay: i * 0.1
                                                                }}
                                                                className="w-full self-end rounded-sm bg-gradient-to-t from-cyan-600 to-blue-500 dark:from-cyan-500 dark:to-blue-400"
                                                            ></motion.div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="rounded-md bg-gray-100 p-2 dark:bg-gray-700">
                                                    <div className="h-4 w-12 rounded-full bg-blue-200 dark:bg-blue-800"></div>
                                                    <div className="mt-2 flex h-24 items-center justify-center">
                                                        <motion.div
                                                            animate={{
                                                                rotate: 360,
                                                            }}
                                                            transition={{
                                                                repeat: Infinity,
                                                                duration: 8,
                                                                ease: "linear"
                                                            }}
                                                            className="h-16 w-16 rounded-full border-4 border-t-blue-500 border-r-transparent border-b-blue-300 border-l-transparent"
                                                        ></motion.div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-cyan-200 shadow-lg dark:bg-cyan-800"></div>
                            <div className="absolute -right-6 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-teal-200 shadow-lg dark:bg-teal-800"></div>
                            <div className="absolute -top-6 left-1/3 h-16 w-16 rounded-full bg-blue-200 shadow-lg dark:bg-blue-800"></div>

                            {/* Animated Particle Effect */}
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                    opacity: [0.7, 1, 0.7]
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 3,
                                    ease: "easeInOut"
                                }}
                                className="absolute -right-3 -top-3 h-10 w-10 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 shadow-lg"
                            />
                            <motion.div
                                animate={{
                                    y: [0, 10, 0],
                                    opacity: [0.7, 1, 0.7]
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 4,
                                    ease: "easeInOut",
                                    delay: 1
                                }}
                                className="absolute -bottom-4 left-1/2 h-8 w-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 shadow-lg"
                            />
                        </div>
                    </motion.div>

                    {/* Right Column - Benefits List */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                                Key Benefits of <span className="text-teal-700 dark:text-teal-400">AI4</span><span className="text-cyan-600 dark:text-cyan-400">HyQ</span>
                            </h2>
                            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                                Our AI-powered platform delivers exceptional value through these transformative capabilities:
                            </p>
                            <div className="mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                        </motion.div>

                        <div className="mt-10 space-y-8">
                            {benefits.map((benefit, index) => (
                                <BenefitItem
                                    key={index}
                                    icon={benefit.icon}
                                    title={benefit.title}
                                    description={benefit.description}
                                    delay={benefit.delay}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;