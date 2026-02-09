export default function Chip({ children, variant = "default", showDot = false }) {
  const variants = {
    default: "bg-(--primaryLight) text-(--primary)",
    featured: "bg-(--accent3) text-white",
    eco: "bg-[#E6F4EA] text-(--success)",
    popular: "bg-[#E8EFF9] text-(--accent2)"
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide ${variants[variant]}`}>
      {showDot && <span className="w-1.5 h-1.5 rounded-full bg-current"></span>}
      {children}
    </span>
  );
}
