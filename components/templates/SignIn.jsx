import AuthHeader from '../organisms/AuthHeader';
import SignInForm from '../organisms/SignInForm';
import Footer from '../organisms/Footer';

export default function SignIn() {
  return (
    <div className="min-h-screen flex flex-col bg-[--bg]">
      <AuthHeader />

      <main className="flex-1 flex items-center justify-center py-8 md:py-12 px-4 md:px-5">
        <div className="w-full max-w-120 border border-[--border] rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 bg-white shadow-lg">
          <div className="text-center mb-8 md:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-[32px] font-bold mb-3 text-[--text] tracking-tight">
              Welcome back
            </h1>
            <p className="text-[--muted] text-sm sm:text-base leading-relaxed">
              Sign in to your account to continue shopping unique handmade items
            </p>
          </div>

          <SignInForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}
