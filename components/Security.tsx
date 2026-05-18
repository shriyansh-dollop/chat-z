'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, FileCheck, Smartphone } from 'lucide-react';

export default function Security() {
  const features = [
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'Military-grade encryption ensures only you and your contacts can read messages',
    },
    {
      icon: Shield,
      title: 'Zero Data Leaks',
      description: 'Your conversations never touch our servers unencrypted. Complete privacy guaranteed.',
    },
    {
      icon: FileCheck,
      title: 'Secure File Sharing',
      description: 'Share files with end-to-end encryption. No unencrypted files on servers.',
    },
    {
      icon: Smartphone,
      title: 'Device Sync',
      description: 'Seamlessly sync across all your devices with encrypted cloud synchronization.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="security" className="relative py-20 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl bg-emerald"
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
            <span className="gradient-text">Trusted Security</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Your conversations are protected with the same encryption standards used by governments and enterprises.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group glass rounded-2xl p-8 border border-emerald/10 hover:border-emerald/30 transition-smooth"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-emerald/20 to-neon-cyan/20 mb-6 group-hover:shadow-glow-emerald transition-smooth"
                >
                  <Icon className="w-7 h-7 text-emerald" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Encryption flow visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-2xl p-12 border border-emerald/10"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">How Encryption Works</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: 1, label: 'You type', icon: '✏️' },
              { step: 2, label: 'Encrypted', icon: '🔐' },
              { step: 3, label: 'Transmitted', icon: '📡' },
              { step: 4, label: 'Decrypted', icon: '🔓' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="text-center">
                  <p className="text-emerald font-bold text-lg">Step {item.step}</p>
                  <p className="text-gray-400 text-sm">{item.label}</p>
                </div>
                {index < 3 && (
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    className="hidden md:block absolute left-1/2 translate-x-full text-emerald text-2xl"
                  >
                    →
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-12 p-6 bg-emerald/10 rounded-xl border border-emerald/20"
          >
            <p className="text-center text-gray-300">
              <span className="text-emerald font-bold">AES-256</span> encryption for messages • 
              <span className="text-emerald font-bold ml-2">ECDH</span> for key exchange • 
              <span className="text-emerald font-bold ml-2">Perfect Forward Secrecy</span> enabled
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
