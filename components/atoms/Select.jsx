'use client';

export default function Select({ 
  id, 
  label, 
  required, 
  options, 
  helpText, 
  value, 
  onChange, 
  children,
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
      
      <select
        id={id}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 border border-[--border] rounded-xl bg-white text-[--text] text-[15px] font-medium transition-all duration-200 focus:outline-none focus:border-[--primary] focus:ring-4 focus:ring-[--primary]/10 cursor-pointer appearance-none bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 24 24%27 stroke=%27%235E564F%27%3E%3Cpath stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M19 9l-7 7-7-7%27/%3E%3C/svg%3E')] bg-no-repeat bg-position-[right_12px_center] bg-size-[20px] pr-10"
        {...rest}
      >
        {children || options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      
      {helpText && (
        <div className="text-[13px] text-[--muted] mt-2">{helpText}</div>
      )}
    </div>
  );
}
