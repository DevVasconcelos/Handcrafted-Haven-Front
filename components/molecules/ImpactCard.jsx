export default function ImpactCard({ icon, title, stats, colorClass = "primary" }) {
  const colors = {
    primary: "from-(--primary) to-[#D95E48]",
    emerald: "from-(--success) to-[#2A9C63]",
    accent: "from-(--accent2) to-[#4A7AA0]"
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <h3 className="flex items-center gap-3 text-xl font-bold text-(--text) mb-6">
        <span className={`w-8 h-8 bg-linear-to-br ${colors[colorClass]} rounded-lg flex items-center justify-center text-base shrink-0`}>
          {icon}
        </span>
        {title}
      </h3>
      
      {stats.map((stat, index) => (
        <div key={index} className="mb-6 last:mb-0">
          <strong className="text-(--text) text-[15px] block mb-1">
            {stat.value}
          </strong>
          <p className="text-sm text-(--muted) leading-relaxed">
            {stat.description}
          </p>
        </div>
      ))}
    </div>
  );
}
