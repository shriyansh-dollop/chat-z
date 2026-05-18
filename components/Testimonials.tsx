'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Product Manager',
      company: 'TechCorp',
      text: 'ChatZ revolutionized how our team communicates. The encryption gives us peace of mind, and the speed is incredible.',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      name: 'James Chen',
      role: 'CTO',
      company: 'StartupX',
      text: 'Finally, a chat app that takes privacy seriously without sacrificing performance. Best decision we made for our team.',
      rating: 5,
      avatar: '👨‍💻',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Creative Director',
      company: 'DesignStudio',
      text: 'The UI is absolutely stunning, and the user experience is seamless. Our team loves it.',
      rating: 5,
      avatar: '👩‍🎨',
    },
    {
      name: 'Michael Grant',
      role: 'CEO',
      company: 'FinanceHub',
      text: 'Security and reliability are everything to us. ChatZ delivers on both fronts with flying colors.',
      rating: 5,
      avatar: '👨‍💼',
    },
  ];

  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay, testimonials.length]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoPlay(false);
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved by <span className="gradient-text">thousands of users</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            See what people are saying about ChatZ
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-2xl p-10 border border-emerald/10 min-h-96"
            >
              {/* Content */}
              <div className="flex flex-col md:flex-row items-start gap-8">
                {/* Avatar and info */}
                <div className="flex flex-col items-center gap-4 min-w-max">
                  <div className="text-6xl">{testimonials[current].avatar}</div>
                  <div className="text-center">
                    <h3 className="font-bold text-white mb-1">{testimonials[current].name}</h3>
                    <p className="text-sm text-emerald mb-2">{testimonials[current].role}</p>
                    <p className="text-xs text-gray-500">{testimonials[current].company}</p>
                  </div>
                </div>

                {/* Testimonial content */}
                <div className="flex-1">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-emerald text-emerald"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg text-gray-300 mb-6 italic">
                    "{testimonials[current].text}"
                  </blockquote>

                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="inline-block px-4 py-2 rounded-full bg-emerald/10 border border-emerald/20"
                  >
                    <p className="text-sm text-emerald font-medium">Verified User</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => {
                    setCurrent(i);
                    setAutoPlay(false);
                  }}
                  animate={{
                    width: current === i ? 32 : 8,
                    backgroundColor: current === i ? '#036A38' : '#666',
                  }}
                  className="h-2 rounded-full transition-all"
                />
              ))}
            </div>

            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={prev}
                className="p-3 rounded-full glass border border-emerald/20 hover:border-emerald/50 transition-smooth"
              >
                <ChevronLeft className="w-5 h-5 text-emerald" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={next}
                className="p-3 rounded-full glass border border-emerald/20 hover:border-emerald/50 transition-smooth"
              >
                <ChevronRight className="w-5 h-5 text-emerald" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          {[
            { value: '50K+', label: 'Active Users' },
            { value: '4.9★', label: 'Average Rating' },
            { value: '24/7', label: 'Support' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="glass rounded-xl p-6 border border-emerald/10 text-center"
            >
              <p className="text-3xl font-bold gradient-text mb-2">{stat.value}</p>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
