import Label from "../atoms/Label";

export default function Hero() {
  return (
    <section className="pt-8 md:pt-12 pb-6 md:pb-8 px-4 md:px-0">
      <Label className="mb-3 md:mb-4">✨ Discover Unique Handcrafted Treasures</Label>
      <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-(--text) leading-tight -tracking-wide mb-3 md:mb-4">
        Support Local Artisans, Find One-of-a-Kind Handmade Items
      </h1>
      <p className="text-base md:text-lg text-(--muted) leading-relaxed max-w-full md:max-w-180">
        Connect with talented creators and discover beautiful, sustainable handcrafted products. 
        Each item tells a story of passion, skill, and dedication to craft.
      </p>
    </section>
  );
}
