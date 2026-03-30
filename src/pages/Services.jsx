import React from 'react';
import { motion } from 'framer-motion';
import HeroBanner from '@/components/HeroBanner';
import CTASection from '@/components/CTASection';
import ServiceCard from '@/components/ServiceCard';
import { Clock, Shield, Headphones, DollarSign } from 'lucide-react';

export default function Services() {
  const serviceCategories = [
    {
      title: 'Staffing Services',
      items: ['Recruiting', 'Training', 'Full Time Placement', 'Temp-to-Hire', 'Contract Staffing']
    },
    {
      title: 'Administrative Support',
      items: ['Payroll and Administration', 'Vacation Pay', 'Severance', 'Sick Leave', 'Benefits Management']
    },
    {
      title: 'HR Services',
      items: ['Labour & Human Relations', 'Termination Support', 'Consulting', 'WSIB Coverage', 'Compliance']
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Quick Response',
      description: 'We find you the people you need as fast as possible. That is our guarantee!'
    },
    {
      icon: DollarSign,
      title: 'Cost Effective',
      description: 'Save on recruiting, training, and payroll arrangements with our comprehensive services.'
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'We handle all administration and costs associated with staffing, reducing your liability.'
    },
    {
      icon: Headphones,
      title: '24/7 Availability',
      description: 'Reliable and quality help is only a phone call away, around the clock.'
    }
  ];

  return (
    <div>
      <HeroBanner
        subtitle="SERVICES"
        title="We supply you with peace of mind"
        watermarkText="Services"
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
      />

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-800 mb-6"
            >
              Our Services
            </motion.h2>
            
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-sky-600 rounded-full mb-8" />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 leading-relaxed text-lg mb-6"
            >
              At Stafflinx Employment Agency, we strive to build long-lasting relationships. 
              We understand the importance of trust. Tapping into our resources goes beyond just 
              finding the right employee to complete the job. Our services enable you to effectively 
              save both time and money.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 leading-relaxed text-lg"
            >
              When you choose to collaborate with Stafflinx as your staffing partner, we manage 
              all the administration and costs you would normally associate with staffing. This gives 
              you the advantage to save valuable funds spent on recruiting, training, and payroll 
              arrangements. No extra paperwork, no staffing issues and no headaches!
            </motion.p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-cyan-600 font-medium tracking-wider uppercase text-sm">Benefits</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-4">
              Why Partner With Us
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-200/50">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-cyan-600 font-medium tracking-wider uppercase text-sm">Full Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-4">
              Comprehensive Staffing Solutions
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <ServiceCard
                key={index}
                title={category.title}
                items={category.items}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}