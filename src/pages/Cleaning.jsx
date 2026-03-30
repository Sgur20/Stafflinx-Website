import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Sparkles, Home, Building, CheckCircle, Phone, Mail, Clock } from 'lucide-react';

const cleaningServices = [
  {
    icon: Home,
    title: 'Residential Cleaning',
    description: 'Keep your home spotless with our comprehensive residential cleaning services.',
    features: [
      'Kitchen & bathroom sanitization',
      'Floor cleaning & vacuuming',
      'Dusting & surface cleaning',
      'Bedroom & living area tidying'
    ]
  },
  {
    icon: Building,
    title: 'Apartment Cleaning',
    description: 'Specialized cleaning services designed for apartment living.',
    features: [
      'Compact space optimization',
      'Appliance cleaning',
      'Window & mirror cleaning',
      'Trash removal & organization'
    ]
  },
  {
    icon: Sparkles,
    title: 'Deep Cleaning',
    description: 'Intensive deep cleaning service that tackles hidden dirt and grime.',
    features: [
      'Behind & under furniture cleaning',
      'Grout & tile scrubbing',
      'Vent & baseboard cleaning',
      'Cabinet & drawer organization'
    ]
  }
];

const benefits = [
  'Professional & experienced team',
  'Eco-friendly cleaning products',
  'Flexible scheduling options',
  'Satisfaction guaranteed',
  'Competitive pricing',
  'Insured & bonded'
];

export default function Cleaning() {
  return (
    <div className="bg-white">
      {/* Hero Section - Different Style */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-5 py-2 bg-emerald-100 rounded-full text-emerald-700 font-semibold text-sm mb-6">
                ✨ Professional Cleaning Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 leading-tight"
            >
              Spotless Spaces,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Happy Faces
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-600 mb-10 leading-relaxed"
            >
              Experience the difference with Stafflinx professional cleaning services.
              <br />
              We transform your space into a pristine sanctuary.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link to={createPageUrl("Contact")}>
                <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold px-10 py-7 text-lg rounded-full shadow-xl shadow-emerald-200">
                  Book Your Free Consultation
                  <Sparkles className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Your Trusted Cleaning Partner
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                At Stafflinx, we provide comprehensive cleaning services tailored to meet your 
                specific needs. Our trained professionals deliver spotless results every time, 
                ensuring your spaces are clean, healthy, and welcoming.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Whether you need regular maintenance or a one-time deep clean, our team is 
                equipped with the skills and tools to exceed your expectations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-emerald-50 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-700 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Cleaning Services
            </h2>
            <p className="text-xl text-slate-600">
              Comprehensive solutions for every cleaning need
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {cleaningServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-emerald-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Different Style */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for a Spotless Space?
            </h2>
            <p className="text-xl text-emerald-50 mb-10 max-w-2xl mx-auto">
              Contact us today to schedule your cleaning service and experience the Stafflinx difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to={createPageUrl("Contact")}>
                <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 font-bold px-10 py-7 text-lg rounded-full shadow-xl">
                  Get Free Quote
                  <Sparkles className="ml-2 w-5 h-5" />
                </Button>
              </Link>

              <a href="tel:+14389289996" className="flex items-center gap-3 text-white hover:text-emerald-100 transition-colors">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-emerald-100">Call us now</div>
                  <div className="text-lg font-bold">(438) 928-9996</div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-14 h-14 bg-emerald-600 rounded-full flex items-center justify-center">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-slate-400 text-sm mb-1">Call Us</div>
                <a href="tel:+14389289996" className="text-white font-semibold hover:text-emerald-400 transition-colors">
                  (438) 928-9996
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-14 h-14 bg-emerald-600 rounded-full flex items-center justify-center">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-slate-400 text-sm mb-1">Email Us</div>
                <a href="mailto:info@stafflinx.ca" className="text-white font-semibold hover:text-emerald-400 transition-colors">
                  info@stafflinx.ca
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-14 h-14 bg-emerald-600 rounded-full flex items-center justify-center">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-slate-400 text-sm mb-1">Available</div>
                <div className="text-white font-semibold">24/7 Service</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}