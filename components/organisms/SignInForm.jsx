'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/context/AuthContext';
import FormGroup from '../molecules/FormGroup';
import Checkbox from '../atoms/Checkbox';
import Button from '../atoms/Button';
import SocialButton from '../molecules/SocialButton';

export default function SignInForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get('redirect') || '/dashboard';
  const { login, error: authError, loading: authLoading } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    console.log('📝 Submitting login with:', formData.email);

    try {
      const result = await login(formData.email, formData.password);
      
      console.log('🔐 Login result:', result);

      if (result.success) {
        console.log('✅ Login successful, redirecting to:', redirectUrl);
        router.replace(redirectUrl);
        // Fallback to guarantee navigation in dev/hmr edge cases
        setTimeout(() => {
          window.location.assign(redirectUrl);
        }, 50);
      } else {
        console.log('❌ Login failed:', result.error);
        setError(result.error || 'Error signing in');
      }
    } catch (err) {
      console.error('💥 Login exception:', err);
      setError('Unexpected error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSocialLogin = (provider) => {
    console.log('Login with:', provider);
    setError('Social login is not implemented yet');
  };

  const displayError = error || authError;

  return (
    <form onSubmit={handleSubmit}>
      {displayError && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {displayError}
        </div>
      )}

      <FormGroup
        id="email"
        label="Email Address"
        type="email"
        placeholder="your@email.com"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />

      <FormGroup
        id="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        required
      />

      <div className="flex justify-between items-center my-5 mb-7">
        <Checkbox
          id="remember"
          label="Remember me"
          checked={formData.remember}
          onChange={(e) => setFormData({ ...formData, remember: e.target.checked })}
        />
        <Link 
          href="#" 
          className="text-[--primary] text-sm font-semibold transition-colors duration-200 hover:text-[--primaryDark] hover:underline"
        >
          Forgot password?
        </Link>
      </div>

      <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting || authLoading}>
        {isSubmitting || authLoading ? (
          <>
            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Signing in...
          </>
        ) : (
          <>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            Sign In
          </>
        )}
      </Button>

      <div className="text-center my-8 relative">
        <div className="absolute left-0 right-0 top-1/2 h-px bg-[--border]" />
        <span className="bg-white px-5 relative text-[--muted] text-sm font-semibold uppercase tracking-wider">
          Or continue with
        </span>
      </div>

      <SocialButton provider="google" onClick={() => handleSocialLogin('google')} />
      <SocialButton provider="facebook" onClick={() => handleSocialLogin('facebook')} />

      <div className="text-center mt-8 text-sm text-[--muted]">
        Don&apos;t have an account?{' '}
        <Link 
          href="/sign-up" 
          className="text-[--primary] font-semibold hover:text-[--primaryDark] hover:underline"
        >
          Create account
        </Link>
      </div>
    </form>
  );
}
