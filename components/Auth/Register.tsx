'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, UserPlus, Atom, AlertCircle, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    organization: string;
    organizationType: string;
    acceptTerms: boolean;
}

const Register: React.FC = () => {
    const router = useRouter();
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        organization: '',
        organizationType: '',
        acceptTerms: false
    });
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (checked: boolean | 'indeterminate') => {
        setFormData(prev => ({ ...prev, acceptTerms: checked === true }));
    };

    const handleSelectChange = (value: string) => {
        setFormData(prev => ({ ...prev, organizationType: value }));
    };

    const validateForm = (): boolean => {
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords don't match");
            return false;
        }

        if (formData.password.length < 8) {
            setError("Password must be at least 8 characters long");
            return false;
        }

        if (!formData.acceptTerms) {
            setError("You must accept the terms and conditions");
            return false;
        }

        return true;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsLoading(true);
        setError(null);

        try {
            // Here you would implement your actual registration logic
            // This is just a placeholder simulation
            await new Promise(resolve => setTimeout(resolve, 1500));

            // For demo purposes, let's simulate a successful registration
            // In a real app, you would send the form data to your backend
            // and then redirect the user

            router.push('/auth/login?registered=true');
        } catch (err) {
            setError('Registration failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-900">
            <div className="mx-auto flex w-full max-w-xl flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 shadow-lg dark:from-teal-400 dark:to-cyan-400"
                    >
                        <Atom className="h-8 w-8 text-white" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h2 className="mt-6 text-center text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                            Create your account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                            Already have an account?{' '}
                            <Link href="/auth/login" className="font-medium text-teal-600 hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300">
                                Sign in
                            </Link>
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl"
                >
                    <div className="rounded-lg bg-white px-6 py-8 shadow dark:bg-gray-800 sm:px-10">
                        {error && (
                            <Alert variant="destructive" className="mb-6">
                                <AlertCircle className="h-4 w-4" />
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        )}

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <Label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        First name
                                    </Label>
                                    <div className="mt-1">
                                        <Input
                                            id="firstName"
                                            name="firstName"
                                            type="text"
                                            autoComplete="given-name"
                                            required
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-teal-400 dark:focus:ring-teal-400"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Last name
                                    </Label>
                                    <div className="mt-1">
                                        <Input
                                            id="lastName"
                                            name="lastName"
                                            type="text"
                                            autoComplete="family-name"
                                            required
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-teal-400 dark:focus:ring-teal-400"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Email address
                                </Label>
                                <div className="mt-1">
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-teal-400 dark:focus:ring-teal-400"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <Label htmlFor="organization" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Organization
                                    </Label>
                                    <div className="mt-1">
                                        <Input
                                            id="organization"
                                            name="organization"
                                            type="text"
                                            autoComplete="organization"
                                            value={formData.organization}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-teal-400 dark:focus:ring-teal-400"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="organizationType" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Organization type
                                    </Label>
                                    <Select
                                        onValueChange={handleSelectChange}
                                        value={formData.organizationType}
                                    >
                                        <SelectTrigger className="mt-1 w-full border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-teal-400 dark:focus:ring-teal-400">
                                            <SelectValue placeholder="Select type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="energy-provider">Energy Provider</SelectItem>
                                            <SelectItem value="industrial-user">Industrial User</SelectItem>
                                            <SelectItem value="regulator">Regulator</SelectItem>
                                            <SelectItem value="academic">Academic</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Password
                                </Label>
                                <div className="mt-1 relative">
                                    <Input
                                        id="password"
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        autoComplete="new-password"
                                        required
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-teal-400 dark:focus:ring-teal-400"
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 dark:text-gray-400"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-4 w-4" />
                                        ) : (
                                            <Eye className="h-4 w-4" />
                                        )}
                                    </button>
                                </div>
                                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                    Must be at least 8 characters long
                                </p>
                            </div>

                            <div>
                                <Label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Confirm password
                                </Label>
                                <div className="mt-1">
                                    <Input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type={showPassword ? 'text' : 'password'}
                                        autoComplete="new-password"
                                        required
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-teal-400 dark:focus:ring-teal-400"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center">
                                <Checkbox
                                    id="acceptTerms"
                                    checked={formData.acceptTerms}
                                    onCheckedChange={handleCheckboxChange}
                                    className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500 dark:border-gray-600 dark:text-teal-400 dark:focus:ring-teal-400"
                                />
                                <Label
                                    htmlFor="acceptTerms"
                                    className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                                >
                                    I agree to the{' '}
                                    <Link href="/terms" className="font-medium text-teal-600 hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300">
                                        Terms of Service
                                    </Link>{' '}
                                    and{' '}
                                    <Link href="/privacy" className="font-medium text-teal-600 hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300">
                                        Privacy Policy
                                    </Link>
                                </Label>
                            </div>

                            <div>
                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="group flex w-full items-center justify-center rounded-md bg-gradient-to-r from-teal-600 to-cyan-600 px-4 py-6 text-white hover:from-teal-700 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:from-teal-500 dark:to-cyan-500 dark:hover:from-teal-600 dark:hover:to-cyan-600"
                                >
                                    <UserPlus className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    {isLoading ? 'Creating account...' : 'Create account'}
                                </Button>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Register;