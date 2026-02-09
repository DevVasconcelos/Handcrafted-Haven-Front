export default function StatCard({ icon, value, label, colorClass = "primary", change, variant = "about" }) {
  const colors = {
    primary: "from-(--primary) to-[#D95E48]",
    golden: "from-(--accent3) to-[#E5B847]",
    emerald: "from-(--success) to-[#2A9C63]",
    indigo: "from-[#4338CA] to-[#6366F1]"
  };

  const borderColors = {
    primary: "bg-gradient-to-r from-(--primary) to-[#D95E48]",
    golden: "bg-gradient-to-r from-(--accent3) to-[#E5B847]",
    emerald: "bg-gradient-to-r from-(--success) to-[#2A9C63]",
    indigo: "bg-gradient-to-r from-[#4338CA] to-[#6366F1]"
  };

  const gradients = {
    revenue: 'linear-gradient(135deg, #C2412D 0%, #D95E48 100%)',
    products: 'linear-gradient(135deg, #355C7D 0%, #4A7A9E 100%)',
    orders: 'linear-gradient(135deg, #1E7D4F 0%, #2A9C63 100%)',
    rating: 'linear-gradient(135deg, #D6A11E 0%, #E5B847 100%)'
  };

  if (variant === "dashboard") {
    const changeStr = change === undefined || change === null ? '' : String(change);
    const changeNumber = typeof change === 'number' ? change : Number.isFinite(Number(changeStr)) ? Number(changeStr) : null;
    const isPositive = changeStr.includes('↑') || changeStr.toLowerCase().includes('from') || (changeNumber !== null && changeNumber > 0);
    const gradient = gradients[colorClass] || gradients.revenue;

    return (
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-(--border)">
        <div className="flex justify-between items-start mb-4">
          <span className="text-sm font-medium text-(--muted)">{label}</span>
          <div 
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
            style={{ background: gradient }}
          >
            {icon}
          </div>
        </div>
        
        <div className="text-4xl font-bold text-(--text) mb-2 tracking-tight">
          {value}
        </div>
        
        {changeStr && (
          <div className={`flex items-center gap-1 text-[13px] ${isPositive ? 'text-(--success)' : 'text-(--muted)'}`}>
            {isPositive && (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            )}
            {changeStr}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative overflow-hidden">
      <div className={`absolute top-0 left-0 right-0 h-1 ${borderColors[colorClass]}`} />
      <div className={`w-14 h-14 bg-linear-to-br ${colors[colorClass]} rounded-xl flex items-center justify-center text-3xl mx-auto mb-4`}>
        {icon}
      </div>
      <div className="text-5xl font-extrabold text-(--text) mb-2 leading-none">
        {value}
      </div>
      <div className="text-sm text-(--muted) font-medium">
        {label}
      </div>
    </div>
  );
}
