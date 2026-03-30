import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { 
  Users, 
  Search, 
  Clock, 
  Shield, 
  ArrowRight,
  CheckCircle2,
  Building2,
  Briefcase
} from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';
import CTASection from '@/components/CTASection';

export default function Home() {
  const stats = [
    { number: '24/7', label: 'Service Available' },
    { number: '100%', label: 'Commitment' },
  ];

  const features = [
    {
      icon: Building2,
      title: 'Industry Expertise',
      description: 'We specialize in multiple sectors including manufacturing, logistics, food services, and administrative roles.'
    },
    {
      icon: Users,
      title: 'Talent Pool',
      description: 'Access our extensive database of pre-screened, qualified candidates ready to meet your staffing needs.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Every candidate undergoes thorough background checks and skill assessments before placement.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-600/95 via-sky-500/90 to-cyan-400/80" />
        
        {/* Animated Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -top-40 -right-40 w-96 h-96 border border-white/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 -left-20 w-72 h-72 border border-white/10 rounded-full"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
                  Your Trusted Employment Partner
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              >
                The Easiest Way to Get{' '}
                <span className="relative">
                  Hired
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 10C50 2 150 2 198 10" stroke="rgba(255,255,255,0.4)" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-white/80 mb-8 max-w-xl"
              >
                We are absolutely committed to finding and placing candidates into the best 
                possible roles with companies based on their talent and potential.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to={createPageUrl("Contact")}>
                  <Button size="lg" className="bg-white text-sky-600 hover:bg-slate-100 font-semibold px-8 py-6 text-lg rounded-xl shadow-lg">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to={createPageUrl("Services")}>
                  <Button size="lg" variant="outline" className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg rounded-xl">
                    Our Services
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                >
                  <div className="text-4xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Watermark */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-0 left-0 pointer-events-none overflow-hidden w-full"
        >
          <span className="text-[14rem] md:text-[20rem] font-black text-white italic leading-none -mb-20 block">
            Hired
          </span>
        </motion.div>
      </section>

      {/* Two Column Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Job Hunting */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-sky-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Search className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Job Hunting?</h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">
                Stafflinx is a full-service employment agency committed to your success. 
                We provide full-time, temporary, and temp-to-hire positions to skilled job 
                seekers across multiple industries. Let us help you find your perfect role.
              </p>
            </motion.div>

            {/* Talent Searching */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-sky-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Talent Searching?</h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">
                We will find you the people you need as quickly as possible. That is our 
                guarantee to deliver peace of mind! We recruit new talent daily and continue 
                to grow at a rapid pace to meet your staffing demands.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 24 Hours Service Banner */}
      <section className="py-16 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-400 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-sky-500 rounded-2xl flex items-center justify-center">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-black text-white">24</div>
                <div className="text-cyan-400 font-medium">Hours Service</div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg max-w-md text-center md:text-left"
            >
              We're available around the clock to serve your staffing needs. 
              Our dedicated team is ready to help you find the perfect match.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-cyan-600 font-medium tracking-wider uppercase text-sm">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-4">
              Your Success Is Our Priority
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}