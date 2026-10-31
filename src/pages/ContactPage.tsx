import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Globe, MessageSquare } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    country: '',
    inquiryType: 'Admissions & Enrollment',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Live clocks for regional hubs
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatHubTime = (timeZone: string) => {
    try {
      return new Intl.DateTimeFormat('en-US', {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }).format(currentTime);
    } catch {
      return '--:--';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="w-full py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-12 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Admissions & Support</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Connect with FutureTech Business School
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Have questions regarding faculty tracks, international payment methods, or corporate cohort partnerships? Our global admissions team is here to assist.
          </p>
        </div>

        {/* Global Hubs & Live Clocks */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 text-left">
          <div className="p-4 rounded-xl bg-[#0c1220] border border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Nairobi (HQ)</span>
              <span className="text-[10px] text-blue-400 font-mono">EAT (UTC+3)</span>
            </div>
            <p className="text-lg font-mono font-bold text-white tabular-nums">
              {formatHubTime('Africa/Nairobi')}
            </p>
            <p className="text-[11px] text-slate-400 mt-1">Silicon Savannah Campus</p>
          </div>

          <div className="p-4 rounded-xl bg-[#0c1220] border border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>London</span>
              <span className="text-[10px] text-blue-400 font-mono">GMT (UTC+0)</span>
            </div>
            <p className="text-lg font-mono font-bold text-white tabular-nums">
              {formatHubTime('Europe/London')}
            </p>
            <p className="text-[11px] text-slate-400 mt-1">European Admissions</p>
          </div>

          <div className="p-4 rounded-xl bg-[#0c1220] border border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Singapore</span>
              <span className="text-[10px] text-blue-400 font-mono">SGT (UTC+8)</span>
            </div>
            <p className="text-lg font-mono font-bold text-white tabular-nums">
              {formatHubTime('Asia/Singapore')}
            </p>
            <p className="text-[11px] text-slate-400 mt-1">APAC Innovation Node</p>
          </div>

          <div className="p-4 rounded-xl bg-[#0c1220] border border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>San Francisco</span>
              <span className="text-[10px] text-blue-400 font-mono">PST (UTC-8)</span>
            </div>
            <p className="text-lg font-mono font-bold text-white tabular-nums">
              {formatHubTime('America/Los_Angeles')}
            </p>
            <p className="text-[11px] text-slate-400 mt-1">Venture Partner Desk</p>
          </div>
        </div>

        {/* 2-Column Form and Direct Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7 bg-[#0c1220] border border-slate-800 rounded-2xl p-6 sm:p-8 text-left">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Inquiry Received</h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. An admissions advisor from our global desk will respond to <strong className="text-white">{formData.email}</strong> within 12 business hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      country: '',
                      inquiryType: 'Admissions & Enrollment',
                      message: ''
                    });
                  }}
                  className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white">Send an Official Inquiry</h3>
                  <p className="text-xs text-slate-400">
                    Fill out the form below and specify your inquiry area.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Kenneth Otieno"
                      className="w-full px-3.5 py-2.5 bg-[#080d17] border border-slate-800 focus:border-blue-500 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. kenneth@example.com"
                      className="w-full px-3.5 py-2.5 bg-[#080d17] border border-slate-800 focus:border-blue-500 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Country / Region
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="e.g. Kenya, United Kingdom, USA"
                      className="w-full px-3.5 py-2.5 bg-[#080d17] border border-slate-800 focus:border-blue-500 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Inquiry Department
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#080d17] border border-slate-800 focus:border-blue-500 rounded-xl text-xs text-white focus:outline-none"
                    >
                      <option value="Admissions & Enrollment">Admissions & Student Enrollment</option>
                      <option value="Payment & Currency Support">Payment & Currency Support (M-Pesa / FX)</option>
                      <option value="Corporate / Team Training">Corporate & Team Enterprise Training</option>
                      <option value="Faculty & Mentorship Applications">Faculty & Mentorship Fellowship</option>
                      <option value="General Inquiries">General Platform Inquiries</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Message / Question *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you'd like to achieve or how we can assist your tech journey..."
                    className="w-full px-3.5 py-2.5 bg-[#080d17] border border-slate-800 focus:border-blue-500 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-900/30 disabled:opacity-60"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Transmitting Inquiry...' : 'Submit Message to Admissions'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Channels & Office Info */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            <div className="p-6 rounded-2xl bg-[#0c1220] border border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-white">Direct Communication Channels</h3>
              
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#080d17] border border-slate-800/80">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Admissions Desk</p>
                    <p className="text-slate-400">admissions@futuretech.africa</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Response within 12 business hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#080d17] border border-slate-800/80">
                  <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">WhatsApp Student Hotline</p>
                    <p className="text-slate-400">+254 700 000 120 (Mon - Sat, 8AM - 8PM EAT)</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Direct chat for enrollment & M-Pesa assistance</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#080d17] border border-slate-800/80">
                  <Globe className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Enterprise & Government Relations</p>
                    <p className="text-slate-400">enterprise@futuretech.africa</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Custom enterprise AI & team workforce upskilling</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0c1220] border border-slate-800 space-y-2 text-xs">
              <p className="font-semibold text-white flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>Office Hours & Global Scheduling</span>
              </p>
              <p className="text-slate-400 leading-relaxed">
                Live faculty office hours and code review sessions take place on Tuesdays, Thursdays, and Saturdays across staggered European, African, and Asian time slots.
              </p>
            </div>

            {/* Visual Academy Hotline Card */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-[#080d17] p-5 space-y-3">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                <img
                  src="/assets/aistudio/1793270297907_ae573dbd.jpg"
                  alt="FutureTech Support & Admissions"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[11px] font-bold text-white">24H Admissions & Student Support Desk</span>
                </div>
              </div>

              {/* Interlinks */}
              <div className="flex flex-wrap gap-2 pt-1 text-xs">
                <button
                  type="button"
                  onClick={() => window.location.hash = '#/pricing'}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-blue-300 font-medium transition-colors"
                >
                  Membership Pricing ➔
                </button>
                <button
                  type="button"
                  onClick={() => window.location.hash = '#/kenya-radar'}
                  className="px-3 py-1.5 rounded-lg bg-emerald-950/60 hover:bg-emerald-900 border border-emerald-500/30 text-emerald-300 font-medium transition-colors"
                >
                  50 Bob Blueprints ➔
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
