import Button from '../atoms/Button';

export default function ErrorPage({ 
  title = 'Error', 
  message = 'Something went wrong. Please try again.',
  icon = '⚠️',
  onRetry,
  showHomeButton = true
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[--background] px-4">
      <div className="max-w-md w-full text-center">
        <div className="text-6xl mb-6">{icon}</div>
        <h1 className="text-3xl font-bold text-[--text] mb-4">{title}</h1>
        <p className="text-[--muted] text-lg mb-8">{message}</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {onRetry && (
            <Button
              onClick={onRetry}
              variant="primary"
              className="px-6"
            >
              Try Again
            </Button>
          )}
          
          {showHomeButton && (
            <Button
              onClick={() => window.location.href = '/'}
              variant="default"
              className="px-6"
            >
              Back to Home
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
