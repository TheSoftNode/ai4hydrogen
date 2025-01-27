'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full bg-gray-50 border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          <p className="text-sm text-gray-500 font-light">
            © {new Date().getFullYear()} AI4Hydrogen. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;