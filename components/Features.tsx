'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Users, Phone, Type, CheckCircle, Image, Sparkles, Moon, Smartphone } from 'lucide-react';

export default function Features() {
  const features = [
    { icon: MessageCircle, title: 'Real-time Messaging', description: 'Instant delivery with Socket.IO' },
    { icon: Users, title: 'Group Chats', description: 'Organize teams and communities' },
    { icon: Phone, title: 'Voice & Video', description: 'Crystal clear calls' },
    { icon: Type, title: 'Typing Indicators', description: 'Know when friends are typing' },
    { icon: CheckCircle, title: 'Read Receipts', description: 'See when messages are read' },
    { icon: Image, title: 'Media Sharing', description: 'Share photos and files securely' },
    { icon: Sparkles, title: 'AI Smart Replies', description: 'Quick suggestions powered by AI' },
    { icon: Moon, title: 'Dark Mode', description: 'Easy on the eyes, always' },
    { icon: Smartphone, title: 'Cross-platform', description: 'Desktop, mobile, web sync' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="features" className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Packed with <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Everything you need for seamless, secure communication with advanced capabilities.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: '0 0 30px rgba(3, 106, 56, 0.2)' }}
                className="group glass rounded-2xl p-6 border border-emerald/10 hover:border-emerald/30 cursor-pointer transition-smooth"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-emerald/30 to-neon-cyan/20 mb-4 group-hover:shadow-glow-emerald transition-smooth"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Icon className="w-6 h-6 text-emerald" />
                </motion.div>
                <h3 className="text-lg font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
                
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                  className="h-1 bg-gradient-to-r from-emerald to-neon-cyan rounded-full mt-4"
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Feature highlight section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 glass rounded-2xl p-10 border border-emerald/10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h3 className="text-3xl font-bold mb-6">Real-time Sync Across Devices</h3>
            <ul className="space-y-4">
              {[
                'Seamless message synchronization',
                'Instant desktop notifications',
                'Offline mode with auto-sync',
                'Cloud-encrypted backup',
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
          
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative h-64"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald/20 to-neon-cyan/10 rounded-xl" />
            <div className="absolute inset-0 flex items-center justify-center text-6xl">
              🔄
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
