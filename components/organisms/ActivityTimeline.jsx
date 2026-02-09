'use client';

import TimelineItem from '../molecules/TimelineItem';

export default function ActivityTimeline({ timeline }) {
  if (!timeline || timeline.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-[--border]">
        <div className="p-8 border-b border-[--border]">
          <h2 className="text-xl font-bold text-[--text]">Recent Activity</h2>
        </div>
        <div className="p-8">
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📋</div>
            <p className="text-[--muted]">No recent activity</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[--border]">
      <div className="p-8 border-b border-[--border]">
        <h2 className="text-xl font-bold text-[--text]">Recent Activity</h2>
      </div>
      <div className="p-8">
        <div className="space-y-6">
          {timeline.map((item, index) => (
            <TimelineItem
              key={index}
              {...item}
              position={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
