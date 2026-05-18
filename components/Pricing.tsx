'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for individuals and small teams',
      features: [
        'Up to 5 group chats',
        'Basic encryption',
        'File sharing (up to 100MB)',
        'Mobile apps',
        'Community support',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '$9.99',
      period: '/month',
      description: 'For growing teams and professionals',
      features: [
        'Unlimited group chats',
        'Military-grade encryption',
        'Advanced file sharing (5GB)',
        'Voice & video calling',
        'Priority support',
        'Custom workspace',
        'Analytics dashboard',
        'Team management',
      ],
      cta: 'Start Free Trial',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Everything in Pro',
        'Dedicated support',
        'Custom integrations',
        'Admin controls',
        'Compliance features',
        'Data residency',
        'SLA guarantee',
        'Custom contracts',
      ],
      cta: 'Contact Sales',
      highlighted: false,
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="pricing" className="relative py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl bg-emerald"
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
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Choose the perfect plan for your needs. Always flexible and scalable.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`relative rounded-2xl p-8 transition-smooth ${
                plan.highlighted
                  ? 'glass-light border-2 border-emerald md:scale-105'
                  : 'glass border border-emerald/10'
              }`}
            >
              {/* Popular badge */}
              {plan.highlighted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-emerald to-neon-green text-dark-bg text-sm font-bold"
                >
                  Most Popular
                </motion.div>
              )}

              {/* Plan name and price */}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-gray-400 text-sm">{plan.period}</span>}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-xl font-bold transition-smooth flex items-center justify-center gap-2 mb-8 ${
                  plan.highlighted
                    ? 'bg-emerald text-white hover:bg-emerald-light'
                    : 'border-2 border-emerald text-emerald hover:bg-emerald hover:text-white'
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              {/* Features */}
              <div className="space-y-4">
                {plan.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <Check className="w-5 h-5 text-emerald flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ-like section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-2xl p-8 border border-emerald/10 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
          <p className="text-gray-400 mb-6">
            Have questions about our pricing? We have answers.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-emerald/20 hover:bg-emerald/30 text-emerald border border-emerald/50 rounded-lg transition-smooth font-medium"
          >
            View All FAQs
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
