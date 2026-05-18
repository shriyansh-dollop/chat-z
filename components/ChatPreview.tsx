'use client';

import { motion } from 'framer-motion';
import { SendHorizontal, SmilePlus, Paperclip, Phone, Video } from 'lucide-react';
import { useState } from 'react';

export default function ChatPreview() {
  const [messages, setMessages] = useState([
    { id: 1, user: 'Alice', text: 'Hey! How are you doing? 👋', timestamp: '2:34 PM', isOwn: false },
    { id: 2, user: 'You', text: 'Great! Working on something interesting', timestamp: '2:35 PM', isOwn: true },
    { id: 3, user: 'Alice', text: 'Tell me more! I want to hear about it', timestamp: '2:35 PM', isOwn: false },
  ]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
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
            <span className="gradient-text">Modern Chat Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Beautifully designed interface for seamless conversations
          </p>
        </motion.div>

        {/* Chat preview grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Desktop Preview */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-2xl overflow-hidden border border-emerald/10 flex flex-col h-96"
          >
            {/* Chat header */}
            <div className="border-b border-emerald/10 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald to-neon-cyan" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald border-2 border-dark-card" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Alice Chen</p>
                  <p className="text-xs text-gray-500">Active now</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 hover:bg-emerald/10 rounded-lg transition-smooth"
                >
                  <Phone className="w-4 h-4 text-gray-400" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 hover:bg-emerald/10 rounded-lg transition-smooth"
                >
                  <Video className="w-4 h-4 text-gray-400" />
                </motion.button>
              </div>
            </div>

            {/* Messages */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex-1 overflow-y-auto p-4 space-y-3"
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${
                      msg.isOwn
                        ? 'bg-gradient-to-r from-emerald to-emerald-light text-white'
                        : 'bg-glass text-gray-200'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <p className={`text-xs mt-1 ${msg.isOwn ? 'text-emerald/80' : 'text-gray-500'}`}>
                      {msg.timestamp}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex gap-2 items-center"
              >
                <div className="w-8 h-8 rounded-full bg-glass flex items-center justify-center">
                  <span className="text-xs font-medium text-emerald">A</span>
                </div>
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
                      className="w-2 h-2 rounded-full bg-neon-cyan"
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Input area */}
            <div className="border-t border-emerald/10 p-4">
              <div className="flex items-center gap-3 glass rounded-xl px-4 py-3">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 bg-transparent outline-none text-sm placeholder-gray-500"
                  defaultValue=""
                  readOnly
                />
                <Paperclip className="w-4 h-4 text-gray-500 cursor-pointer hover:text-emerald transition-colors" />
                <SmilePlus className="w-4 h-4 text-gray-500 cursor-pointer hover:text-emerald transition-colors" />
                <SendHorizontal className="w-4 h-4 text-emerald cursor-pointer hover:text-emerald-light transition-colors" />
              </div>
            </div>
          </motion.div>

          {/* Mobile Preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-xs"
          >
            {/* Phone frame */}
            <div className="aspect-video bg-gradient-to-b from-gray-900 to-black rounded-3xl border-8 border-gray-800 shadow-2xl overflow-hidden">
              {/* Phone screen */}
              <div className="w-full h-full bg-dark-bg flex flex-col">
                {/* Status bar */}
                <div className="h-6 bg-dark-card flex items-center justify-between px-4 text-xs">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-gray-500" />
                    <div className="w-1 h-1 rounded-full bg-gray-500" />
                    <div className="w-1 h-1 rounded-full bg-gray-500" />
                  </div>
                </div>

                {/* Chat content */}
                <div className="flex-1 flex flex-col p-3 justify-between">
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-start">
                      <div className="bg-glass px-3 py-1 rounded-xl">Hello!</div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-emerald px-3 py-1 rounded-xl text-white">Hi there! 👋</div>
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="Message"
                    className="bg-glass rounded-full px-3 py-1 text-xs placeholder-gray-500 outline-none w-full"
                    readOnly
                  />
                </div>
              </div>

              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-black rounded-b-2xl" />
            </div>
          </motion.div>
        </div>

        {/* Message reactions feature */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 glass rounded-2xl p-10 border border-emerald/10"
        >
          <h3 className="text-2xl font-bold mb-6">Interactive Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '👍', title: 'Message Reactions', desc: 'React with emojis instantly' },
              { icon: '✏️', title: 'Edit Messages', desc: 'Modify messages for 15 minutes' },
              { icon: '🔗', title: 'Rich Previews', desc: 'Auto-fetch link previews' },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="text-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="font-bold text-white mb-2">{item.title}</p>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
