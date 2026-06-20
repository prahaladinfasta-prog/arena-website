import React from 'react';

interface StatCardProps {
  number: number;
  label: string;
  suffix?: string;
  icon: React.ReactNode;
  delay?: number;
  displayOverride?: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, label, icon, displayOverride }) => {
  const [count, setCount] = React.useState(0);
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    const duration = 1600;
    const steps = 40;
    let current = 0;
    const increment = Math.ceil(number / steps);

    const interval = setInterval(() => {
      current += increment;
      if (current >= number) {
        setCount(number);
        setDone(true);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [number]);

  const animatedDisplay = number >= 10000
    ? Math.floor(count / 1000).toLocaleString() + ',000+'
    : count.toLocaleString() + (number < 1000 ? '' : '+');

  const finalDisplay = displayOverride || animatedDisplay;

  return (
    <div className="group bg-white rounded-3xl p-7 border border-slate-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-4xl font-semibold tracking-tighter text-teal-900 tabular-nums">
            {done ? finalDisplay : animatedDisplay}
          </div>
          <div className="mt-3 text-sm leading-snug text-slate-600 font-medium pr-2">
            {label}
          </div>
        </div>
        <div className="text-4xl opacity-90 group-hover:scale-110 transition-transform text-teal-700">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
