export default function MissionCard({ icon, title, description, colorClass = "primary" }) {
  const colors = {
    primary: "from-(--primary) to-[#D95E48]",
    emerald: "from-(--success) to-[#2A9C63]",
    accent: "from-(--accent2) to-[#4A7AA0]"
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className={`w-14 h-14 bg-linear-to-br ${colors[colorClass]} rounded-xl flex items-center justify-center text-3xl mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-(--text) mb-2">
        {title}
      </h3>
      <p className="text-[15px] text-(--muted) leading-relaxed">
        {description}
      </p>
    </div>
  );
}
