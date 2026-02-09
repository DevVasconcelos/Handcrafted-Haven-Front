'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/context/AuthContext';
import FormGroup from '../molecules/FormGroup';
import Checkbox from '../atoms/Checkbox';
import RadioCard from '../atoms/RadioCard';
import Button from '../atoms/Button';
import SocialButton from '../molecules/SocialButton';

export default function SignUpForm() {
  const router = useRouter();
  const { signup, error: authError, loading: authLoading } = useAuth();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    accountType: 'buyer',
    terms: false,
    newsletter: false,
    storeName: '',
    bio: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (!formData.terms) {
      setError('You must accept the terms and conditions');
      return;
    }

    if (formData.accountType === 'seller' && !formData.storeName) {
      setError('Store name is required for sellers');
      return;
    }

    setIsSubmitting(true);

    try {
      const userData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        role: formData.accountType.toUpperCase(),
        newsletter: formData.newsletter
      };

      if (formData.accountType === 'seller') {
        userData.storeName = formData.storeName;
        userData.bio = formData.bio;
        userData.phone = formData.phone;
      }

      const result = await signup(userData);
      
      if (result.success) {
        if (formData.accountType === 'seller') {
          router.push('/dashboard');
        } else {
          router.push('/');
        }
      } else {
        setError(result.error || 'Error creating account');
      }
    } catch (err) {
      setError('Unexpected error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSocialSignup = (provider) => {
    console.log('Sign up with:', provider);
    setError('Social signup is not implemented yet');
  };

  const displayError = error || authError;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {displayError && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {displayError}
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 max-[640px]:grid-cols-1">
        <FormGroup
          id="firstName"
          label="First Name"
          type="text"
          placeholder="John"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          required
        />
        <FormGroup
          id="lastName"
          label="Last Name"
          type="text"
          placeholder="Doe"
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          required
        />
      </div>

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
        placeholder="At least 8 characters"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        required
      />

      <FormGroup
        id="confirmPassword"
        label="Confirm Password"
        type="password"
        placeholder="Re-enter your password"
        value={formData.confirmPassword}
        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        required
      />

      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-[--text] tracking-wide">Account Type</label>
        <div className="grid grid-cols-2 gap-4 max-[640px]:grid-cols-1">
          <RadioCard
            id="buyer"
            name="accountType"
            value="buyer"
            checked={formData.accountType === 'buyer'}
            onChange={(e) => setFormData({ ...formData, accountType: e.target.value })}
            icon={
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            }
            title="Buyer"
            description="Browse and purchase handcrafted items"
          />
          <RadioCard
            id="seller"
            name="accountType"
            value="seller"
            checked={formData.accountType === 'seller'}
            onChange={(e) => setFormData({ ...formData, accountType: e.target.value })}
            icon={
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            }
            title="Seller"
            description="List and sell your handmade products"
          />
        </div>
      </div>

      {formData.accountType === 'seller' && (
        <>
          <FormGroup
            id="storeName"
            label="Store Name"
            type="text"
            placeholder="Your store name"
            value={formData.storeName}
            onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
            required
          />
          <FormGroup
            id="phone"
            label="Phone Number"
            type="tel"
            placeholder="(11) 99999-9999"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
          <FormGroup
            id="bio"
            label="Bio (optional)"
            type="textarea"
            placeholder="Tell us about your craft..."
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
          />
        </>
      )}

      <Checkbox
        id="terms"
        label={
          <>
            I agree to the <Link href="#" className="text-[--primary] font-medium hover:underline">Terms of Service</Link> and <Link href="#" className="text-[--primary] font-medium hover:underline">Privacy Policy</Link>
          </>
        }
        checked={formData.terms}
        onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
      />

      <Checkbox
        id="newsletter"
        label="Send me updates, special offers, and artisan spotlights"
        checked={formData.newsletter}
        onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
      />

      <Button type="submit" variant="primary" className="w-full">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
        Create Account
      </Button>

      <div className="flex items-center gap-4 my-2">
        <div className="flex-1 h-px bg-[--border]" />
        <span className="text-[13px] font-medium text-[--muted] uppercase tracking-wider">Or continue with</span>
        <div className="flex-1 h-px bg-[--border]" />
      </div>

      <SocialButton provider="google" onClick={() => handleSocialSignup('google')} />
      <SocialButton provider="facebook" onClick={() => handleSocialSignup('facebook')} />

      <div className="text-center mt-2 text-sm text-[--muted]">
        Already have an account?{' '}
        <Link 
          href="/sign-in" 
          className="text-[--primary] font-semibold hover:text-[--primaryDark] hover:underline"
        >
          Sign in
        </Link>
      </div>
    </form>
  );
}
