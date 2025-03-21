'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Facebook, Mail, PhoneCall, MapPin } from 'lucide-react';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const year = new Date().getFullYear();

    const links = {
        product: [
            { name: 'Features', href: '#features' },
            { name: 'Benefits', href: '#benefits' },
            { name: 'Technology', href: '#technology' },
            { name: 'Pricing', href: '#investment' },
        ],
        company: [
            { name: 'About Us', href: '/about' },
            { name: 'Careers', href: '/careers' },
            { name: 'News', href: '/news' },
            { name: 'Contact', href: '#contact' },
        ],
        resources: [
            { name: 'Documentation', href: '/docs' },
            { name: 'Blog', href: '/blog' },
            { name: 'Support', href: '/support' },
            { name: 'FAQ', href: '/faq' },
        ],
        legal: [
            { name: 'Privacy Policy', href: '/privacy' },
            { name: 'Terms of Service', href: '/terms' },
            { name: 'Cookie Policy', href: '/cookies' },
        ],
    };

    return (
        <footer id="contact" className="relative bg-gray-50 dark:bg-gray-900">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Wave Pattern */}
                <svg className="absolute bottom-0 w-full opacity-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#0891b2"
                        fillOpacity="0.3"
                        d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,96C672,75,768,117,864,154.7C960,192,1056,224,1152,208C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/30 dark:to-gray-900/30"></div>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
                <div className="grid gap-8 pb-16 md:grid-cols-2 lg:grid-cols-4">
                    {/* Company Info */}
                    <div className="mb-8 md:mb-0">
                        <Link href="/" className="mb-6 flex items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 dark:from-teal-400 dark:to-cyan-400">
                                <Atom className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-xl font-bold">
                                <span className="text-teal-700 dark:text-teal-400">AI4</span>
                                <span className="text-cyan-600 dark:text-cyan-400">HyQ</span>
                            </span>
                        </Link>

                        <p className="mb-6 text-gray-600 dark:text-gray-300">
                            Revolutionizing gas quality monitoring with AI-driven precision and sustainability for a cleaner energy future.
                        </p>

                        <div className="mb-6 space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30">
                                    <PhoneCall className="h-4 w-4 text-teal-700 dark:text-teal-400" />
                                </div>
                                <span className="text-gray-700 dark:text-gray-300">+353 89 983 2147</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30">
                                    <Mail className="h-4 w-4 text-teal-700 dark:text-teal-400" />
                                </div>
                                <a href="mailto:info@hitoai.ai" className="hover:text-white transition-colors">
                                    info@hitoai.ai
                                </a>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30">
                                    <MapPin className="h-4 w-4 text-teal-700 dark:text-teal-400" />
                                </div>
                                <span className="text-gray-700 dark:text-gray-300">
                                    HITOAI Limited<br />
                                    Sandyford, Dublin 18<br />
                                    Dublin, Ireland
                                </span>
                            </div>
                        </div>

                        <div className="flex gap-4">

                            <motion.a
                                href="https://www.linkedin.com/company/hitoai-limited/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -3 }}
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
                            >
                                <FaLinkedin className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                            </motion.a>
                            <motion.a
                                href="https://www.f6s.com/company-profile"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -3 }}
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
                            >
                                <img
                                    src={"/socials/f6s-logo.png"}
                                    alt="F6S"
                                    className="h-6 w-6"
                                />
                            </motion.a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">Product</h3>
                        <ul className="space-y-4">
                            {links.product.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="text-gray-600 transition-colors hover:text-teal-700 dark:text-gray-300 dark:hover:text-teal-400">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">Company</h3>
                        <ul className="space-y-4">
                            {links.company.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="text-gray-600 transition-colors hover:text-teal-700 dark:text-gray-300 dark:hover:text-teal-400">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <h3 className="mb-6 mt-8 text-lg font-semibold text-gray-900 dark:text-white">Legal</h3>
                        <ul className="space-y-4">
                            {links.legal.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="text-gray-600 transition-colors hover:text-teal-700 dark:text-gray-300 dark:hover:text-teal-400">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">Stay Updated</h3>
                        <p className="mb-4 text-gray-600 dark:text-gray-300">
                            Subscribe to our newsletter for the latest updates on AI-powered gas quality monitoring.
                        </p>

                        <form className="mb-6 space-y-3">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none transition-colors focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-teal-400 dark:focus:ring-teal-400/20"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full rounded-md bg-gradient-to-r from-teal-600 to-cyan-600 px-4 py-3 text-white transition-colors hover:from-teal-700 hover:to-cyan-700 dark:from-teal-500 dark:to-cyan-500 dark:hover:from-teal-600 dark:hover:to-cyan-600"
                            >
                                Subscribe
                            </button>
                        </form>

                        <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Resources</h3>
                        <ul className="space-y-3">
                            {links.resources.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="text-gray-600 transition-colors hover:text-teal-700 dark:text-gray-300 dark:hover:text-teal-400">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative z-10 border-t border-gray-200 bg-white py-6 dark:border-gray-800 dark:bg-gray-950">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            © {year} AI4HyQ. An AI-enabled product powered by HitoAI Limited. All rights reserved.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <Link href="/privacy" className="hover:text-teal-700 dark:hover:text-teal-400">Privacy</Link>
                            <Link href="/terms" className="hover:text-teal-700 dark:hover:text-teal-400">Terms</Link>
                            <Link href="/cookies" className="hover:text-teal-700 dark:hover:text-teal-400">Cookies</Link>
                            <Link href="/sitemap" className="hover:text-teal-700 dark:hover:text-teal-400">Sitemap</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;