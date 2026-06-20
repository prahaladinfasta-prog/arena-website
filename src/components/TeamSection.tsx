const team = [
  {
    name: 'Sravanthi Pabboju',
    role: 'Director – Insurance',
    desc: 'Leads pet insurance strategy, product design, and partner relationships across India.',
    image: '/images/team-sravanthi.jpg',
    color: 'from-teal-500 to-emerald-600',
  },
  {
    name: 'Ugendra Lakshmidas',
    role: 'Director – Digital / Marketing',
    desc: 'Drives brand growth, digital campaigns, and market expansion for the Petsfolio ecosystem.',
    image: '/images/team-ugendra.jpg',
    color: 'from-amber-500 to-orange-600',
  },
  {
    name: 'Ugendra Lakshmidas',
    role: 'Director – Digital / Marketing',
    desc: 'Drives brand growth, digital campaigns, and market expansion for the Petsfolio ecosystem.',
    image: '/images/team-mahesh.png',
    color: 'from-amber-500 to-orange-600',
  },
  {
    name: 'Dr. Madhuritha Gupta',
    role: 'Pet Industry Strategy & PR',
    desc: 'Shapes industry partnerships, public relations, and strategic positioning in the pet care space.',
    image: null,
    initials: 'MG',
    color: 'from-rose-500 to-pink-600',
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <div className="text-amber-600 font-semibold tracking-[2.5px] text-sm">THE PEOPLE BEHIND PETSFOLIO</div>
        <h2 className="text-5xl md:text-6xl tracking-[-2.5px] font-semibold mt-2">Leadership Team</h2>
        <p className="mt-4 text-xl text-slate-600 max-w-xl mx-auto">
          A multidisciplinary team driving India's most trusted pet wellness ecosystem.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member, i) => (
          <div
            key={i}
            className="group bg-white rounded-3xl border border-slate-100 hover:border-teal-200 overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            {/* Photo */}
            <div className="aspect-[4/4] overflow-hidden bg-slate-100 relative">
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className={`w-full h-full bg-gradient-to-br ${member.color} flex items-center justify-center`}>
                  <span className="text-white text-6xl font-bold opacity-80">
                    {'initials' in member ? member.initials : member.name[0]}
                  </span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="p-6">
              <h3 className="font-semibold text-xl tracking-tight text-slate-900 leading-tight">{member.name}</h3>
              <div className="text-teal-700 font-medium text-sm mt-1">{member.role}</div>
              <p className="text-slate-500 text-sm mt-3 leading-relaxed">{member.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
