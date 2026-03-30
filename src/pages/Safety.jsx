import React from 'react';
import { motion } from 'framer-motion';
import HeroBanner from '@/components/HeroBanner';
import CTASection from '@/components/CTASection';
import { ShieldCheck, GraduationCap, RefreshCcw, AlertTriangle, HardHat, Siren } from 'lucide-react';

export default function Safety() {
  const safetyLevels = [
    {
      icon: GraduationCap,
      title: 'Health and Safety Education',
      description: 'Comprehensive training programs that cover all fundamental workplace safety protocols, hazard identification, and emergency procedures to ensure every employee understands their role in maintaining a safe work environment.',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: HardHat,
      title: 'Training and Development',
      description: 'Hands-on practical training sessions that equip our employees with the skills and knowledge needed to perform their duties safely. This includes equipment operation, proper lifting techniques, and industry-specific safety practices.',
      color: 'from-cyan-500 to-sky-600'
    },
    {
      icon: RefreshCcw,
      title: 'Ongoing Support',
      description: 'Continuous reinforcement of safety practices through regular updates, refresher courses, and on-site support. We ensure our employees stay current with the latest safety standards and best practices.',
      color: 'from-violet-500 to-purple-600'
    }
  ];

  const safetyStats = [
    { icon: ShieldCheck, label: 'Safety Certified', value: '100%' },
    { icon: AlertTriangle, label: 'Incident Rate', value: '<1%' },
    { icon: Siren, label: 'Emergency Ready', value: '24/7' },
  ];

  return (
    <div>
      <HeroBanner
        subtitle="SAFETY"
        title="Your safety is our top priority"
        watermarkText="Safety"
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
      />

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-800 mb-6"
            >
              Our Employees are well trained in the area of Health and Safety.
            </motion.h2>
            
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-sky-600 rounded-full mx-auto mb-8" />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 leading-relaxed text-lg"
            >
              A large part of Stafflinx Employment Agency's success is because our employees 
              are well trained in the areas of health and safety within the workplace. Our successful 
              3-tier health and safety program ensures our employees are well educated and work 
              safely in the workplace.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Safety Stats */}
      <section className="py-16 bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-400">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {safetyStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Tier Safety Program */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-cyan-600 font-medium tracking-wider uppercase text-sm">Our Program</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-4">
              3-Tier Health & Safety Program
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {safetyLevels.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Connection Line (hidden on last item) */}
                {index < safetyLevels.length - 1 && (
                  <div className="hidden md:block absolute top-14 left-full w-full h-0.5 bg-slate-200 -translate-x-1/2 z-0" />
                )}
                
                <div className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 relative z-10">
                  {/* Level Number */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                  
                  <div className={`w-14 h-14 bg-gradient-to-br ${level.color} rounded-xl flex items-center justify-center mb-6`}>
                    <level.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{level.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{level.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-400 rounded-full blur-3xl" />
            </div>
            
            <div className="relative z-10">
              <ShieldCheck className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Our Commitment to Safety
              </h3>
              <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto">
                Safety is not just a policy at Stafflinx—it's a core value. We are dedicated 
                to ensuring that every employee who represents us is equipped with the knowledge 
                and skills to work safely. Your safety and the safety of our employees is our 
                top priority.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}