'use client';

import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, Download } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Product',
      links: ['Features', 'Security', 'Pricing', 'Download', 'Blog'],
    },
    {
      title: 'Company',
      links: ['About', 'Careers', 'Press', 'Status', 'Contact'],
    },
    {
      title: 'Resources',
      links: ['Documentation', 'API', 'Community', 'Guides', 'Support'],
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Compliance'],
    },
  ];

  const socialLinks = [
    { icon: Github, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Mail, href: '#' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <footer className="relative border-t border-emerald/10 bg-dark-bg/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 glass rounded-2xl p-10 border border-emerald/10 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to chat securely?</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Join thousands of users who trust ChatZ for secure, encrypted messaging.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-emerald text-white font-bold rounded-lg hover:bg-emerald-light transition-smooth"
            >
              Get Started Free
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border-2 border-emerald text-emerald font-bold rounded-lg hover:bg-emerald hover:text-white transition-smooth flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download App
            </motion.button>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12"
        >
          {/* Logo and description */}
          <motion.div variants={itemVariants} className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald to-neon-cyan flex items-center justify-center font-bold text-white"
              >
                Z
              </motion.div>
              <span className="text-xl font-bold gradient-text">ChatZ</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Secure. Private. Fast. Your conversations deserve protection.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-8 h-8 rounded-lg glass border border-emerald/20 flex items-center justify-center hover:border-emerald/50 transition-smooth"
                  >
                    <Icon className="w-4 h-4 text-emerald" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Links sections */}
          {sections.map((section, i) => (
            <motion.div key={i} variants={itemVariants}>
              <h3 className="font-bold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <motion.a
                      href="#"
                      whileHover={{ color: '#036A38' }}
                      className="text-sm text-gray-400 hover:text-emerald transition-colors"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-emerald/20 to-transparent mb-8" />

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400"
        >
          <p>© {currentYear} ChatZ. All rights reserved. Built with 💚</p>
          <div className="flex gap-6">
            <motion.a
              href="#"
              whileHover={{ color: '#036A38' }}
              className="hover:text-emerald transition-colors"
            >
              Status
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ color: '#036A38' }}
              className="hover:text-emerald transition-colors"
            >
              Accessibility
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Floating background elements */}
      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl bg-neon-cyan pointer-events-none"
      />
    </footer>
  );
}
