export default function TimelineItem({ year, title, description, position = "left", colorClass = "primary" }) {
  const borderColors = {
    primary: "border-(--primary)",
    golden: "border-(--accent3)",
    emerald: "border-(--success)",
    accent: "border-(--accent2)",
    secondary: "border-(--accent1)"
  };

  const isLeft = position === "left";

  return (
    <div className={`flex items-center mb-8 relative ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
      <div className={`absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-white rounded-full z-10 shadow-md border-4 ${borderColors[colorClass]}`} />
      
      <div className={`flex-1 bg-white rounded-2xl p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 max-w-120 ${isLeft ? 'mr-auto' : 'ml-auto'}`}>
        <div className="text-[13px] font-bold text-(--primary) uppercase tracking-wide mb-1">
          {year}
        </div>
        <h3 className="text-xl font-bold text-(--text) mb-1">
          {title}
        </h3>
        <p className="text-sm text-(--muted) leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
