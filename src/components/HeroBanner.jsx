import React from 'react';
import { motion } from 'framer-motion';

export default function HeroBanner({ 
  subtitle, 
  title, 
  watermarkText,
  backgroundImage = "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
}) {
  return (
    <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-600/95 via-sky-500/90 to-cyan-400/80" />
      
      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white/90 text-sm md:text-base tracking-[0.3em] uppercase font-medium mb-4"
        >
          {subtitle}
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight"
        >
          {title}
        </motion.h1>
      </div>
      
      {/* Watermark Text */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.15, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden"
      >
        <span className="text-[12rem] md:text-[18rem] lg:text-[22rem] font-black text-white leading-none whitespace-nowrap -mb-12 block italic">
          {watermarkText}
        </span>
      </motion.div>
    </div>
  );
}