import { useState } from 'react';

interface NavbarProps {
  onContactClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { label: 'At a Glance', id: 'glance' },
    { label: 'Services', id: 'services' },
    { label: 'Recognition', id: 'partnerships' },
    { label: 'Why Partner', id: 'why' },
    { label: 'Founder', id: 'founder' },
    { label: 'Team', id: 'team' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Container */}
        <div className="flex items-center gap-3 w-[130px] h-[60px]">
          <img 
            src="/images/pf logo.png" 
            alt="logo" 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-slate-600 hover:text-teal-700 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right Actions */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-700"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t px-6 py-4 flex flex-col gap-3 text-sm font-medium shadow-lg">
          {navLinks.map((item) => (
            <button 
              key={item.id} 
              onClick={() => scrollToSection(item.id)} 
              className="text-left py-2 text-slate-700 hover:text-teal-700 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => { onContactClick(); setIsOpen(false); }}
            className="mt-2 w-full py-3 bg-amber-500 text-white rounded-full font-semibold"
          >
            Partner with Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
