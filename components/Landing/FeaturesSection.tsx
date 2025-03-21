'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GaugeCircle, Clock, TrendingUp, BarChartHorizontal, BarChart3, LineChart } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
    delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, delay }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay }}
            className="h-full"
        >
            <Card className="group h-full border-t-4 border-t-teal-500 transition-all duration-300 hover:shadow-lg dark:border-t-teal-400 dark:bg-gray-800/50 dark:hover:bg-gray-800">
                <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 text-teal-800 transition-all duration-300 group-hover:scale-110 dark:bg-teal-900/40 dark:text-teal-300">
                        <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{description}</p>
                </CardContent>
            </Card>
        </motion.div>
    );
};

interface Feature {
    icon: React.ElementType;
    title: string;
    description: string;
    delay: number;
}

const FeaturesSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const features: Feature[] = [
        {
            icon: GaugeCircle,
            title: "Calorific Value Monitoring",
            description: "Real-time measurement of gas energy content ensuring optimal efficiency and billing accuracy.",
            delay: 0.1
        },
        {
            icon: BarChartHorizontal,
            title: "Hydrogen Blend Analysis",
            description: "Precise monitoring of hydrogen, methane, ethane, propane, nitrogen, and water content in gas streams.",
            delay: 0.2
        },
        {
            icon: LineChart,
            title: "Impurity Detection",
            description: "Advanced sensors that identify and quantify gas impurities and emission levels with unparalleled accuracy.",
            delay: 0.3
        },
        {
            icon: Clock,
            title: "Real-Time Insights",
            description: "Continuous monitoring replacing traditional gas chromatographs and manual sampling methods.",
            delay: 0.4
        },
        {
            icon: TrendingUp,
            title: "Predictive Analytics",
            description: "AI-powered forecasting to anticipate fluctuations and proactively adjust gas blends for optimal performance.",
            delay: 0.5
        },
        {
            icon: BarChart3,
            title: "Automated Reporting",
            description: "Generate comprehensive reports and analytics dashboards for regulatory compliance and operational excellence.",
            delay: 0.6
        }
    ];

    return (
        <section id="features" className="relative py-24">
            {/* Sophisticated Background */}
            <div className="absolute inset-0 z-0 bg-gray-50 dark:bg-gray-900">
                {/* Radial Gradient */}
                <div className="absolute inset-0 bg-gradient-radial from-white to-gray-50 dark:from-gray-900 dark:to-gray-950"></div>

                {/* Animated Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(8,145,178,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(8,145,178,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem] dark:bg-[linear-gradient(rgba(8,145,178,0.07)_1px,transparent_1px),linear-gradient(to_right,rgba(8,145,178,0.07)_1px,transparent_1px)]"></div>

                {/* Subtle Pattern Overlay */}
                <div className="absolute inset-0 opacity-5 dark:opacity-10" style={{ backgroundImage: 'url("/images/noise.png")', backgroundRepeat: 'repeat' }}></div>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div ref={sectionRef} className="text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                            What Makes <span className="text-teal-700 dark:text-teal-400">H</span><span className="text-cyan-600 dark:text-cyan-400">yQ</span> Different?
                        </h2>
                        <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-gray-300">
                            Unlike traditional monitoring systems, our AI-powered platform delivers real-time insights and predictive analytics for gas composition and quality.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-4"
                    >
                        <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 dark:from-teal-400 dark:to-cyan-400"></div>
                    </motion.div>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            delay={feature.delay}
                        />
                    ))}
                </div>
            </div>

            {/* Bottom Wave Divider */}
            <div className="absolute bottom-0 left-0 right-0 z-10 h-16 overflow-hidden">
                <svg className="absolute bottom-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        className="fill-white dark:fill-gray-800"
                        d="M0,128L60,149.3C120,171,240,213,360,213.3C480,213,600,171,720,170.7C840,171,960,213,1080,224C1200,235,1320,213,1380,202.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                    ></path>
                </svg>
            </div>
        </section>
    );
};

export default FeaturesSection;