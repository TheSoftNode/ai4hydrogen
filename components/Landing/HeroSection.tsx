// 'use client';

// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight, Database, Gauge, Atom, Zap } from 'lucide-react';
// import { Button } from "@/components/ui/button";
// import Link from 'next/link';

// const HeroSection = () => {
//     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//     useEffect(() => {
//         const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
//             setMousePosition({
//                 x: e.clientX / window.innerWidth,
//                 y: e.clientY / window.innerHeight,
//             });
//         };

//         window.addEventListener('mousemove', handleMouseMove);

//         return () => {
//             window.removeEventListener('mousemove', handleMouseMove);
//         };
//     }, []);

//     return (
//         <section className="relative min-h-screen w-full overflow-hidden">
//             {/* Animated Background */}
//             <div className="absolute inset-0 z-0">
//                 {/* Gas Plant Background with Parallax Effect */}
//                 <div
//                     className="absolute inset-0 z-0 bg-[url('/images/gas-plant.jpg')] bg-cover bg-center opacity-20 dark:opacity-10"
//                     style={{
//                         transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
//                     }}
//                 />

//                 {/* Dark Gradient Overlay for better text readability */}
//                 <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white dark:from-gray-900/60 dark:to-gray-900" />

//                 {/* Animated Particles/Grid */}
//                 <div className="absolute inset-0">
//                     <div className="h-full w-full bg-[linear-gradient(rgba(13,148,136,0.07)_1px,transparent_1px),linear-gradient(to_right,rgba(13,148,136,0.07)_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(rgba(56,189,248,0.07)_1px,transparent_1px),linear-gradient(to_right,rgba(56,189,248,0.07)_1px,transparent_1px)]" />
//                 </div>

//                 {/* Animated Gradient Orbs */}
//                 <div className="absolute inset-0 overflow-hidden">
//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 0.6 }}
//                         transition={{ duration: 2 }}
//                         className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-teal-200/30 mix-blend-multiply filter blur-3xl dark:bg-teal-900/30 dark:mix-blend-overlay"
//                         style={{
//                             animation: 'blob 7s infinite',
//                             transformOrigin: 'center',
//                         }}
//                     />
//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 0.6 }}
//                         transition={{ duration: 2, delay: 0.3 }}
//                         className="absolute top-1/3 right-1/4 h-96 w-96 rounded-full bg-cyan-200/30 mix-blend-multiply filter blur-3xl dark:bg-cyan-900/30 dark:mix-blend-overlay"
//                         style={{
//                             animation: 'blob 8s infinite',
//                             animationDelay: '2s',
//                             transformOrigin: '60% 40%',
//                         }}
//                     />
//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 0.6 }}
//                         transition={{ duration: 2, delay: 0.6 }}
//                         className="absolute bottom-1/4 left-1/3 h-96 w-96 rounded-full bg-blue-200/30 mix-blend-multiply filter blur-3xl dark:bg-blue-900/30 dark:mix-blend-overlay"
//                         style={{
//                             animation: 'blob 9s infinite',
//                             animationDelay: '4s',
//                             transformOrigin: '30% 70%',
//                         }}
//                     />
//                 </div>
//             </div>

//             {/* Hero Content */}
//             <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.8 }}
//                     className="mb-8 flex items-center justify-center"
//                 >
//                     <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 shadow-xl dark:from-teal-400 dark:to-sky-400">
//                         <Atom className="h-14 w-14 text-white" />
//                     </div>
//                 </motion.div>

//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, delay: 0.2 }}
//                     className="text-center"
//                 >
//                     <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 dark:text-white md:text-6xl lg:text-7xl">
//                         <span className="block">
//                             <span className="text-teal-700 dark:text-teal-400">AI4</span>
//                             <span className="text-cyan-600 dark:text-cyan-400">HyQ</span>
//                         </span>
//                         <span className="mt-2 block text-3xl font-light md:text-4xl">
//                             Revolutionizing Gas Quality Monitoring with AI
//                         </span>
//                     </h1>

