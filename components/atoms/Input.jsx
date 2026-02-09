export default function Input({ 
  type = "text", 
  placeholder, 
  value, 
  onChange, 
  className = "",
  id,
  name,
  ariaLabel,
  required = false,
  disabled = false
}) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full h-12 px-4 border border-(--border) rounded-xl bg-white text-(--text) text-sm outline-none transition-all shadow-sm focus:border-(--primary) focus:shadow-[0_0_0_3px_rgba(194,65,45,0.1)] disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      aria-label={ariaLabel}
      required={required}
      disabled={disabled}
    />
  );
}
