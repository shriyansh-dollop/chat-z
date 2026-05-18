'use client';

import { motion } from 'framer-motion';
import { Zap, Network, Lock, Palette, Cloud, Gauge } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Socket.IO powered real-time infrastructure with <50ms latency globally',
    },
    {
      icon: Lock,
      title: 'End-to-End Encrypted',
      description: 'All channels encrypted with AES-256. No backdoors, no exceptions.',
    },
    {
      icon: Network,
      title: 'Low Latency',
      description: 'Optimized WebSocket connections for instant message delivery',
    },
    {
      icon: Palette,
      title: 'Beautiful UX',
      description: 'Crafted with premium design principles for delightful conversations',
    },
    {
      icon: Cloud,
      title: 'Cloud Sync',
      description: 'Encrypted synchronization across all your devices seamlessly',
    },
    {
      icon: Gauge,
      title: '99.99% Uptime',
      description: 'Enterprise-grade infrastructure with redundancy and failover',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl bg-neon-cyan"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">ChatZ</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Built for modern communication with the best technology and design practices
          </p>
        </motion.div>

        {/* Reasons grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ translateY: -8 }}
                className="group glass rounded-2xl p-8 border border-emerald/10 hover:border-emerald/30 transition-smooth"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-emerald/30 to-neon-cyan/20 mb-6"
                >
                  <Icon className="w-8 h-8 text-emerald" />
                </motion.div>

                <h3 className="text-xl font-bold mb-3 text-white">{reason.title}</h3>
                <p className="text-gray-400 leading-relaxed">{reason.description}</p>

                {/* Accent line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="h-1 bg-gradient-to-r from-emerald to-neon-cyan rounded-full mt-6"
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Comparison section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 glass rounded-2xl overflow-hidden border border-emerald/10"
        >
          <div className="p-8 border-b border-emerald/10">
            <h3 className="text-2xl font-bold text-center">How We Compare</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-emerald/10">
                  <th className="text-left p-4 font-bold text-emerald">Feature</th>
                  <th className="text-center p-4 font-bold">ChatZ</th>
                  <th className="text-center p-4 font-bold text-gray-400">Competitor A</th>
                  <th className="text-center p-4 font-bold text-gray-400">Competitor B</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['E2E Encryption', true, true, false],
                  ['Low Latency (<50ms)', true, false, true],
                  ['Open Source', true, false, false],
                  ['No Data Selling', true, true, false],
                  ['AI Features', true, true, false],
                  ['File Sharing', true, true, true],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-emerald/10 hover:bg-emerald/5 transition-colors">
                    <td className="p-4 text-gray-300">{row[0]}</td>
                    <td className="p-4 text-center">
                      {row[1] ? (
                        <span className="text-emerald font-bold">✓</span>
                      ) : (
                        <span className="text-gray-500">✗</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row[2] ? (
                        <span className="text-neon-green font-bold">✓</span>
                      ) : (
                        <span className="text-gray-500">✗</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row[3] ? (
                        <span className="text-neon-cyan font-bold">✓</span>
                      ) : (
                        <span className="text-gray-500">✗</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