//                     <motion.p
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: 0.4 }}
//                         className="mx-auto mb-10 max-w-3xl text-xl text-gray-600 dark:text-gray-300"
//                     >
//                         Real-Time Monitoring | Predictive Analytics | Sustainable Energy
//                     </motion.p>

//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: 0.6 }}
//                         className="mb-12 flex flex-wrap items-center justify-center gap-3"
//                     >
//                         <div className="flex items-center rounded-full bg-teal-50 px-4 py-2 text-sm text-teal-800 dark:bg-teal-900/30 dark:text-teal-200">
//                             <Gauge className="mr-2 h-4 w-4" />
//                             Real-Time Analytics
//                         </div>
//                         <div className="flex items-center rounded-full bg-cyan-50 px-4 py-2 text-sm text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-200">
//                             <Database className="mr-2 h-4 w-4" />
//                             AI-Powered Insights
//                         </div>
//                         <div className="flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm text-blue-800 dark:bg-blue-900/30 dark:text-blue-200">
//                             <Zap className="mr-2 h-4 w-4" />
//                             Energy Efficiency
//                         </div>
//                     </motion.div>

//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: 0.8 }}
//                         className="flex flex-col items-center justify-center gap-6 sm:flex-row"
//                     >
//                         <Link href="/auth/login">
//                             <Button className="group h-14 w-full min-w-[180px] rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 px-8 text-lg font-medium text-white transition-all duration-300 hover:from-teal-700 hover:to-cyan-700 dark:from-teal-500 dark:to-cyan-500 dark:hover:from-teal-600 dark:hover:to-cyan-600 sm:w-auto">
//                                 Get Started
//                                 <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
//                             </Button>
//                         </Link>
//                         <Link href="#features">
//                             <Button variant="outline" className="h-14 w-full min-w-[180px] rounded-xl border-2 border-gray-300 px-8 text-lg font-medium text-gray-800 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 sm:w-auto">
//                                 Learn More
//                             </Button>
//                         </Link>
//                     </motion.div>
//                 </motion.div>

//                 {/* Scroll Down Indicator */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, delay: 1 }}
//                     className="absolute bottom-10 left-1/2 -translate-x-1/2"
//                 >
//                     <div className="flex flex-col items-center">
//                         <span className="mb-2 text-sm text-gray-500 dark:text-gray-400">Scroll Down</span>
//                         <div className="h-10 w-6 rounded-full border-2 border-gray-300 dark:border-gray-700">
//                             <motion.div
//                                 animate={{
//                                     y: [0, 12, 0],
//                                 }}
//                                 transition={{
//                                     repeat: Infinity,
//                                     duration: 1.5,
//                                 }}
//                                 className="mx-auto mt-1 h-2 w-2 rounded-full bg-teal-500 dark:bg-teal-400"
//                             />
//                         </div>
//                     </div>
//                 </motion.div>
//             </div>

//             {/* Hero Wave Divider */}
//             <div className="absolute bottom-0 left-0 right-0 z-10 h-16 overflow-hidden">
//                 <svg className="absolute bottom-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
//                     <path
//                         className="fill-white dark:fill-gray-900"
//                         d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//                     ></path>
//                 </svg>
//             </div>

//             <style jsx>{`
//         @keyframes blob {
//           0% {
//             transform: scale(1) translate(0px, 0px);
//           }
//           33% {
//             transform: scale(1.1) translate(30px, -50px);
//           }
//           66% {
//             transform: scale(0.9) translate(-20px, 20px);
//           }
//           100% {
//             transform: scale(1) translate(0px, 0px);
//           }
//         }
//       `}</style>
//         </section>
//     );
// };

// export default HeroSection;

'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, useInView } from 'framer-motion';
import { ArrowRight, Database, Gauge, Atom, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';

interface MousePosition {
    x: number;
    y: number;
}

interface ParticleProps {
    position: { x: number; y: number };
    size: number;
    color: string;
    delay: number;
}

// Animated particle component
const Particle: React.FC<ParticleProps> = ({ position, size, color, delay }) => {
    return (
        <motion.div
            className="absolute rounded-full opacity-80"
            style={{
                left: `${position.x}%`,
                top: `${position.y}%`,
                width: size,
                height: size,
                backgroundColor: color,
                filter: 'blur(5px)',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.5, 1],
                x: [0, Math.random() * 50 - 25, 0],
                y: [0, Math.random() * 50 - 25, 0],
            }}
            transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: delay,
                ease: "easeInOut"
            }}
        />
    );
};

