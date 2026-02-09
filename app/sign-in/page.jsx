import SignIn from '@/components/templates/SignIn';

export const metadata = {
  title: 'Sign In — Handcrafted Haven',
  description: 'Sign in to your Handcrafted Haven account to shop unique handmade items and manage your orders.',
  robots: {
    index: false,
    follow: true,
  },
};

// Keep this route dynamic to avoid static export issues while auth relies on runtime state
export const dynamic = 'force-dynamic';

export default function SignInPage() {
  return <SignIn />;
}
