import Link from 'next/link';
import Logo from '../atoms/Logo';

export default function AuthHeader() {
  return (
    <>
      <div className="h-1 bg-linear-to-r from-[--primary] via-[--accent2] to-[--accent1]" aria-hidden="true" />
      <header className="py-5 border-b border-[--border] bg-bg/95 backdrop-blur-md shadow-sm">
        <div className="flex items-center justify-between max-w-300 mx-auto px-10">
          <Logo />

          <Link 
            href="/" 
            className="flex items-center gap-2 text-[--muted] text-sm font-medium transition-all duration-200 hover:text-[--primary] hover:-translate-x-0.5"
            aria-label="Back to home page"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>
    </>
  );
}