const HeroSection: React.FC = () => {
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
    const heroRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(heroRef, { once: false });

    // For parallax scrolling effect
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    // For smooth mouse movement
    const springConfig = { damping: 25, stiffness: 150 };
    const mouseX = useSpring(useMotionValue(0), springConfig);
    const mouseY = useSpring(useMotionValue(0), springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            if (heroRef.current) {
                const { width, height, left, top } = heroRef.current.getBoundingClientRect();
                const x = (clientX - left) / width - 0.5;
                const y = (clientY - top) / height - 0.5;

                setMousePosition({ x, y });
                mouseX.set(x * 30); // Determine intensity of movement
                mouseY.set(y * 30);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [mouseX, mouseY]);

    // Generate random particles for animation
    const particles = Array.from({ length: 15 }).map((_, i) => ({
        position: {
            x: Math.random() * 100,
            y: Math.random() * 100
        },
        size: 5 + Math.random() * 20,
        color: [
            'rgba(45, 212, 191, 0.4)',  // teal
            'rgba(6, 182, 212, 0.4)',   // cyan
            'rgba(59, 130, 246, 0.4)',  // blue
        ][Math.floor(Math.random() * 3)],
        delay: Math.random() * 5
    }));

    return (
        <section ref={heroRef} className="relative min-h-screen w-full overflow-hidden">
            {/* Gas plant image background with overlay effect */}
            <div className="absolute inset-0 z-0">
                {/* Background Image with Parallax */}
                <motion.div
                    className="absolute inset-0 z-0 h-[120%] w-[120%] -translate-x-[10%] -translate-y-[10%]"
                    style={{
                        x: mouseX,
                        y: mouseY,
                    }}
                >
                    <Image
                        src="/hero/hero.jpg"
                        alt="Gas plant"
                        fill
                        priority
                        className="object-cover"
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center',
                            filter: 'brightness(0.7)',
                        }}
                    />
                </motion.div>

                {/* Dark overlay for readability in both light and dark mode */}
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-gray-900/70 via-gray-900/60 to-gray-900/80" />

                {/* Animated Grid Overlay */}
                {/* <motion.div
                    className="absolute inset-0 z-20 h-full w-full"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(14, 165, 233, 0.07) 1px, transparent 1px), linear-gradient(to right, rgba(14, 165, 233, 0.07) 1px, transparent 1px)',
                        backgroundSize: '4rem 4rem',
                        y: y1, // Parallax effect on scroll
                        opacity,
                    }}
                /> */}

                {/* Animated Moving Particles */}
                <div className="absolute inset-0 z-30">
                    {particles.map((particle, index) => (
                        <Particle
                            key={index}
                            position={particle.position}
                            size={particle.size}
                            color={particle.color}
                            delay={particle.delay}
                        />
                    ))}
                </div>

                {/* Light rays effect */}
                <div className="absolute inset-0 z-20">
                    <motion.div
                        className="absolute left-1/4 top-0 h-[80vh] w-[3px] -translate-x-1/2 bg-gradient-to-b from-cyan-400/0 via-cyan-400/20 to-cyan-400/0"
                        animate={{
                            height: ['80vh', '90vh', '80vh'],
                            opacity: [0.3, 0.7, 0.3],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute left-2/3 top-0 h-[70vh] w-[2px] -translate-x-1/2 bg-gradient-to-b from-teal-400/0 via-teal-400/15 to-teal-400/0"
                        animate={{
                            height: ['70vh', '85vh', '70vh'],
                            opacity: [0.2, 0.6, 0.2],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2
                        }}
                    />
                </div>
            </div>

            {/* Hero Content */}
            <div className="relative z-40 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
                {/* Floating Logo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 flex items-center justify-center"
                >
                    <motion.div
                        animate={{
                            y: [0, -10, 0],
                            boxShadow: [
                                '0 0 25px 5px rgba(20, 184, 166, 0.2)',
                                '0 0 30px 8px rgba(20, 184, 166, 0.4)',
                                '0 0 25px 5px rgba(20, 184, 166, 0.2)'
                            ]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 shadow-xl"
                    >
                        <Atom className="h-14 w-14 text-white" />
                    </motion.div>
                </motion.div>

                {/* Title and subtitle */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center"
                >
                    <motion.h1
                        className="mb-6 text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl"
                        variants={{
                            hidden: { opacity: 0, y: -20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <motion.span
                            className="block"
                            variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: { opacity: 1, x: 0 }
                            }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <span className="text-teal-400">AI4</span>
                            <span className="text-cyan-400">HyQ</span>
                        </motion.span>
                        <motion.span
                            className="mt-2 block text-3xl font-light md:text-4xl"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            Revolutionizing Gas Quality Monitoring with AI
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mx-auto mb-10 max-w-3xl text-xl text-gray-300"
                    >
                        Real-Time Monitoring | Predictive Analytics | Sustainable Energy
                    </motion.p>

                    {/* Feature badges */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mb-12 flex flex-wrap items-center justify-center gap-3"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(20, 184, 166, 0.5)' }}
                            className="flex items-center rounded-full bg-teal-900/60 px-4 py-2 text-sm text-teal-200 backdrop-blur-sm transition-all duration-300"
                        >
                            <Gauge className="mr-2 h-4 w-4" />
                            Real-Time Analytics
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(6, 182, 212, 0.5)' }}
                            className="flex items-center rounded-full bg-cyan-900/60 px-4 py-2 text-sm text-cyan-200 backdrop-blur-sm transition-all duration-300"
                        >
                            <Database className="mr-2 h-4 w-4" />
                            AI-Powered Insights
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
                            className="flex items-center rounded-full bg-blue-900/60 px-4 py-2 text-sm text-blue-200 backdrop-blur-sm transition-all duration-300"
                        >
                            <Zap className="mr-2 h-4 w-4" />
                            Energy Efficiency
                        </motion.div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col items-center justify-center gap-6 sm:flex-row"
                    >
                        <Link href="/auth/login">
                            <Button className="group h-14 w-full min-w-[180px] rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 px-8 text-lg font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 hover:from-teal-600 hover:to-cyan-600 sm:w-auto">
                                <motion.span className="flex items-center">
                                    Get Started
                                    <motion.div
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 1.5,
                                            repeatType: "mirror"
                                        }}
                                    >
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </motion.div>
                                </motion.span>
                            </Button>
                        </Link>
                        <Link href="#features">
                            <Button variant="outline" className="h-14 w-full min-w-[180px] rounded-xl border-2 border-gray-300/30 bg-gray-900/30 px-8 text-lg font-medium text-gray-100 backdrop-blur-sm transition-colors hover:bg-gray-700/50 hover:text-white sm:w-auto">
                                Learn More
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Scroll Down Indicator */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    style={{ opacity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <div className="flex flex-col items-center">
                        <span className="mb-2 text-sm text-gray-300">Scroll Down</span>
                        <div className="h-10 w-6 rounded-full border-2 border-gray-300/50">
                            <motion.div
                                animate={{
                                    y: [0, 12, 0],
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 1.5,
                                }}
                                className="mx-auto mt-1 h-2 w-2 rounded-full bg-teal-400"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Hero Wave Divider */}
            <div className="absolute bottom-0 left-0 right-0 z-40 h-20 overflow-hidden">
                <motion.svg
                    className="absolute bottom-0 w-full"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="fill-gray-900"
                        d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></motion.path>
                </motion.svg>
            </div>

            <style jsx>{`
        @keyframes blob {
          0% {
            transform: scale(1) translate(0px, 0px);
          }
          33% {
            transform: scale(1.1) translate(30px, -50px);
          }
          66% {
            transform: scale(0.9) translate(-20px, 20px);
          }
          100% {
            transform: scale(1) translate(0px, 0px);
          }
        }
      `}</style>
        </section>
    );
};

export default HeroSection;