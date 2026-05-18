'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Shield } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl bg-emerald opacity-20"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full blur-3xl bg-neon-cyan opacity-10"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Shield className="w-4 h-4 text-emerald" />
          <span className="text-sm font-medium text-gray-300">Military-grade E2EE Protection</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="gradient-text">Secure Real-Time</span>
          {' '}
          <span className="text-white">Conversations.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Ultra-fast messaging powered by Socket.IO with military-grade End-to-End Encryption. 
          Chat with confidence knowing your privacy is protected.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(3, 106, 56, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-emerald hover:bg-emerald-light text-white font-bold rounded-xl transition-smooth flex items-center justify-center gap-2 group"
          >
            Start Chatting
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-neon-cyan text-neon-cyan font-bold rounded-xl hover:bg-neon-cyan hover:text-dark-bg transition-smooth"
          >
            View Demo
          </motion.button>
        </motion.div>

        {/* Floating Chat Bubbles */}
        <motion.div
          variants={itemVariants}
          className="relative h-96 flex items-center justify-center"
        >
          {/* Chat bubble 1 */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute left-1/4 top-10 glass px-4 py-3 rounded-2xl text-sm font-medium max-w-xs"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald animate-bounce" />
              <span>Hey! Secure messaging ✓</span>
            </div>
          </motion.div>

          {/* Chat bubble 2 */}
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            className="absolute right-1/4 bottom-20 glass px-4 py-3 rounded-2xl text-sm font-medium max-w-xs bg-glass-light"
          >
            <div className="flex items-center gap-2">
              <span>Powered by Socket.IO ⚡</span>
              <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
            </div>
          </motion.div>

          {/* Central dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full max-w-2xl glass rounded-2xl p-6 border border-emerald/20"
          >
            <div className="space-y-4">
              {/* Mockup header */}
              <div className="flex items-center justify-between pb-4 border-b border-emerald/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald to-neon-cyan" />
                  <div>
                    <p className="font-semibold text-sm">Chat Room</p>
                    <p className="text-xs text-gray-500">12 members online</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
                  <span className="text-xs text-emerald font-medium">Encrypted</span>
                </div>
              </div>

              {/* Mockup messages */}
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className={`flex ${i % 2 === 0 ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`px-4 py-2 rounded-lg text-sm max-w-xs ${
                        i % 2 === 0
                          ? 'bg-emerald/20 text-white'
                          : 'bg-glass-light text-gray-300'
                      }`}
                    >
                      {i === 1 && 'Hey, this is secure! 🔒'}
                      {i === 2 && 'End-to-end encrypted'}
                      {i === 3 && 'Real-time messaging ⚡'}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Typing indicator */}
              <div className="flex items-center gap-2 pt-2">
                <div className="w-2 h-2 rounded-full bg-neon-cyan animate-bounce" />
                <div className="w-2 h-2 rounded-full bg-neon-cyan animate-bounce" style={{ animationDelay: '0.2s' }} />
                <div className="w-2 h-2 rounded-full bg-neon-cyan animate-bounce" style={{ animationDelay: '0.4s' }} />
                <span className="text-xs text-gray-500 ml-2">Someone is typing...</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Online status indicators */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center pt-8 text-sm text-gray-400"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
            <span>12,459 users online</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            <span>99.99% uptime</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
            <span>&lt;50ms latency</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
