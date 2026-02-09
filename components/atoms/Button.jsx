export default function Button({ children, variant = "default", onClick, type = "button", className = "", ariaLabel, disabled = false }) {
  const baseClasses = "px-5 py-3 rounded-xl font-medium transition-all duration-200 shadow-sm flex items-center justify-center gap-3 cursor-pointer focus:outline-none focus:ring-4 focus:ring-(--primary)/20";
  
  const variants = {
    default: "bg-white border border-(--border) text-(--text) hover:border-(--primary) hover:text-(--primary) hover:shadow-md hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-(--border) disabled:hover:shadow-sm disabled:hover:translate-y-0",
    primary: "bg-(--primary) border border-(--primary) text-white hover:bg-(--primaryDark) hover:border-(--primaryDark) hover:shadow-md hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-(--primary) disabled:hover:shadow-sm disabled:hover:translate-y-0",
    header: "px-5 py-2.5 text-sm"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
