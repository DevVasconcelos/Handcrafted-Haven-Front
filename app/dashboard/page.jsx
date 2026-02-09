'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/context/AuthContext';
import { useRouter } from 'next/navigation';
import { dashboardService } from '@/lib/api/dashboard';
import { productService } from '@/lib/api/products';
import Dashboard from '@/components/templates/Dashboard';

export default function DashboardPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [stats, setStats] = useState(null);
  const [products, setProducts] = useState([]);
  const [timeline, setTimeline] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!authLoading) {
      if (!user) {
        router.push('/sign-in');
      } else if ((user.role || '').toUpperCase() !== 'SELLER') {
        router.push('/');
      } else {
        loadDashboardData();
      }
    }
  }, [user, authLoading, router]);

  const loadDashboardData = async () => {
    try {
      setLoading(true);
      const [statsData, productsData, timelineData] = await Promise.all([
        dashboardService.getStats(),
        productService.getMyProducts({ page: 1, limit: 10 }),
        dashboardService.getTimeline()
      ]);

      setStats(statsData);
      setProducts(productsData.data || []);
      setTimeline(timelineData || []);
    } catch (err) {
      console.error('Error loading dashboard data:', err);
      setError('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">⏳</div>
          <p className="text-[--muted]">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">⚠️</div>
          <p className="text-[--text] font-semibold mb-2">Failed to load dashboard</p>
          <p className="text-[--muted] text-sm">{error}</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return <Dashboard stats={stats} products={products} timeline={timeline} sellerName={user.name} />;
}
