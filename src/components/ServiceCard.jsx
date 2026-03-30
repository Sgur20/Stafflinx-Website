import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function ServiceCard({ title, items, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100"
    >
      <h3 className="text-xl font-bold text-slate-800 mb-6 pb-4 border-b border-slate-100">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-cyan-600" />
            </div>
            <span className="text-slate-600">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}