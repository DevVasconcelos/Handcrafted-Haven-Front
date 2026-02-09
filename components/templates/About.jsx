import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import AboutContent from "../organisms/AboutContent";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero */}
      <section className="bg-linear-to-br from-[rgba(194,65,45,0.03)] to-[rgba(214,161,30,0.03)] py-8 md:py-12 px-4 md:px-6 text-center border-b border-(--border)">
        <div className="max-w-200 mx-auto">
          <div className="w-full max-w-200 h-50 sm:h-70 md:h-90 bg-linear-to-br from-[#D95E48] to-[#E5B847] rounded-2xl md:rounded-3xl flex items-center justify-center text-5xl sm:text-6xl md:text-[80px] shadow-xl mb-6 md:mb-8 mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent" />
            <span className="relative">🎨</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-(--text) mb-3 md:mb-4 leading-tight px-4">
            Connecting Artisans with Passionate Buyers
          </h1>
          <p className="text-base md:text-lg text-(--muted) leading-relaxed px-4">
            Handcrafted Haven is a marketplace dedicated to celebrating and supporting 
            talented artisans who create unique, handmade products. We believe in the 
            value of craftsmanship, sustainability, and supporting local creators.
          </p>
        </div>
      </section>

      <main className="flex-1">
        <AboutContent />
      </main>

      <Footer />
    </div>
  );
}
