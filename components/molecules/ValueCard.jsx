export default function ValueCard({ emoji, title, description }) {
  return (
    <div className="bg-white rounded-2xl p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <span className="text-5xl block mb-4">{emoji}</span>
      <h3 className="text-lg font-bold text-(--text) mb-2">
        {title}
      </h3>
      <p className="text-sm text-(--muted) leading-relaxed">
        {description}
      </p>
    </div>
  );
}
