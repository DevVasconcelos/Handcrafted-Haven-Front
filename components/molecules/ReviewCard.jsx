import Rating from '../atoms/Rating';

export default function ReviewCard({ review }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getInitials = (name) => {
    if (!name) return '?';
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name[0].toUpperCase();
  };

  const userName = review.user?.name || review.reviewer || 'User';
  const reviewDate = review.created_at || review.date;
  const avatar = review.avatar;
  const isImage = typeof avatar === 'string' && avatar.startsWith('http');

  return (
    <div className="bg-white p-6 border border-[--border] rounded-2xl shadow-[0_1px_3px_rgba(31,27,22,0.06)]">
      <div className="flex gap-4 items-start mb-4">
        <div
          className="w-12 h-12 rounded-full shrink-0 overflow-hidden flex items-center justify-center text-white text-xl font-semibold"
          style={{ background: 'linear-gradient(135deg, #355C7D 0%, #6B5B95 100%)' }}
        >
          {isImage ? (
            <img src={avatar} alt={userName} className="w-full h-full object-cover" />
          ) : (
            <span>{avatar || getInitials(userName)}</span>
          )}
        </div>
        
        <div className="flex-1">
          <div className="text-base font-semibold text-[--text] mb-1">
            {userName}
          </div>
          <div className="text-[13px] text-[--muted]">
            {formatDate(reviewDate)}
          </div>
          <div className="mt-2">
            <Rating rating={review.rating} />
          </div>
        </div>
      </div>
      
      <p className="text-[15px] leading-relaxed text-[--text]">
        {review.comment || review.text}
      </p>
    </div>
  );
}
