import LoadingSpinner from '../atoms/LoadingSpinner';

export default function LoadingPage({ message = 'Loading...' }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[--background]">
      <div className="text-center">
        <LoadingSpinner size="xl" className="text-[--primary] mb-4" />
        <p className="text-[--muted] text-lg">{message}</p>
      </div>
    </div>
  );
}
