'use client';

import React, { useState, useRef, FormEvent } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    MessageSquare,
    Users,
    Building2,
    FileText,
    CheckCircle2,
    Check,
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ContactInfoItem {
    icon: React.ReactNode;
    title: string;
    details: string;
    details2: string;
    action: string;
    link: string;
}

interface InquiryType {
    id: string;
    label: string;
}

interface FaqItem {
    q: string;
    a: string;
}

const ContactPage: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<string>("general");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Form submission logic would go here
        setFormSubmitted(true);

        // Reset form after 5 seconds
        setTimeout(() => {
            setFormSubmitted(false);
            (e.target as HTMLFormElement).reset();
        }, 5000);
    };

    const contactInfo: ContactInfoItem[] = [
        {
            icon: <Mail className="h-6 w-6" />,
            title: "Email Us",
            details: "info@hitoai.ai",
            details2: "",
            action: "Email Now",
            link: "mailto:info@hitoai.ai"
        },
        {
            icon: <Phone className="h-6 w-6" />,
            title: "Call Us",
            details: "+353 89 983 2147",
            details2: "Mon-Fri, 9:00-17:00 IST",
            action: "Call Now",
            link: "tel:+353899832147"
        },
        {
            icon: <MapPin className="h-6 w-6" />,
            title: "Visit Us",
            details: "HITOAI Limited",
            details2: "Sandyford, Dublin 18, Ireland",
            action: "Get Directions",
            link: "https://maps.google.com"
        },
    ];

    const inquiryTypes: InquiryType[] = [
        { id: "demo", label: "Request a Demo" },
        { id: "sales", label: "Sales Inquiry" },
        { id: "technical", label: "Technical Support" },
        { id: "partnership", label: "Partnership Opportunity" },
        { id: "media", label: "Media Inquiry" },
    ];


    const helpItems: string[] = [
        "Schedule a personalized demo of the HyQ platform",
        "Discuss integration with your existing systems",
        "Learn about custom solutions for your unique needs",
        "Explore implementation options and timelines"
    ];

    return (
        <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 pt-12">
            {/* Header Section */}
            <section className="relative overflow-hidden bg-gradient-to-r from-teal-500 to-cyan-600 py-16 dark:from-teal-700 dark:to-cyan-800">
                <div className="absolute inset-0 z-0 opacity-20">
                    <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="contact-pattern" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                            <rect width="100%" height="100%" fill="none" />
                            <circle cx="20" cy="20" r="2" fill="currentColor" className="text-white" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#contact-pattern)" />
                    </svg>
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <motion.h1
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold text-white sm:text-4xl md:text-5xl"
                    >
                        Contact Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mx-auto mt-3 max-w-2xl text-base sm:text-lg text-teal-50"
                    >
                        Get in touch with our team to learn how the HyQ platform can transform your gas quality monitoring with AI-driven precision.
                    </motion.p>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" style={{ marginTop: "-3rem" }}>
                <div className="grid gap-4 md:grid-cols-3">
                    {contactInfo.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 * index }}
                        >
                            <Card className="overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
                                <CardContent className="p-4">
                                    <div className="flex items-start gap-3">
                                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
                                            {item.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-300">{item.details}</p>
                                            {item.details2 && (
                                                <p className="text-sm text-gray-600 dark:text-gray-300">{item.details2}</p>
                                            )}
                                            <a
                                                href={item.link}
                                                className="mt-2 inline-flex items-center gap-1 text-sm text-teal-600 transition-colors hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
                                            >
                                                {item.action} <Send className="h-3 w-3" />
                                            </a>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Main Contact Section */}
            <section ref={sectionRef} className="py-12 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 lg:grid-cols-2">
                        {/* Form Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-700 dark:bg-gray-800">
                                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Send Us a Message</h2>

                                <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="mb-8">
                                    <TabsList className="grid w-full grid-cols-3">
                                        <TabsTrigger value="general" className="flex items-center gap-2">
                                            <MessageSquare className="h-4 w-4" />
                                            <span className="hidden sm:inline">General</span>
                                        </TabsTrigger>
                                        <TabsTrigger value="sales" className="flex items-center gap-2">
                                            <Users className="h-4 w-4" />
                                            <span className="hidden sm:inline">Sales</span>
                                        </TabsTrigger>
                                        <TabsTrigger value="support" className="flex items-center gap-2">
                                            <Building2 className="h-4 w-4" />
                                            <span className="hidden sm:inline">Support</span>
                                        </TabsTrigger>
                                    </TabsList>

                                    <TabsContent value="general" className="mt-4">
                                        <p className="mb-4 text-gray-600 dark:text-gray-300">
                                            Have a question about HyQ? We're here to help with any general inquiries about our platform.
                                        </p>
                                    </TabsContent>

                                    <TabsContent value="sales" className="mt-4">
                                        <p className="mb-4 text-gray-600 dark:text-gray-300">
                                            Interested in implementing HyQ? Our sales team will provide detailed information about pricing and implementation.
                                        </p>
                                    </TabsContent>

                                    <TabsContent value="support" className="mt-4">
                                        <p className="mb-4 text-gray-600 dark:text-gray-300">
                                            Need technical assistance? Our support team is available to help resolve any issues with your HyQ platform.
                                        </p>
                                    </TabsContent>
                                </Tabs>

                                {formSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="flex flex-col items-center justify-center rounded-lg bg-teal-50 p-8 text-center dark:bg-teal-900/20"
                                    >
                                        <CheckCircle2 className="mb-4 h-16 w-16 text-teal-600 dark:text-teal-400" />
                                        <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Message Sent!</h3>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            Thank you for reaching out. Our team will get back to you shortly.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid gap-6 md:grid-cols-2">
                                            <div className="space-y-2">
                                                <Label htmlFor="firstName">First Name</Label>
                                                <Input
                                                    id="firstName"
                                                    placeholder="John"
                                                    required
                                                    className="border-gray-300 focus:border-teal-500 dark:border-gray-600"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="lastName">Last Name</Label>
                                                <Input
                                                    id="lastName"
                                                    placeholder="Doe"
                                                    required
                                                    className="border-gray-300 focus:border-teal-500 dark:border-gray-600"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid gap-6 md:grid-cols-2">
                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    placeholder="johndoe@example.com"
                                                    required
                                                    className="border-gray-300 focus:border-teal-500 dark:border-gray-600"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="phone">Phone (Optional)</Label>
                                                <Input
                                                    id="phone"
                                                    type="tel"
                                                    placeholder="+353 123 4567"
                                                    className="border-gray-300 focus:border-teal-500 dark:border-gray-600"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="company">Company</Label>
                                            <Input
                                                id="company"
                                                placeholder="Your Company Ltd."
                                                required
                                                className="border-gray-300 focus:border-teal-500 dark:border-gray-600"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="inquiryType">Inquiry Type</Label>
                                            <Select defaultValue="demo">
                                                <SelectTrigger className="border-gray-300 focus:border-teal-500 dark:border-gray-600">
                                                    <SelectValue placeholder="Select inquiry type" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {inquiryTypes.map((type) => (
                                                        <SelectItem key={type.id} value={type.id}>
                                                            {type.label}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message">Message</Label>
                                            <Textarea
                                                id="message"
                                                placeholder="How can we help you?"
                                                required
                                                className="min-h-32 border-gray-300 focus:border-teal-500 dark:border-gray-600"
                                            />
                                        </div>

                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                id="consent"
                                                className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                                                required
                                            />
                                            <Label htmlFor="consent" className="text-sm text-gray-600 dark:text-gray-300">
                                                I agree to the processing of my data in accordance with the Privacy Policy
                                            </Label>
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 py-6 text-white transition-all hover:from-teal-700 hover:to-cyan-700 dark:from-teal-500 dark:to-cyan-500 dark:hover:from-teal-600 dark:hover:to-cyan-600"
                                        >
                                            Send Message
                                        </Button>
                                    </form>
                                )}
                            </div>
                        </motion.div>

                        {/* Info Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col justify-between"
                        >
                            <div>
                                <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                                    Let's Discuss How <span className="text-teal-600 dark:text-teal-400">HyQ</span> Can Transform Your Gas Monitoring
                                </h2>

                                <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
                                    Our team of experts is ready to answer your questions and provide insights on how our AI-powered platform can transform your operations.
                                </p>

                                <div className="mb-12 space-y-6">
                                    <div className="rounded-xl bg-gray-50 p-6 dark:bg-gray-800/50">
                                        <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">How We Can Help</h3>
                                        <ul className="space-y-4">
                                            {helpItems.map((item, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30">
                                                        <Check className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                                                    </div>
                                                    <span className="text-gray-600 dark:text-gray-300">
                                                        {item}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="rounded-xl bg-gradient-to-r from-teal-50 to-cyan-50 p-6 dark:from-teal-900/20 dark:to-cyan-900/20">
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30">
                                                <Clock className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Response</h3>
                                                <p className="text-gray-600 dark:text-gray-300">We aim to respond to all inquiries within 24 hours</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 p-8 text-white dark:from-teal-500 dark:to-cyan-500">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
                                        <FileText className="h-7 w-7 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold">Resource Center</h3>
                                        <p className="text-teal-50">Explore our white papers and case studies</p>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <Button
                                        variant="outline"
                                        className="w-full border-white bg-transparent text-white hover:bg-white/10"
                                        onClick={() => window.location.href = '/resources'}
                                    >
                                        Access Resources
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* Map Section */}
            <section className="py-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="overflow-hidden rounded-2xl shadow-lg">
                        <div className="h-80 w-full bg-gray-200 dark:bg-gray-700">
                            {/* Replace with actual map component */}
                            <div className="flex h-full w-full items-center justify-center bg-gray-200 dark:bg-gray-700">
                                <MapPin className="h-12 w-12 text-gray-400 dark:text-gray-500" />
                                <span className="ml-2 text-xl text-gray-500 dark:text-gray-400">Interactive Map Would Appear Here</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;