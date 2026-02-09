import Link from "next/link";
import StatCard from "../molecules/StatCard";
import MissionCard from "../molecules/MissionCard";
import ValueCard from "../molecules/ValueCard";
import TimelineItem from "../molecules/TimelineItem";
import TeamMember from "../molecules/TeamMember";
import ImpactCard from "../molecules/ImpactCard";

export default function AboutContent() {
  return (
    <div className="max-w-300 mx-auto px-6 py-12">
      {/* Stats */}
      <section className="mb-12">
        <div className="text-[13px] font-semibold text-(--primary) uppercase tracking-wide mb-3">
          Platform Statistics
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard icon="👥" value="2,500+" label="Active Artisans" colorClass="primary" />
          <StatCard icon="🎨" value="15,000+" label="Unique Products" colorClass="golden" />
          <StatCard icon="😊" value="50,000+" label="Happy Customers" colorClass="emerald" />
          <StatCard icon="⭐" value="4.8★" label="Average Rating" colorClass="indigo" />
        </div>
      </section>

      {/* Mission */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold text-(--text) mb-6">Our Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MissionCard
            icon="💪"
            title="Empowering Artisans"
            description="We provide a platform for artisans to showcase their work, reach a global audience, and build sustainable businesses doing what they love."
            colorClass="primary"
          />
          <MissionCard
            icon="🌱"
            title="Promoting Sustainability"
            description="Every handmade product represents a conscious choice against mass production. We celebrate eco-friendly materials and sustainable practices."
            colorClass="emerald"
          />
          <MissionCard
            icon="🤝"
            title="Building Community"
            description="We foster connections between makers and buyers, creating a community that values authenticity, quality, and the stories behind each creation."
            colorClass="accent"
          />
        </div>
      </section>

      {/* Core Values */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold text-(--text) mb-6">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ValueCard
            emoji="🎨"
            title="Authenticity"
            description="Every product is genuinely handmade by skilled artisans."
          />
          <ValueCard
            emoji="🌱"
            title="Sustainability"
            description="We prioritize eco-friendly materials and ethical practices."
          />
          <ValueCard
            emoji="🤝"
            title="Fair Trade"
            description="Artisans receive fair compensation for their craftsmanship."
          />
          <ValueCard
            emoji="✨"
            title="Quality"
            description="We maintain high standards for all products on our platform."
          />
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold text-(--text) mb-6">Our Journey</h2>
        
        {/* Desktop Timeline - Alternating */}
        <div className="relative py-6 hidden md:block">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-(--primary) via-(--accent3) to-(--accent1) -translate-x-1/2" />
          
          <TimelineItem
            year="2020"
            title="The Beginning"
            description="Founded by two artisans who wanted to create a better marketplace for independent creators and conscious buyers."
            position="left"
            colorClass="primary"
          />
          <TimelineItem
            year="2021"
            title="Launch"
            description="Platform launched with 50 artisans and 500 products, establishing the foundation for a community of creators."
            position="right"
            colorClass="golden"
          />
          <TimelineItem
            year="2023"
            title="Growth"
            description="Reached 1,000 artisans and expanded to international shipping, bringing handcrafted goods to the world."
            position="left"
            colorClass="emerald"
          />
          <TimelineItem
            year="2025"
            title="Community"
            description="Launched artisan workshops and community events, strengthening connections between creators and enthusiasts."
            position="right"
            colorClass="accent"
          />
          <TimelineItem
            year="2026"
            title="Today"
            description="Over 2,500 artisans and 50,000 happy customers worldwide, continuing the mission to value craftsmanship."
            position="left"
            colorClass="secondary"
          />
        </div>

        {/* Mobile Timeline - All Left */}
        <div className="relative py-6 md:hidden">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-linear-to-b from-(--primary) via-(--accent3) to-(--accent1)" />
          
          {[
            {
              year: "2020",
              title: "The Beginning",
              description: "Founded by two artisans who wanted to create a better marketplace for independent creators and conscious buyers.",
              colorClass: "primary"
            },
            {
              year: "2021",
              title: "Launch",
              description: "Platform launched with 50 artisans and 500 products, establishing the foundation for a community of creators.",
              colorClass: "golden"
            },
            {
              year: "2023",
              title: "Growth",
              description: "Reached 1,000 artisans and expanded to international shipping, bringing handcrafted goods to the world.",
              colorClass: "emerald"
            },
            {
              year: "2025",
              title: "Community",
              description: "Launched artisan workshops and community events, strengthening connections between creators and enthusiasts.",
              colorClass: "accent"
            },
            {
              year: "2026",
              title: "Today",
              description: "Over 2,500 artisans and 50,000 happy customers worldwide, continuing the mission to value craftsmanship.",
              colorClass: "secondary"
            }
          ].map((item, index) => (
            <div key={index} className="relative pl-16 pb-8 last:pb-0">
              <div className="absolute left-6 w-3 h-3 rounded-full bg-(--primary) -translate-x-1/2 border-4 border-white" />
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="text-sm font-bold text-(--primary) mb-1">{item.year}</div>
                <h3 className="text-xl font-bold text-(--text) mb-2">{item.title}</h3>
                <p className="text-[15px] text-(--muted) leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold text-(--text) mb-2">Meet Our Team</h2>
        <div className="text-[13px] font-semibold text-(--primary) uppercase tracking-wide mb-6">
          Leadership
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <TeamMember
            avatar="👨"
            name="Carlos Silva"
            role="Co-Founder & CEO"
            description="Passionate artisan, Carlos founded the platform to give voice to independent creators."
            colorClass="primary"
          />
          <TeamMember
            avatar="👩"
            name="Ana Costa"
            role="Co-Founder & CTO"
            description="Technology expert who transformed the vision into a robust and accessible platform."
            colorClass="golden"
          />
          <TeamMember
            avatar="👨"
            name="Ricardo Mendes"
            role="Head of Artisan Relations"
            description="Connects new talent to the platform and supports the growth of each artisan."
            colorClass="emerald"
          />
          <TeamMember
            avatar="👩"
            name="Julia Santos"
            role="Head of Marketing & Community"
            description="Tells the stories of artisans and strengthens the community around craftsmanship."
            colorClass="accent"
          />
        </div>
      </section>

      {/* Our Impact */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold text-(--text) text-center mb-6">
          Our Impact
        </h2>
        <p className="text-[15px] text-(--muted) text-center max-w-3xl mx-auto leading-relaxed mb-12">
          Together with our community of artisans and buyers, we&apos;re creating meaningful change across economic, environmental, and social dimensions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ImpactCard
            icon="💰"
            title="Economic Empowerment"
            stats={[
              { value: "$2.5M+", description: "in artisan revenue" },
              { value: "45%", description: "average income increase" },
              { value: "200+", description: "full-time artisans" }
            ]}
            colorClass="from-[rgba(194,65,45,0.1)] to-[rgba(194,65,45,0.05)]"
          />
          <ImpactCard
            icon="🌱"
            title="Environmental Impact"
            stats={[
              { value: "85%", description: "sustainable materials" },
              { value: "40%", description: "carbon reduction" },
              { value: "Zero", description: "waste to landfill" }
            ]}
            colorClass="from-[rgba(30,125,79,0.1)] to-[rgba(30,125,79,0.05)]"
          />
          <ImpactCard
            icon="🤝"
            title="Community Growth"
            stats={[
              { value: "150+", description: "skill workshops" },
              { value: "50+", description: "mentorship participants" },
              { value: "25", description: "local partnerships" }
            ]}
            colorClass="from-[rgba(53,92,125,0.1)] to-[rgba(53,92,125,0.05)]"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-br from-[rgba(194,65,45,0.05)] to-[rgba(214,161,30,0.05)] rounded-3xl p-12 mb-12">
        <h2 className="text-4xl font-bold text-(--text) text-center mb-6">
          Join Our Community
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <span className="text-6xl block mb-4">🛍️</span>
            <h3 className="text-2xl font-bold text-(--text) mb-2">For Buyers</h3>
            <p className="text-[15px] text-(--muted) leading-relaxed mb-6">
              Discover unique handmade products and support talented artisans from around the world.
            </p>
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-(--primary) text-white text-base font-semibold rounded-xl transition-all hover:bg-(--primaryDark) hover:-translate-y-0.5 hover:shadow-md"
            >
              Browse Products
            </Link>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <span className="text-6xl block mb-4">🎨</span>
            <h3 className="text-2xl font-bold text-(--text) mb-2">For Artisans</h3>
            <p className="text-[15px] text-(--muted) leading-relaxed mb-6">
              Start selling your handmade creations today and reach thousands of customers.
            </p>
            <Link
              href="/sign-up"
              className="inline-block px-8 py-3 bg-(--primary) text-white text-base font-semibold rounded-xl transition-all hover:bg-(--primaryDark) hover:-translate-y-0.5 hover:shadow-md"
            >
              Become a Seller
            </Link>
          </div>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold text-(--text) text-center mb-6">
          Get in Touch
        </h2>
        <p className="text-[15px] text-(--muted) text-center max-w-2xl mx-auto leading-relaxed mb-12">
          Have questions or want to learn more about Handcrafted Haven? We&apos;d love to hear from you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="w-16 h-16 bg-linear-to-br from-(--primary) to-[rgba(194,65,45,0.7)] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📧</span>
            </div>
            <h3 className="text-xl font-bold text-(--text) mb-2">Email Us</h3>
            <p className="text-[15px] text-(--muted) leading-relaxed">
              hello@handcraftedhaven.com
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="w-16 h-16 bg-linear-to-br from-(--accent2) to-[rgba(53,92,125,0.7)] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📞</span>
            </div>
            <h3 className="text-xl font-bold text-(--text) mb-2">Call Us</h3>
            <p className="text-[15px] text-(--muted) leading-relaxed">
              +1 (555) 123-4567
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="w-16 h-16 bg-linear-to-br from-(--success) to-[rgba(30,125,79,0.7)] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📍</span>
            </div>
            <h3 className="text-xl font-bold text-(--text) mb-2">Visit Us</h3>
            <p className="text-[15px] text-(--muted) leading-relaxed">
              123 Artisan Street, Craft City
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="w-12 h-12 bg-[#1877F2] rounded-full flex items-center justify-center text-white text-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            📘
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-linear-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] rounded-full flex items-center justify-center text-white text-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            📷
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-[#1DA1F2] rounded-full flex items-center justify-center text-white text-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            🐦
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-[#0A66C2] rounded-full flex items-center justify-center text-white text-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            💼
          </a>
        </div>
      </section>
    </div>
  );
}
