'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How does End-to-End Encryption work?',
      answer: 'End-to-End Encryption (E2EE) ensures that only the sender and recipient can read messages. Your messages are encrypted on your device before being sent and can only be decrypted by the intended recipient. Even our servers cannot access the unencrypted content.',
    },
    {
      question: 'Is my data stored on your servers?',
      answer: 'Messages are not stored in plaintext on our servers. We store encrypted messages temporarily for delivery. Once delivered and read, messages can be permanently deleted from our systems. Your encryption keys are never stored on our servers.',
    },
    {
      question: 'Can administrators read my chats?',
      answer: 'No. Due to End-to-End Encryption, even ChatZ administrators cannot read your messages. The only way to decrypt messages is with your unique encryption key, which only you possess. This is a fundamental feature of our platform.',
    },
    {
      question: 'How is device security handled?',
      answer: 'Your device stores your encryption keys securely using your operating system\'s secure enclave. We support biometric authentication (fingerprint, face ID) and multi-factor authentication. Regular security audits ensure your device data remains protected.',
    },
    {
      question: 'Can I recover my messages if I lose my device?',
      answer: 'Yes! Your messages are backed up to the cloud in encrypted form. When you log in on a new device with your account credentials, your message history is automatically synchronized and decrypted locally.',
    },
    {
      question: 'What happens if ChatZ shuts down?',
      answer: 'Your data remains yours. You can export all your messages and data in standard formats. We never lock users into our platform. Additionally, our platform architecture ensures service continuity.',
    },
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
    <section id="faq" className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Everything you need to know about ChatZ and our secure platform
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass rounded-xl border border-emerald/10 hover:border-emerald/30 transition-smooth overflow-hidden"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full p-6 flex items-center justify-between hover:bg-emerald/5 transition-colors"
              >
                <span className="text-left font-bold text-lg text-white">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-emerald flex-shrink-0" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-emerald/10 px-6 py-4"
                  >
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact support */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 glass rounded-2xl p-10 border border-emerald/10 text-center"
        >
          <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
          <p className="text-gray-400 mb-6">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-emerald hover:bg-emerald-light text-white font-bold rounded-lg transition-smooth"
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
