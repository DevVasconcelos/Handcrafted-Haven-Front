import SignUp from '@/components/templates/SignUp';

export const metadata = {
  title: 'Create Account — Handcrafted Haven',
  description: 'Create your Handcrafted Haven account to discover unique artisan products and support independent creators.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function SignUpPage() {
  return <SignUp />;
}
