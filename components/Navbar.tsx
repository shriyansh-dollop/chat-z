'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Features', 'Security', 'Pricing', 'FAQ', 'Contact'];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald to-neon-cyan flex items-center justify-center font-bold"
            >
              Z
            </motion.div>
            <span className="text-xl font-bold gradient-text">ChatZ</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ color: '#036A38' }}
                className="text-gray-300 hover:text-emerald transition-smooth text-sm font-medium"
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-sm font-medium text-emerald border border-emerald rounded-lg hover:bg-emerald hover:text-white transition-smooth"
            >
              Sign In
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-sm font-bold text-white bg-emerald rounded-lg hover:bg-emerald-light transition-smooth"
            >
              Start Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-emerald"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-emerald"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-emerald"
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 space-y-2"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-2 text-gray-300 hover:text-emerald transition-smooth"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
