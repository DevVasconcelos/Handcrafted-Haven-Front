import Link from "next/link";

export default function Breadcrumb({ items }) {
  return (
    <nav className="flex items-center gap-2 text-sm text-(--muted) py-5 pb-3" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.href ? (
            <Link href={item.href} className="hover:text-(--primary) transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-(--text) font-medium">{item.label}</span>
          )}
          {index < items.length - 1 && <span>›</span>}
        </div>
      ))}
    </nav>
  );
}
