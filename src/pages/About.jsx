import React from 'react';
import { motion } from 'framer-motion';
import HeroBanner from '@/components/HeroBanner';
import CTASection from '@/components/CTASection';
import { Check, Users, Target, Award } from 'lucide-react';

export default function About() {
  const jobCategories = [
    'Shipping/Receiving',
    'Order Picking',
    'Manufacturing',
    'Forklift Operator',
    'Skilled Labour',
    'Food & Beverages',
    'Sorting',
    'Packaging',
    'Inventory Taking',
    'Press Operating',
    'Light Assembly Work',
    'Welders',
    'Drivers (AZ, DZ etc)',
    'Clerical Help'
  ];

  const values = [
    {
      icon: Users,
      title: 'People First',
      description: 'We believe in building genuine relationships with both our candidates and client companies.'
    },
    {
      icon: Target,
      title: 'Precision Matching',
      description: 'Our team is committed to properly train employees to fit your company\'s work ethics and culture.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Each employee sent has been carefully screened and selected based on your specific requirements.'
    }
  ];

  return (
    <div>
      <HeroBanner
        subtitle="ABOUT US"
        title="No job is too small or too large"
        watermarkText="About"
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80"
      />

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                We Create Opportunities for Candidates & Businesses
              </h2>
              
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-sky-600 rounded-full mb-8" />
              
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                At Stafflinx, our team is committed to properly train employees. We can cater 
                to your seasonal, ongoing, or contract basis in a variety of employment categories.
              </p>
              
              <p className="text-slate-600 leading-relaxed text-lg mb-8">
                These resourceful employees are handpicked to fit your company's work ethics and 
                culture. You can be certain that each employee sent has been carefully screened 
                and selected based on your requirements and briefed before arriving on the job.
              </p>

              {/* Values */}
              <div className="space-y-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">{value.title}</h4>
                      <p className="text-slate-600 text-sm">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Resources Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-slate-50 rounded-3xl p-8 md:p-10 sticky top-28">
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  Resources Available
                </h3>
                <p className="text-slate-600 mb-8">
                  Stafflinx Employment Agency is proud of its growing number of skilled workers 
                  who can readily adapt to a wide variety of employment categories. No job is too 
                  small or too large!
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {jobCategories.map((category, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                      className="flex items-center gap-2"
                    >
                      <Check className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{category}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: 'Fresh', label: 'New Start' },
              { number: '100%', label: 'Dedication' },
              { number: 'Growing', label: 'Partner Network' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}