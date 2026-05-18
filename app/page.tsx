'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Security from '@/components/Security';
import Features from '@/components/Features';
import ChatPreview from '@/components/ChatPreview';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-12 h-12 border-2 border-emerald border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Security Section */}
      <Security />

      {/* Features */}
      <Features />

      {/* Chat Preview */}
      <ChatPreview />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Testimonials */}
      <Testimonials />

      {/* Pricing */}
      <Pricing />

      {/* FAQ */}
      <FAQ />

      {/* Footer */}
      <Footer />

      {/* Floating background particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute w-1 h-1 rounded-full bg-emerald"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
