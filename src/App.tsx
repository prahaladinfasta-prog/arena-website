import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import StatCard from './components/StatCard';
import ServiceCard from './components/ServiceCard';
import FounderSection from './components/FounderSection';
import TeamSection from './components/TeamSection';
import ContactModal from './components/ContactModal';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const stats = [
    { number: 7, label: "Years Building Trusted Pet Care Solutions", suffix: "+", icon: "🏆", display: "7+" },
    { number: 5, label: "Major Cities with Active Operations", suffix: "", icon: "📍", display: "5" },
    { number: 10000, label: "Pet Parents Served", suffix: "+", icon: "🐾", display: "10,000+" },
    { number: 6000, label: "Service Providers Networked", suffix: "+", icon: "🤝", display: "6,000+" },
    { number: 86, label: "Vet Clinics & Breeders Partnered", suffix: "", icon: "🏥", display: "86" },
    { number: 11, label: "Lakh+ Monthly Social Media Reach", suffix: "+", icon: "📱", display: "11+" },
    { number: 44, label: "Large-Scale Pet Events Conducted", suffix: "", icon: "🎉", display: "44" },
    { number: 40, label: "Google Keywords Ranking Top", suffix: "+", icon: "🔍", display: "40+" },
  ];

  const services = [
    {
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Pet Insurance Solutions",
      description: "Comprehensive pet insurance products designed to give peace of mind to pet parents across India. Tailored plans for every life stage.",
      highlight: "PROTECTING PETS NATIONWIDE"
    },
    {
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
        </svg>
      ),
      title: "Pet Care Marketplace",
      description: "India's most trusted platform connecting pet parents with verified vets, groomers, trainers, boarders, and pet care professionals.",
      highlight: "6,000+ VERIFIED PROVIDERS"
    },
    {
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Pet Wellness Programs",
      description: "Preventive care, nutrition guidance, vaccination drives, and wellness initiatives that promote healthy and happy pets.",
      highlight: "HEALTH-FIRST APPROACH"
    },
    {
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Community & Awareness",
      description: "Building India's strongest pet parent communities through 44+ pet events, educational campaigns and brand activations.",
      highlight: "42 COMMUNITY + 2 MEGA EVENTS"
    }
  ];

  const recognitions = [
    {
      title: "Official K9 Vendor",
      desc: "Andhra Pradesh & Telangana State Police K9 Procurement",
      icon: (
        <svg className="w-10 h-10 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V19.5a2.25 2.25 0 002.25 2.25h.75" />
        </svg>
      ),
    },
    {
      title: "Karnataka Business Award",
      desc: "Best Pet Services Category",
      icon: (
        <svg className="w-10 h-10 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.04 6.04 0 01-2.02 1.118M12 12.75a6.04 6.04 0 01-2.02-1.118" />
        </svg>
      ),
    },
    {
      title: "Most Promising Business",
      desc: "Awarded by GAN & GCCI — Goa Angels Network",
      icon: (
        <svg className="w-10 h-10 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ),
    },
    {
      title: "Health Awareness Partner",
      desc: "Health Awareness Association with Dr. Lakshmi Srinivasan",
      icon: (
        <svg className="w-10 h-10 text-rose-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
    },
    {
      title: "MSME Recognized",
      desc: "Recognized & Registered under MSME — Government of India",
      icon: (
        <svg className="w-10 h-10 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
        </svg>
      ),
    },
  ];

  const whyPartner = [
    { title: "Direct Access to Verified Pet Parents", desc: "Reach engaged, high-intent pet owners across India through our trusted platform and events.", icon: "👥" },
    { title: "Strong Veterinary & Breeder Network", desc: "Tap into 86+ partnered vet clinics and breeders with established relationships.", icon: "🏥" },
    { title: "Online + Offline Activation", desc: "Seamless digital marketing combined with physical community activations at scale.", icon: "🔗" },
    { title: "Trusted Pet Wellness Ecosystem", desc: "7+ years building brand equity as India's most credible pet care and insurance platform.", icon: "🛡️" },
    { title: "Proven Community Engagement", desc: "11+ Lakh monthly social reach and 44+ large-scale pet events that drive real engagement.", icon: "📊" },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-900">
      <Navbar onContactClick={() => setIsContactOpen(true)} />

      {/* ===== HERO SECTION WITH EVENT SLIDER ===== */}
      <div className="relative pt-20 bg-gradient-to-br from-teal-950 via-teal-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[length:20px_20px]" />

        <div className="max-w-7xl mx-auto px-6 pt-14 pb-16 md:pt-20 md:pb-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left text */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-xs tracking-[1.5px] font-medium mb-7">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                INDIA'S #1 PET WELLNESS ECOSYSTEM
              </div>

              <h1 className="text-[48px] md:text-[64px] leading-[1.02] tracking-[-3px] font-bold mb-5">
                PETSFOLIO<br />
                <span className="text-amber-400">AT A GLANCE</span>
              </h1>

              <p className="max-w-lg text-xl md:text-2xl tracking-[-0.5px] text-teal-100 font-medium mb-9 leading-snug">
                India's Pet Wellness, Care &amp; Insurance Ecosystem — 7+ years of trust, impact &amp; community.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 active:bg-amber-500 transition font-semibold text-lg text-slate-950 tracking-[-0.2px]"
                >
                  <span>Partner with Petsfolio</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
                <button
                  onClick={() => document.getElementById('glance')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/15 font-semibold text-lg border border-white/20 transition"
                >
                  Explore the Numbers
                </button>
              </div>

              {/* Mini trust bar */}
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-teal-300/90">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  Official K9 Vendor
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  Karnataka Award Winner
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  MSME Registered
                </div>
              </div>
            </div>

            {/* Right — Event Photos Slider */}
            <div className="hidden lg:block">
              <div className="aspect-[4/3.2]">
                <HeroSlider />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent strip */}
        <div className="h-1 bg-gradient-to-r from-amber-400 via-teal-400 to-amber-400" />
      </div>

      {/* ===== PETSFOLIO AT A GLANCE — STATS ===== */}
      <section id="glance" className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
          <div>
            <div className="text-amber-600 font-semibold tracking-[2px] text-sm mb-2">IMPACT IN NUMBERS</div>
            <h2 className="text-[42px] md:text-6xl tracking-[-2.2px] font-semibold leading-none">Petsfolio at a Glance</h2>
            <p className="mt-3 max-w-md text-xl text-slate-600">Building India's most trusted pet ecosystem for 7+ years.</p>
          </div>
          <button
            onClick={() => setIsContactOpen(true)}
            className="hidden md:block px-7 py-[13px] bg-slate-900 text-white font-medium text-sm rounded-full hover:bg-black transition"
          >
            Talk to the Team →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
              suffix={stat.suffix}
              icon={<span>{stat.icon}</span>}
              displayOverride={stat.display}
            />
          ))}
        </div>
      </section>

      {/* ===== CORE SERVICES ===== */}
      <section id="services" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-11">
            <div className="text-amber-600 font-semibold text-sm tracking-[2.5px]">WHAT WE OFFER</div>
            <h3 className="text-5xl tracking-[-2.1px] font-semibold mt-2">Core Services</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <ServiceCard
                key={i}
                icon={service.icon}
                title={service.title}
                description={service.description}
                highlight={service.highlight}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== STRATEGIC RECOGNITION & PARTNERSHIPS ===== */}
      <section id="partnerships" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-x-16 gap-y-12">
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <div className="font-semibold tracking-[2px] text-sm text-teal-700">TRUSTED &amp; RECOGNIZED</div>
              <h3 className="mt-3 text-5xl md:text-6xl leading-[0.98] tracking-[-3.2px] font-semibold">Strategic Recognition &amp; Partnerships</h3>
              <p className="text-xl text-slate-600 mt-5">Official backing and prestigious awards that give leading brands the confidence to work with us.</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {recognitions.map((rec, i) => (
              <div key={i} className="flex items-center gap-6 bg-white px-8 py-6 rounded-3xl border border-slate-100 hover:border-teal-200 transition group">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-teal-50 transition-colors">
                  {rec.icon}
                </div>
                <div>
                  <div className="font-semibold text-xl md:text-2xl tracking-tight group-hover:text-teal-800 transition-colors">{rec.title}</div>
                  <div className="text-base text-slate-500">{rec.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY LEADING BRANDS PARTNER ===== */}
      <section id="why" className="bg-slate-900 py-16 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="uppercase font-semibold tracking-[3px] text-amber-400 text-sm">FOR BRANDS LIKE DROOLS</div>
            <h2 className="text-white text-[40px] md:text-[46px] leading-[1.03] tracking-[-2.5px] font-semibold mt-2">Why Leading Brands Partner with Petsfolio</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {whyPartner.map((item, index) => (
              <div key={index} className="bg-white/5 hover:bg-white/10 rounded-3xl px-7 py-8 border border-white/10 transition group">
                <div className="text-4xl mb-5">{item.icon}</div>
                <div className="font-semibold tracking-tight text-xl mb-3 leading-tight">{item.title}</div>
                <p className="text-white/70 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOUNDER SECTION ===== */}
      <div className="bg-white">
        <FounderSection />
      </div>

      {/* ===== TEAM SECTION ===== */}
      <div className="bg-[#F8F9FA]">
        <TeamSection />
      </div>

      {/* ===== FINAL CTA ===== */}
      <section className="bg-gradient-to-br from-teal-800 to-teal-950 py-20 text-white">
        <div className="max-w-3xl mx-auto text-center px-6">
          <div className="font-semibold tracking-widest text-amber-400 text-xs mb-4">LET'S GROW TOGETHER</div>
          <h2 className="text-5xl md:text-6xl tracking-[-2.5px] font-semibold mb-5 leading-none">Ready to reach India's<br />most passionate pet parents?</h2>
          <p className="text-2xl text-teal-100 max-w-lg mx-auto">Join leading brands who trust Petsfolio for impactful partnerships and measurable results.</p>

          <button
            onClick={() => setIsContactOpen(true)}
            className="mt-9 bg-white hover:bg-amber-50 active:bg-white text-teal-950 px-10 py-5 rounded-2xl font-semibold text-xl tracking-[-0.3px] transition inline-flex items-center gap-2"
          >
            Start a Conversation with Petsfolio
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>

          <div className="mt-8 text-teal-300 text-sm tracking-widest">Active in 5 major cities • 10,000+ happy pet parents • 6,000+ service providers</div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
     <footer className="bg-slate-950 text-white/60 text-sm py-12">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-y-8">
    <div>
      {/* Updated Logo Section */}
      <div className="flex items-center gap-3 mb-4 w-[130px] h-[60px]">
        <img 
          src="/images/pf logo.png" 
          alt="Petsfolio Logo" 
          className="w-full h-full object-contain"
        />
      </div>
      <div>Petsfolio Pet Services Pvt. Ltd.</div>
      <div className="mt-1">India's Trusted Pet Wellness, Care &amp; Insurance Platform</div>
    </div>
    
    <div className="md:text-right text-sm">
      <div>5 Major Cities • 7+ Years • 10,000+ Pet Parents</div>
      <div className="mt-px">Official K9 Vendor — Andhra Pradesh &amp; Telangana</div>
      <div className="mt-7 text-white/40">
        © {new Date().getFullYear()} Petsfolio Pet Services Pvt. Ltd. All rights reserved.
      </div>
    </div>
  </div>
</footer>

      {/* Partnership Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

export default App;
