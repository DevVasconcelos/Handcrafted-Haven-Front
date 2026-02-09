'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children, requireSeller = false }) {
  const router = useRouter();
  const { user, loading, isAuthenticated, isSeller } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (!isAuthenticated()) {
        router.push('/sign-in?redirect=' + window.location.pathname);
      } else if (requireSeller && !isSeller()) {
        router.push('/');
      }
    }
  }, [user, loading, isAuthenticated, isSeller, requireSeller, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <svg 
            className="animate-spin h-12 w-12 mx-auto mb-4 text-[--primary]" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <p className="text-[--muted]">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated()) {
    return null;
  }

  if (requireSeller && !isSeller()) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[--text] mb-2">Access Denied</h1>
          <p className="text-[--muted]">This page is for sellers only.</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
