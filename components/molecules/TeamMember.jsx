export default function TeamMember({ avatar, name, role, description, colorClass = "primary" }) {
  const colors = {
    primary: "from-(--primary) to-[#D95E48]",
    golden: "from-(--accent3) to-[#E5B847]",
    emerald: "from-(--success) to-[#2A9C63]",
    accent: "from-(--accent2) to-[#4A7AA0]"
  };

  return (
    <div className="bg-white rounded-2xl p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className={`w-24 h-24 bg-linear-to-br ${colors[colorClass]} rounded-full flex items-center justify-center text-5xl mx-auto mb-4 shadow-md relative overflow-hidden`}>
        <div className="absolute inset-0 bg-linear-to-br from-white/20 to-transparent" />
        <span className="relative">{avatar}</span>
      </div>
      <h3 className="text-lg font-bold text-(--text) mb-1">
        {name}
      </h3>
      <div className="text-[13px] font-semibold text-(--primary) uppercase tracking-wide mb-2">
        {role}
      </div>
      <p className="text-sm text-(--muted) leading-relaxed">
        {description}
      </p>
    </div>
  );
}
