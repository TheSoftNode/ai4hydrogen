'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Atom,
    Menu,
    X,
    Sun,
    Moon,
    ChevronDown,
    LogIn,
    UserPlus,
    User,
    LogOut
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface UserProps {
    name: string;
    email: string;
}

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    mobile?: boolean;
    onClick?: () => void;
}

interface NavbarProps {
    user?: UserProps | null;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, mobile = false, onClick }) => {
    const pathname = usePathname();
    const isActive = pathname === href || (href !== '/' && pathname?.startsWith(href));

    return (
        <Link
            href={href}
            className={`${isActive
                ? 'text-teal-400 font-medium'
                : 'dark:text-white hover:text-teal-400'
                } ${mobile ? 'block w-full py-3 text-xl font-medium text-gray-900 hover:text-teal-600 dark:text-white dark:hover:text-teal-400' : 'px-3 py-2 text-sm'
                } transition-colors`}
            onClick={onClick}
        >
            {children}
        </Link>
    );
};

const Navbar: React.FC<NavbarProps> = ({ user }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/#features', label: 'Features' },
        { href: '/#benefits', label: 'Benefits' },
        { href: '/#technology', label: 'Technology' },
        // { href: '/#investment', label: 'Investment' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <>
            <header
                className={`fixed left-0 right-0 top-0 z-50 w-full transition-all duration-300 ${scrolled
                    ? 'bg-white shadow-md backdrop-blur-md dark:bg-gray-900 text-gray-900'
                    : 'bg-white/100 backdrop-blur-md dark:bg-black/60'
                    }`}
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2">
                            <motion.div
                                initial={{ rotate: -10 }}
                                animate={{ rotate: 0 }}
                                transition={{ duration: 0.5 }}
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 dark:from-teal-400 dark:to-cyan-400 shadow-lg"
                            >
                                <Atom className="h-6 w-6 text-white" />
                            </motion.div>
                            <span className="text-xl font-bold">
                                <span className="text-teal-500 dark:text-teal-400">H</span>
                                <span className="text-cyan-500 dark:text-cyan-400">yQ</span>
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden items-center md:flex">
                            <nav className="mr-4 flex space-x-2">
                                {navLinks.map((link) => (
                                    <NavLink key={link.href} href={link.href}>
                                        {link.label}
                                    </NavLink>
                                ))}
                            </nav>

                            {/* Theme Toggle */}
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                className="mr-4 rounded-full text-gray-800 bg-gray-100/80 hover:bg-gray-200 hover:text-teal-600 dark:bg-gray-800/80 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-teal-400"
                            >
                                {theme === 'dark' ? (
                                    <Sun className="h-5 w-5" />
                                ) : (
                                    <Moon className="h-5 w-5" />
                                )}
                            </Button>

                            {/* Auth Buttons */}
                            {user ? (
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="flex items-center gap-2 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-gray-100">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/70">
                                                <User className="h-4 w-4 text-teal-700 dark:text-teal-400" />
                                            </div>
                                            <span className="text-sm">
                                                {user.name}
                                            </span>
                                            <ChevronDown className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="w-56 border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <DropdownMenuItem className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <Link href="/dashboard" className="flex w-full items-center text-gray-900 dark:text-gray-100">
                                                Dashboard
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <Link href="/profile" className="flex w-full items-center text-gray-900 dark:text-gray-100">
                                                Profile
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <Link href="/settings" className="flex w-full items-center text-gray-900 dark:text-gray-100">
                                                Settings
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-700" />
                                        <DropdownMenuItem className="cursor-pointer hover:bg-red-50 dark:hover:bg-red-900/20">
                                            <button className="flex w-full items-center gap-2 text-red-600 dark:text-red-400">
                                                <LogOut className="h-4 w-4" />
                                                Sign Out
                                            </button>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            ) : (
                                <div className="flex items-center space-x-4">
                                    <Link href="/auth/login">
                                        <Button variant="ghost" className="flex items-center gap-2 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100">
                                            <LogIn className="h-4 w-4" />
                                            Sign In
                                        </Button>
                                    </Link>
                                    <Link href="/auth/register">
                                        <Button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 dark:from-teal-500 dark:to-cyan-500 dark:hover:from-teal-600 dark:hover:to-cyan-600 text-white shadow-md">
                                            <UserPlus className="h-4 w-4" />
                                            Sign Up
                                        </Button>
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex items-center md:hidden">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                className="mr-2 rounded-full bg-gray-100/80 text-gray-800 hover:bg-gray-200 dark:bg-gray-800/80 dark:text-gray-100 dark:hover:bg-gray-700"
                            >
                                {theme === 'dark' ? (
                                    <Sun className="h-5 w-5" />
                                ) : (
                                    <Moon className="h-5 w-5" />
                                )}
                            </Button>

                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsOpen(!isOpen)}
                                className="rounded-full bg-gray-100/80 text-gray-800 hover:bg-gray-200 dark:bg-gray-800/80 dark:text-gray-100 dark:hover:bg-gray-700"
                            >
                                {isOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu - Fixed solid background */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed left-0 right-0 top-16 z-[100] w-full bg-white py-6 shadow-xl dark:bg-gray-900 md:hidden"
                        style={{
                            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
                        }}
                    >
                        <div className="mx-auto max-w-7xl px-4 sm:px-6">
                            <nav className="flex flex-col space-y-2">
                                {navLinks.map((link) => (
                                    <NavLink key={link.href} href={link.href} mobile onClick={() => setIsOpen(false)}>
                                        {link.label}
                                    </NavLink>
                                ))}
                            </nav>

                            <div className="mt-8 space-y-4">
                                {user ? (
                                    <>
                                        <div className="mb-6 flex items-center gap-3 border-b border-gray-200 pb-4 dark:border-gray-700">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/70">
                                                <User className="h-5 w-5 text-teal-700 dark:text-teal-400" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900 dark:text-white">{user.name}</p>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">{user.email}</p>
                                            </div>
                                        </div>
                                        <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                                            <Button variant="ghost" className="w-full justify-start text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800">
                                                Dashboard
                                            </Button>
                                        </Link>
                                        <Link href="/profile" onClick={() => setIsOpen(false)}>
                                            <Button variant="ghost" className="w-full justify-start text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800">
                                                Profile
                                            </Button>
                                        </Link>
                                        <Link href="/settings" onClick={() => setIsOpen(false)}>
                                            <Button variant="ghost" className="w-full justify-start text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800">
                                                Settings
                                            </Button>
                                        </Link>
                                        <Button variant="ghost" className="w-full justify-start text-red-600 hover:bg-red-50 hover:text-red-700 dark:text-red-400 dark:hover:bg-red-900/20">
                                            <LogOut className="mr-2 h-4 w-4" />
                                            Sign Out
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <Link href="/auth/login" onClick={() => setIsOpen(false)}>
                                            <Button variant="outline" className="w-full justify-center text-gray-900 dark:text-gray-100 dark:border-gray-700">
                                                <LogIn className="mr-2 h-4 w-4" />
                                                Sign In
                                            </Button>
                                        </Link>
                                        <Link href="/auth/register" onClick={() => setIsOpen(false)}>
                                            <Button className="w-full justify-center bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 dark:from-teal-500 dark:to-cyan-500 dark:hover:from-teal-600 dark:hover:to-cyan-600 text-white">
                                                <UserPlus className="mr-2 h-4 w-4" />
                                                Sign Up
                                            </Button>
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;

