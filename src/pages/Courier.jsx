import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Truck, Package, MapPin, Clock, Shield, CheckCircle, Plus, Trash2, Send } from 'lucide-react';


const features = [
  { icon: Clock, title: 'Same-Day Delivery', description: 'Fast and reliable same-day courier service available across the region.' },
  { icon: Shield, title: 'Safe & Insured', description: 'All packages are handled with care and fully insured during transit.' },
  { icon: Truck, title: 'Van Delivery', description: 'Our cargo van handles small to medium-sized parcels — perfect for fast, same-day local deliveries.' },
  { icon: MapPin, title: 'Real-Time Tracking', description: 'Know exactly where your shipment is at every step of the journey.' },
];

const emptyItem = () => ({ length: '', width: '', height: '', weight: '' });

export default function Courier() {
  const [form, setForm] = useState({
    pickupStreet: '', pickupCity: '', pickupProvince: '', pickupPostal: '',
    dropoffStreet: '', dropoffCity: '', dropoffProvince: '', dropoffPostal: '',
    name: '', email: '', phone: '',
    items: [emptyItem()],
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const hrmAreas = [
    'Halifax', 'Dartmouth', 'Bedford', 'Sackville', 'Fall River',
    'Cole Harbour', 'Eastern Passage', 'Timberlea', 'Tantallon', 'Hubbards',
    'Musquodoboit Harbour', 'Enfield', 'Other (HRM)'
  ];

  const handleChange = (field, value) => setForm(prev => ({ ...prev, [field]: value }));

  const handleItemChange = (idx, field, value) => {
    setForm(prev => {
      const items = [...prev.items];
      items[idx] = { ...items[idx], [field]: value };
      return { ...prev, items };
    });
  };

  const addItem = () => setForm(prev => ({ ...prev, items: [...prev.items, emptyItem()] }));
  const removeItem = (idx) => setForm(prev => ({ ...prev, items: prev.items.filter((_, i) => i !== idx) }));

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Serialize dynamic items array into a readable string for Netlify
    const itemsSummary = form.items
      .map((item, i) =>
        `Item ${i + 1}: ${item.length || 0}"L x ${item.width || 0}"W x ${item.height || 0}"H, ${item.weight || 0}kg`
      )
      .join(' | ');

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'courier-booking',
        name: form.name,
        email: form.email,
        phone: form.phone,
        pickupStreet: form.pickupStreet,
        pickupCity: form.pickupCity,
        pickupPostal: form.pickupPostal,
        dropoffStreet: form.dropoffStreet,
        dropoffCity: form.dropoffCity,
        dropoffPostal: form.dropoffPostal,
        items: itemsSummary,
      }),
    })
      .then(() => {
        setSubmitted(true);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-sky-900 via-slate-800 to-slate-900 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/80 via-slate-800/80 to-slate-900/90" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center max-w-4xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-5 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-300 font-semibold text-sm mb-6"
            >
              🚚 Fast & Reliable Courier Services
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
            >
              Your Cargo,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">
                Our Responsibility
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300 mb-10 leading-relaxed"
            >
              Stafflinx Courier delivers fast, safe, and trackable shipments — 
              from local parcels to large freight, we get it there on time.
            </motion.p>

            <motion.a
              href="#booking"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-600 hover:to-sky-700 text-white font-bold px-10 py-7 text-lg rounded-full shadow-xl shadow-cyan-900/50">
                Get a Quote Now
                <Truck className="ml-2 w-5 h-5" />
              </Button>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl font-bold text-slate-900">Why Choose Stafflinx Courier?</h2>
            <p className="text-slate-600 mt-3 text-lg">Reliable delivery solutions for businesses and individuals</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-sky-600 rounded-2xl flex items-center justify-center mb-5">
                  <f.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Peggy's Cove Local Section */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="relative h-72 lg:h-auto">
            <img
              src="https://media.base44.com/images/public/694ab1e404355904ea7c1efc/a6327076f_20250528_1355031.jpg"
              alt="Peggy's Cove Lighthouse, Nova Scotia"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="bg-slate-900 px-10 py-16 flex flex-col justify-center">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-4">🦞 Proudly Local</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
              Rooted in Nova Scotia,<br />
              <span className="text-cyan-400">Delivering for HRM</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              From the streets of Halifax to Dartmouth, Bedford to Cole Harbour — Stafflinx Courier is your local same-day delivery partner in the Halifax Regional Municipality.
            </p>
            <div className="flex items-center gap-3 bg-cyan-900/40 border border-cyan-700/40 rounded-xl px-5 py-3">
              <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <p className="text-cyan-200 text-sm">Serving the HRM area · More routes available on special request</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-cyan-600 font-semibold uppercase text-sm tracking-wider">Book Now</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2">Make Your Booking</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-sky-600 rounded-full mx-auto mt-4" />
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-emerald-50 border border-emerald-200 rounded-2xl p-14 text-center"
            >
              <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-emerald-800 mb-3">Booking Request Received!</h3>
              <p className="text-emerald-700 text-lg">Our team will contact you shortly to confirm your courier booking.</p>
            </motion.div>
          ) : (
            <form
              name="courier-booking"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-10"
            >
              {/* Required hidden input for Netlify */}
              <input type="hidden" name="form-name" value="courier-booking" />
              {/* Hidden fields Netlify needs to know about at deploy time */}
              <input type="hidden" name="pickupStreet" />
              <input type="hidden" name="pickupCity" />
              <input type="hidden" name="pickupPostal" />
              <input type="hidden" name="dropoffStreet" />
              <input type="hidden" name="dropoffCity" />
              <input type="hidden" name="dropoffPostal" />
              <input type="hidden" name="name" />
              <input type="hidden" name="email" />
              <input type="hidden" name="phone" />
              <input type="hidden" name="items" />

              {/* HRM Notice */}
              <div className="flex items-start gap-3 bg-cyan-50 border border-cyan-200 rounded-xl px-5 py-4">
                <MapPin className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-cyan-800 text-sm">Local HRM Deliveries — Nova Scotia</p>
                  <p className="text-cyan-700 text-sm mt-0.5">We currently serve the Halifax Regional Municipality (HRM) area. <span className="font-medium">More routes available on special request — contact us!</span></p>
                </div>
              </div>

              {/* Pickup Address */}
              <div className="bg-slate-50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-sky-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Pick-Up Address</h3>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-3 space-y-2">
                    <Label>Street Address</Label>
                    <Input value={form.pickupStreet} onChange={e => handleChange('pickupStreet', e.target.value)}
                      placeholder="123 Barrington Street" className="h-12 rounded-xl" required />
                  </div>
                  <div className="space-y-2">
                    <Label>Area / Neighbourhood</Label>
                    <select value={form.pickupCity} onChange={e => handleChange('pickupCity', e.target.value)}
                      className="w-full h-12 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 focus:outline-none focus:border-cyan-500" required>
                      <option value="">Select HRM Area</option>
                      {hrmAreas.map(a => <option key={a} value={a}>{a}</option>)}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label>Postal Code</Label>
                    <Input value={form.pickupPostal} onChange={e => handleChange('pickupPostal', e.target.value)}
                      placeholder="B3H 1A1" className="h-12 rounded-xl" />
                  </div>
                </div>
              </div>

              {/* Dropoff Address */}
              <div className="bg-slate-50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-cyan-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Drop-Off Address</h3>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-3 space-y-2">
                    <Label>Street Address</Label>
                    <Input value={form.dropoffStreet} onChange={e => handleChange('dropoffStreet', e.target.value)}
                      placeholder="456 Spring Garden Road" className="h-12 rounded-xl" required />
                  </div>
                  <div className="space-y-2">
                    <Label>Area / Neighbourhood</Label>
                    <select value={form.dropoffCity} onChange={e => handleChange('dropoffCity', e.target.value)}
                      className="w-full h-12 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 focus:outline-none focus:border-cyan-500" required>
                      <option value="">Select HRM Area</option>
                      {hrmAreas.map(a => <option key={a} value={a}>{a}</option>)}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label>Postal Code</Label>
                    <Input value={form.dropoffPostal} onChange={e => handleChange('dropoffPostal', e.target.value)}
                      placeholder="B3J 1A1" className="h-12 rounded-xl" />
                  </div>
                </div>
              </div>

              {/* Package Dimensions */}
              <div className="bg-slate-50 rounded-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-sky-600 rounded-xl flex items-center justify-center">
                      <Package className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Package / Freight Details</h3>
                  </div>
                  <Button type="button" onClick={addItem} variant="outline"
                    className="border-cyan-500 text-cyan-600 hover:bg-cyan-50 rounded-xl text-sm">
                    <Plus className="w-4 h-4 mr-1" /> Add Item
                  </Button>
                </div>

                <div className="space-y-4">
                  {form.items.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-5 border border-slate-200">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-semibold text-slate-700 text-sm">Item {idx + 1}</span>
                        {form.items.length > 1 && (
                          <button type="button" onClick={() => removeItem(idx)}
                            className="text-red-400 hover:text-red-600 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <div className="space-y-2">
                          <Label className="text-xs">Length (in)</Label>
                          <Input value={item.length} onChange={e => handleItemChange(idx, 'length', e.target.value)}
                            placeholder="0" type="number" min="0" className="h-11 rounded-xl" />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-xs">Width (in)</Label>
                          <Input value={item.width} onChange={e => handleItemChange(idx, 'width', e.target.value)}
                            placeholder="0" type="number" min="0" className="h-11 rounded-xl" />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-xs">Height (in)</Label>
                          <Input value={item.height} onChange={e => handleItemChange(idx, 'height', e.target.value)}
                            placeholder="0" type="number" min="0" className="h-11 rounded-xl" />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-xs">Weight (kg)</Label>
                          <Input value={item.weight} onChange={e => handleItemChange(idx, 'weight', e.target.value)}
                            placeholder="0" type="number" min="0" className="h-11 rounded-xl" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Your Contact Information</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Full Name</Label>
                    <Input value={form.name} onChange={e => handleChange('name', e.target.value)}
                      placeholder="John Doe" className="h-12 rounded-xl" required />
                  </div>
                  <div className="space-y-2">
                    <Label>Email Address</Label>
                    <Input value={form.email} onChange={e => handleChange('email', e.target.value)}
                      type="email" placeholder="john@example.com" className="h-12 rounded-xl" required />
                  </div>
                  <div className="space-y-2">
                    <Label>Phone Number</Label>
                    <Input value={form.phone} onChange={e => handleChange('phone', e.target.value)}
                      type="tel" placeholder="(438) 555-1234" className="h-12 rounded-xl" />
                  </div>
                </div>
              </div>

              {error && (
                <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
              )}

              <Button type="submit" disabled={loading}
                className="w-full h-14 bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-600 hover:to-sky-700 text-white font-bold text-lg rounded-xl shadow-lg shadow-cyan-200/50">
                {loading ? (
                  <span className="flex items-center gap-2">
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Get Your Quote / Submit Booking
                  </span>
                )}
              </Button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
