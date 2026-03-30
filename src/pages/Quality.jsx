import React from 'react';
import { motion } from 'framer-motion';
import HeroBanner from '@/components/HeroBanner';
import CTASection from '@/components/CTASection';
import { UserCheck, Database, HeartHandshake, BookOpen } from 'lucide-react';

export default function Quality() {
  const qualityFeatures = [
    {
      icon: UserCheck,
      title: 'Profile Matching',
      description: 'Once references of successful applicants have been confirmed, employees are then added to our customized database. Our unique database gives us the competitive advantage to efficiently pair you up with employees who have the specific skills which you are looking for.'
    },
    {
      icon: Database,
      title: 'Thorough Selection Process',
      description: 'To become a part of CareerBridge Employment Agency, all applicants must undergo general skill examinations, along with specific tests for certain positions such as number matching for order pickers. Before positioning any applicant with our clients, we ensure that they will provide quality service, are motivated to work hard and will represent us well.'
    },
    {
      icon: HeartHandshake,
      title: 'Ongoing Support',
      description: 'To ensure that CareerBridge Employment Agency meets your quality standards, our Resources Centre keeps an up-to-date library of health and safety materials. All of which are also available to our employees online for continuous learning.'
    }
  ];

  const trainingItems = [
    'WHMIS Overviews',
    'Safety Drills',
    'Written Procedures',
    'Skill Development',
    'Ongoing Training'
  ];

  return (
    <div>
      <HeroBanner
        subtitle="QUALITY"
        title="Thorough, Proven Selection Process"
        watermarkText="Quality"
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
      />

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Our Resources Centre keeps an up-to-date library of health and safety materials.
              </h2>
              
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-sky-600 rounded-full mb-8" />
              
              <p className="text-slate-600 leading-relaxed text-lg">
                Long-term client relationships depend on the quality of the people placed with 
                your company and service you receive. At Stafflinx Employment Agency, we know 
                that getting it right from the very start is critical to ensure ongoing satisfaction. 
                Our client profile matching system and systematic interview methods ensure that our 
                quality standards are exceptional.
              </p>
            </motion.div>

            {/* Training Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-sky-500 rounded-2xl flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Training Resources</h3>
              </div>
              
              <div className="space-y-4">
                {trainingItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    <span className="text-slate-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Features */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-cyan-600 font-medium tracking-wider uppercase text-sm">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-4">
              Quality Assurance at Every Step
            </h2>
          </motion.div>

          <div className="space-y-8">
            {qualityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 md:p-10 shadow-lg shadow-slate-200/50 border border-slate-100"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-sky-600 rounded-2xl flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
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