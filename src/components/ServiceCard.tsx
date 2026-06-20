import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, highlight }) => {
  return (
    <div className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-teal-50 text-teal-700 mb-6 group-hover:bg-teal-700 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="font-semibold text-xl tracking-tight text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 leading-relaxed text-sm flex-1">{description}</p>
      {highlight && (
        <div className="mt-5 pt-5 border-t border-slate-100 text-[11px] font-semibold tracking-[1.5px] text-amber-600 uppercase">
          {highlight}
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
