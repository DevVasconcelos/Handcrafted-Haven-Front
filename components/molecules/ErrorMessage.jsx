export default function ErrorMessage({ 
  title = 'Error', 
  message = 'Something went wrong. Please try again.', 
  icon = '⚠️',
  onRetry,
  className = ''
}) {
  return (
    <div className={`p-6 bg-red-50 border border-red-200 rounded-lg ${className}`}>
      <div className="flex items-start gap-4">
        <div className="text-3xl">{icon}</div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-red-900 mb-2">{title}</h3>
          <p className="text-red-700 text-sm mb-4">{message}</p>
          {onRetry && (
            <button
              onClick={onRetry}
              className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors duration-200"
            >
              Try Again
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
