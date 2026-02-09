import "./globals.css";
import { AuthProvider } from "@/lib/context/AuthContext";
import { ToastProvider } from "@/lib/context/ToastContext";

export const metadata = {
  metadataBase: new URL('https://handcraftedhaven.com'),
  title: {
    default: "Handcrafted Haven — Unique Handmade Items by Local Artisans",
    template: "%s | Handcrafted Haven"
  },
  description: "Discover unique handcrafted items from talented artisans. Shop sustainable, handmade products and support local creators on Handcrafted Haven.",
  keywords: ['handmade', 'handcrafted', 'artisan', 'sustainable', 'unique gifts', 'ceramic', 'pottery', 'marketplace', 'local artisans'],
  authors: [{ name: 'Handcrafted Haven' }],
  creator: 'Handcrafted Haven',
  publisher: 'Handcrafted Haven',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://handcraftedhaven.com',
    siteName: 'Handcrafted Haven',
    title: 'Handcrafted Haven — Unique Handmade Items',
    description: 'Discover unique handcrafted items from talented artisans worldwide.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@handcraftedhaven',
    creator: '@handcraftedhaven',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ToastProvider>
            {children}
          </ToastProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
