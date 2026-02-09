export default function RadioCard({ id, name, value, checked, onChange, icon, title, description }) {
  return (
    <div className="relative">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="absolute opacity-0 w-0 h-0"
      />
      <label
        htmlFor={id}
        className={`flex flex-col items-center text-center p-6 border-2 rounded-2xl cursor-pointer transition-all duration-200 bg-white gap-2 ${
          checked 
            ? 'border-[--primary] bg-linear-to-br from-[rgba(194,65,45,0.03)] to-[rgba(194,65,45,0.08)] shadow-[0_0_0_3px_rgba(194,65,45,0.1)]' 
            : 'border-[--border] hover:border-[#D85C46] hover:shadow-sm'
        }`}
      >
        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
          checked 
            ? 'bg-linear-to-br from-[--primary] to-[#D85C46]' 
            : 'bg-linear-to-br from-[#F0E9DF] to-[--border]'
        }`}>
          <div className={`w-6 h-6 ${checked ? 'text-white' : 'text-[--muted]'} transition-colors duration-200`}>
            {icon}
          </div>
        </div>
        <span className="text-base font-semibold text-[--text]">{title}</span>
        <span className="text-[13px] text-[--muted] leading-snug">{description}</span>
      </label>
    </div>
  );
}
