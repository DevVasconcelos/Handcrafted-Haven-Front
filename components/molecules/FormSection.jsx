import Input from '../atoms/Input';
import Label from '../atoms/Label';

export default function FormSection({ title, icon, children }) {
  return (
    <section className="bg-white rounded-2xl p-8 shadow-sm border border-(--border)">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 rounded-xl bg-linear-to-br from-(--primary) to-[#D95E48] flex items-center justify-center text-white shrink-0">
          {icon}
        </div>
        <h2 className="text-xl font-bold text-(--text)">{title}</h2>
      </div>
      
      <div className="space-y-6">
        {children}
      </div>
    </section>
  );
}
