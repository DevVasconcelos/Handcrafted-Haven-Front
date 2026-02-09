import AuthHeader from '../organisms/AuthHeader';
import SignUpForm from '../organisms/SignUpForm';
import Footer from '../organisms/Footer';

export default function SignUp() {
  return (
    <div className="min-h-screen flex flex-col bg-[--bg]">
      <AuthHeader />

      <main className="flex-1 flex items-center justify-center py-12 px-5">
        <div className="w-full max-w-145 border border-[--border] rounded-3xl p-12 bg-white shadow-lg max-[640px]:p-8 max-[640px]:px-6">
          <div className="text-center mb-8">
            <h1 className="text-[32px] font-bold mb-2 text-[--text] tracking-tight max-[640px]:text-[28px]">
              Create your account
            </h1>
            <p className="text-[15px] text-[--muted] leading-relaxed">
              Join Handcrafted Haven to discover unique artisan products and support independent creators
            </p>
          </div>

          <SignUpForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}
