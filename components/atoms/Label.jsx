export default function Label({ children, className = "" }) {
  return (
    <div className={`text-[10px] text-(--muted) uppercase tracking-wider font-medium ${className}`}>
      {children}
    </div>
  );
}
