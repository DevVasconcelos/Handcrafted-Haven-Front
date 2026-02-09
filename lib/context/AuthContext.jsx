'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { authService } from '../api/auth';
import { storage } from '../utils/storage';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  // Seed initial state from localStorage (when available) to avoid flicker on reload
  const [user, setUser] = useState(() => (typeof window !== 'undefined' ? storage.getUser() : null));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const initAuth = async () => {
      try {
        const token = storage.getToken();
        const cachedUser = storage.getUser();

        // If we already have a cached user and token, keep it while refreshing
        if (token && cachedUser) {
          setUser(cachedUser);
        }

        if (token) {
          const currentUser = await authService.getMe();
          setUser(currentUser);
        }
      } catch (err) {
        console.error('Auth initialization error:', err);
        storage.clearAll();
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = async (email, password) => {
    try {
      setError(null);
      setLoading(true);
      const { user: userData } = await authService.login(email, password);
      setUser(userData);
      return { success: true, user: userData };
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Error signing in';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const signup = async (userData) => {
    try {
      setError(null);
      setLoading(true);
      const { user: newUser } = await authService.register(userData);
      setUser(newUser);
      return { success: true, user: newUser };
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Error creating account';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      setUser(null);
      router.push('/');
    }
  };

  const isAuthenticated = () => {
    return !!user || authService.isAuthenticated();
  };

  const isSeller = () => {
    return user?.role === 'SELLER';
  };

  const isBuyer = () => {
    return user?.role === 'BUYER';
  };

  const value = {
    user,
    loading,
    error,
    login,
    signup,
    logout,
    isAuthenticated,
    isSeller,
    isBuyer,
    setError
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use auth context
export function useAuth() {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
}
