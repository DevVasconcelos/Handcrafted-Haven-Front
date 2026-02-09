'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/context/AuthContext";
import Logo from "../atoms/Logo";
import Input from "../atoms/Input";

export default function Header() {
  const { user, isAuthenticated, isSeller, logout, loading } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const getInitial = () => {
    const name = user?.name || user?.first_name || user?.firstName || user?.email || '';
    return name.trim().charAt(0).toUpperCase() || 'U';
  };

  // Avoid auth flicker during initial hydration
  if (loading) {
    return null;
  }

  return (
    <>
      <div className="h-1 bg-linear-to-r from-(--primary) via-(--accent2) to-(--accent1)"></div>
      
      <header className="sticky top-0 z-50 py-4 md:py-5 border-b border-(--border) bg-[rgba(250,247,242,0.95)] backdrop-blur-md shadow-sm">
        <div className="max-w-350 mx-auto px-4 md:px-6 lg:px-10 flex items-center gap-4 md:gap-8 lg:gap-12">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-6 xl:gap-10 items-center">
            <Link href="/" className="relative text-(--muted) text-[15px] font-medium transition-all whitespace-nowrap hover:text-(--text) after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-(--primary) after:transition-[width] after:duration-300 hover:after:w-full">
              Home
            </Link>
            <Link href="/categories" className="relative text-(--muted) text-[15px] font-medium transition-all whitespace-nowrap hover:text-(--text) after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-(--primary) after:transition-[width] after:duration-300 hover:after:w-full">
              Categories
            </Link>
            <Link href="/sellers" className="relative text-(--muted) text-[15px] font-medium transition-all whitespace-nowrap hover:text-(--text) after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-(--primary) after:transition-[width] after:duration-300 hover:after:w-full">
              Sellers
            </Link>
            <Link href="/about" className="relative text-(--muted) text-[15px] font-medium transition-all whitespace-nowrap hover:text-(--text) after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-(--primary) after:transition-[width] after:duration-300 hover:after:w-full">
              About
            </Link>
          </nav>
          
          <div className="flex items-center gap-2 md:gap-4 ml-auto">
            {/* Desktop Search */}
            <form
              className="relative hidden sm:block min-w-60 md:min-w-80 lg:min-w-95"
              onSubmit={(e) => {
                e.preventDefault();
                const query = searchValue.trim();
                if (!query) return;
                router.push(`/search?q=${encodeURIComponent(query)}`);
              }}
            >
              <Input 
                type="search"
                placeholder="Search products…"
                className="pl-4 pr-10"
                aria-label="Search products"
                name="search"
                id="header-search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button
                type="submit"
                aria-label="Submit search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-(--muted) hover:text-(--text)"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
            
            {/* Desktop Auth Buttons */}
            <div className="hidden lg:flex items-center gap-2 md:gap-4">
              {isAuthenticated() ? (
                <>
                  {isSeller() && (
                    <Link href="/dashboard" className="flex px-4 lg:px-5 py-2.75 border border-(--border) rounded-[10px] bg-white text-(--text) text-sm font-medium transition-all shadow-[0_1px_2px_rgba(31,27,22,0.04)] hover:border-(--primary) hover:text-(--primary) hover:shadow-[0_2px_8px_rgba(194,65,45,0.1)] hover:-translate-y-px whitespace-nowrap items-center justify-center" aria-label="Go to dashboard">
                      Dashboard
                    </Link>
                  )}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-(--primary) to-(--primaryDark) flex items-center justify-center text-white font-semibold text-sm" role="img" aria-label={`User avatar: ${user?.name || 'User'}`}>
                      {getInitial()}
                    </div>
                    <button 
                      onClick={logout}
                      className="px-4 lg:px-5 py-2.75 border border-(--border) rounded-[10px] bg-white text-(--text) text-sm font-medium transition-all shadow-[0_1px_2px_rgba(31,27,22,0.04)] hover:border-(--primary) hover:text-(--primary) hover:shadow-[0_2px_8px_rgba(194,65,45,0.1)] hover:-translate-y-px whitespace-nowrap inline-flex items-center justify-center cursor-pointer"
                      aria-label="Logout from account"
                    >
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <Link href="/sign-in" className="px-4 lg:px-5 py-2.75 border border-(--border) rounded-[10px] bg-white text-(--text) text-sm font-medium transition-all shadow-[0_1px_2px_rgba(31,27,22,0.04)] hover:border-(--primary) hover:text-(--primary) hover:shadow-[0_2px_8px_rgba(194,65,45,0.1)] hover:-translate-y-px whitespace-nowrap inline-flex items-center justify-center" aria-label="Sign in to your account">
                    Sign in
                  </Link>
                  <Link href="/sign-up" className="inline-flex px-4 lg:px-5 py-2.75 border border-(--primary) rounded-[10px] bg-(--primary) text-white text-sm font-medium transition-all shadow-[0_1px_2px_rgba(31,27,22,0.04)] hover:bg-(--primaryDark) hover:border-(--primaryDark) hover:shadow-[0_2px_8px_rgba(194,65,45,0.1)] hover:-translate-y-px whitespace-nowrap items-center justify-center" aria-label="Create a new account">
                    Create account
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-(--border)/30 transition-colors"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div 
            id="mobile-menu"
            className="lg:hidden border-t border-(--border) bg-white mt-4"
            role="navigation"
            aria-label="Mobile navigation menu"
          >
            <nav className="px-4 py-4 flex flex-col gap-2">
              <Link 
                href="/" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-(--text) font-medium hover:bg-(--bg) transition-colors focus:outline-none focus:ring-2 focus:ring-(--primary)/20"
              >
                Home
              </Link>
              <Link 
                href="/categories" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-(--text) font-medium hover:bg-(--bg) transition-colors focus:outline-none focus:ring-2 focus:ring-(--primary)/20"
              >
                Categories
              </Link>
              <Link 
                href="/sellers" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-(--text) font-medium hover:bg-(--bg) transition-colors focus:outline-none focus:ring-2 focus:ring-(--primary)/20"
              >
                Sellers
              </Link>
              <Link 
                href="/about" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-(--text) font-medium hover:bg-(--bg) transition-colors focus:outline-none focus:ring-2 focus:ring-(--primary)/20"
              >
                About
              </Link>
              
              {isAuthenticated() && (
                <Link 
                  href="/dashboard" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-(--text) font-medium hover:bg-(--bg) transition-colors focus:outline-none focus:ring-2 focus:ring-(--primary)/20"
                  aria-label="Go to seller dashboard"
                >
                  Dashboard
                </Link>
              )}

              <div className="border-t border-(--border) my-2" role="separator"></div>

              {isAuthenticated() ? (
                <>
                  <div className="px-4 py-2 flex items-center gap-3" role="group" aria-label="User profile information">
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-(--primary) to-(--primaryDark) flex items-center justify-center text-white font-semibold text-sm" role="img" aria-label={`User avatar: ${user?.name || 'User'}`}>
                      {getInitial()}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-(--text)">{user?.name}</div>
                      <div className="text-sm text-(--muted)">{user?.email}</div>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="mx-4 mt-2 px-4 py-3 border border-(--border) rounded-lg bg-white text-(--text) font-medium hover:bg-(--bg) transition-colors text-center focus:outline-none focus:ring-2 focus:ring-(--primary)/20"
                    aria-label="Logout from account"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <div className="px-4 py-2 flex flex-col gap-2">
                  <Link 
                    href="/sign-in"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 border border-(--border) rounded-lg bg-white text-(--text) font-medium text-center hover:border-(--primary) hover:text-(--primary) transition-all focus:outline-none focus:ring-2 focus:ring-(--primary)/20"
                    aria-label="Sign in to your account"
                  >
                    Sign in
                  </Link>
                  <Link 
                    href="/sign-up"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 border border-(--primary) rounded-lg bg-(--primary) text-white font-medium text-center hover:bg-(--primaryDark) transition-all focus:outline-none focus:ring-2 focus:ring-(--primaryDark)/20"
                    aria-label="Create a new account"
                  >
                    Create account
                  </Link>
                </div>
              )}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
