import About from '@/components/templates/About';

export const metadata = {
  title: "About Us — Handcrafted Haven",
  description: "Learn about Handcrafted Haven's mission to connect artisans with passionate buyers and support sustainable craftsmanship worldwide.",
  openGraph: {
    title: 'About Handcrafted Haven',
    description: "Our mission to connect artisans with passionate buyers and support sustainable craftsmanship.",
    url: 'https://handcraftedhaven.com/about',
    siteName: 'Handcrafted Haven',
    images: [
      {
        url: '/images/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About Handcrafted Haven',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Handcrafted Haven',
    description: "Our mission to connect artisans with passionate buyers.",
    images: ['/images/og-about.jpg'],
  },
};

export default function AboutPage() {
  return <About />;
}
