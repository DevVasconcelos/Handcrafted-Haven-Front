import Label from '../atoms/Label';
import Input from '../atoms/Input';
import Textarea from '../atoms/Textarea';

export default function FormGroup({ 
  id, 
  label, 
  type = 'text', 
  placeholder, 
  value, 
  onChange,
  required = false,
  rows = 5
}) {
  return (
    <div className="mb-6">
      <Label htmlFor={id}>{label}</Label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          rows={rows}
          className="w-full px-4 py-3 border border-[--border] rounded-xl bg-white text-[--text] text-[15px] transition-all duration-200 focus:outline-none focus:border-[--primary] focus:ring-4 focus:ring-[--primary]/10 resize-vertical min-h-[120px] placeholder:text-[--muted] placeholder:opacity-60"
        />
      ) : (
        <Input
          type={type}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />
      )}
    </div>
  );
}
