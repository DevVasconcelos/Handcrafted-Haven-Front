'use client';

// Controlled textarea that forwards value/onChange and any native props
export default function Textarea({
  id,
  label,
  required,
  placeholder,
  helpText,
  rows = 5,
  value,
  onChange,
  name,
  ...rest
}) {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="block text-sm font-semibold text-[--text] mb-2">
          {label}
          {required && <span className="text-[--primary] ml-1">*</span>}
        </label>
      )}

      <textarea
        id={id}
        name={name}
        required={required}
        placeholder={placeholder}
        rows={rows}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 border border-[--border] rounded-xl bg-white text-[--text] text-[15px] transition-all duration-200 focus:outline-none focus:border-[--primary] focus:ring-4 focus:ring-[--primary]/10 resize-vertical min-h-35 placeholder:text-[--muted] placeholder:opacity-60"
        {...rest}
      />

      {helpText && (
        <div className="text-[13px] text-[--muted] mt-2">{helpText}</div>
      )}
    </div>
  );
}
