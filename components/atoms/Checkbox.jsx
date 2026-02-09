export default function Checkbox({ id, label, checked, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="w-4.5 h-4.5 border-2 border-[--border] rounded cursor-pointer transition-all duration-200 checked:bg-[--primary] checked:border-[--primary]"
      />
      <label 
        htmlFor={id} 
        className="text-sm text-[--text] cursor-pointer"
      >
        {label}
      </label>
    </div>
  );
}
