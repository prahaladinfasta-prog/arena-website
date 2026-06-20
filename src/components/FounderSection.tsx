const FounderSection = () => {
  const ventures = [
    {
      icon: '💻',
      name: 'Infasta Software Solutions Pvt. Ltd.',
      tag: 'Established 2008',
      desc: 'End-to-end technology solutions: web, mobile, UI/UX, digital marketing, and enterprise services.',
      stats: ['3,000+ Clients', '5,000+ Projects', '25+ Countries'],
      color: 'border-l-indigo-500',
    },
    {
      icon: '🎓',
      name: 'Ace Web Academy',
      tag: 'Education & Training',
      desc: 'Industry-ready talent development: Full Stack, Web, Mobile App Development, Digital Marketing.',
      stats: ['10,000+ Students', '12+ Years', '15+ Recruitment Partners'],
      color: 'border-l-amber-500',
    },
    {
      icon: '🐾',
      name: 'Petsfolio Pet Services Pvt. Ltd.',
      tag: 'Established 2018',
      desc: "India's early mover in pet-tech — bridging pet parents and service providers through technology.",
      stats: ['10,000+ Pet Parents', '6,000+ Providers', '5 Cities'],
      color: 'border-l-teal-500',
    },
  ];

  return (
    <section id="founder" className="max-w-7xl mx-auto px-6 py-20">
      {/* Section Header */}
      <div className="mb-14">
        <div className="uppercase tracking-[2.5px] text-sm font-semibold text-amber-600 mb-2">FOUNDER PROFILE</div>
        <h2 className="text-5xl md:text-6xl font-semibold tracking-[-2.5px] text-slate-900">The Visionary Behind Petsfolio</h2>
      </div>

      {/* ===== ROW 1: Photo | Content | Stats — ALL IN ONE LINE ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
        {/* Photo */}
        <div className="lg:col-span-3">
          <div className="relative h-full">
            <div className="h-full min-h-[320px] rounded-3xl overflow-hidden shadow-xl ring-1 ring-slate-200">
              <img
                src="/images/founder.jpg"
                alt="Shiva Kumar - Founder & CEO, Petsfolio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 left-4 right-4 bg-white shadow-lg rounded-2xl px-5 py-3 border border-slate-100 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
              <div className="text-xs">
                <span className="font-semibold text-slate-900">18+ Years</span>
                <span className="text-slate-500"> in Tech & Business</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h3 className="text-4xl md:text-[44px] font-semibold tracking-[-1.8px] text-slate-900 leading-[1.05]">Shiva Kumar</h3>
          <div className="text-xl text-teal-700 font-medium tracking-tight mt-1 mb-5">Founder &amp; CEO – Infasta | Co-Founder – Petsfolio</div>

          <p className="text-slate-600 text-[17px] leading-relaxed mb-4">
            A technology entrepreneur with 18+ years across digital solutions, web technologies, and business development. Beginning as a Designer, UI Developer, and Project Manager, he transitioned into entrepreneurship — founding Infasta in 2008 and later establishing Ace Web Academy and Petsfolio.
          </p>
          <blockquote className="border-l-4 border-amber-400 pl-5 text-slate-500 italic text-[15px] leading-relaxed">
            "Recognizing the potential of technology to create meaningful impact, he stepped into entrepreneurship and has not looked back since."
          </blockquote>
        </div>

        {/* Stats numbers */}
        <div className="lg:col-span-4 grid grid-cols-2 gap-3 content-center">
          {[
            { value: '18+', label: 'Years of Entrepreneurship' },
            { value: '3', label: 'Successful Ventures' },
            { value: '3,000+', label: 'Clients Served' },
            { value: '2018', label: 'Pet-Tech Pioneer Since' },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-teal-50 to-white border border-teal-100 rounded-2xl p-5 text-center hover:shadow-md transition"
            >
              <div className="text-3xl md:text-4xl font-bold tracking-tighter text-teal-900">{s.value}</div>
              <div className="text-xs text-slate-500 font-medium mt-1 leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== ROW 2: 3 Ventures — Vertical simple sections ===== */}
      <div className="mb-10">
        <div className="uppercase font-semibold tracking-[2px] text-xs text-slate-400 mb-5">ENTREPRENEURIAL TRACK RECORD</div>
      </div>

      <div className="space-y-4">
        {ventures.map((v, i) => (
          <div
            key={i}
            className={`bg-white border border-slate-100 ${v.color} border-l-4 rounded-2xl px-7 py-6 hover:shadow-md transition flex flex-col md:flex-row md:items-center gap-4 md:gap-8`}
          >
            <div className="text-4xl flex-shrink-0">{v.icon}</div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h4 className="font-semibold text-xl tracking-tight text-slate-900">{v.name}</h4>
                <span className="text-xs font-medium text-teal-600 bg-teal-50 px-2.5 py-0.5 rounded-full">{v.tag}</span>
              </div>
              <p className="text-slate-500 text-sm mt-1">{v.desc}</p>
            </div>
            <div className="flex flex-wrap gap-2 md:flex-shrink-0">
              {v.stats.map((stat, j) => (
                <span key={j} className="text-xs font-semibold text-slate-700 bg-slate-50 px-3 py-1.5 rounded-full whitespace-nowrap">
                  {stat}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Vision Statement */}
      <div className="mt-14 bg-gradient-to-br from-teal-900 to-teal-950 rounded-3xl px-10 py-12 text-white">
        <div className="max-w-3xl">
          <div className="uppercase tracking-[3px] text-teal-400 text-xs mb-3 font-medium">VISION</div>
          <blockquote className="text-2xl md:text-[27px] leading-tight tracking-tighter font-medium">
            "To build India's most trusted ecosystem for Pet Health, Nutrition, Care, and Protection, connecting pet parents, veterinarians, service providers, and leading pet brands through a single platform."
          </blockquote>
          <div className="mt-4 text-sm text-teal-400 font-medium tracking-widest">— SHIVA KUMAR</div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
