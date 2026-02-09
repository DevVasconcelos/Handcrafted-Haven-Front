import StatCard from '../molecules/StatCard';

export default function StatsGrid({ stats }) {
  const totalRevenue = stats?.total_revenue ?? stats?.revenue ?? 0;
  const revenueChange = stats?.revenue_change ?? stats?.revenueChange ?? 'N/A';
  const totalProducts = stats?.total_products ?? stats?.products?.total ?? 0;
  const productsChange = stats?.products_change ?? stats?.products?.active ?? 'N/A';
  const totalOrders = stats?.total_orders ?? stats?.orders?.total ?? 0;
  const ordersChange = stats?.orders_change ?? stats?.orders?.change ?? 'N/A';
  const averageRating = stats?.average_rating ?? stats?.reviews?.averageRating ?? 0;
  const totalReviews = stats?.total_reviews ?? stats?.reviews?.total ?? stats?.reviews?.totalProductReviews ?? 0;

  const formatCurrency = (value) => {
    if (typeof value === 'number') {
      return `$${value.toFixed(2)}`;
    }
    return value || '$0.00';
  };

  const formatRating = (value) => {
    if (typeof value === 'number') {
      return `${value.toFixed(1)}★`;
    }
    return value || '0.0★';
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard 
        variant="dashboard"
        label="Total Revenue"
        value={formatCurrency(totalRevenue)}
        change={revenueChange}
        colorClass="revenue"
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        }
      />
      
      <StatCard 
        variant="dashboard"
        label="Total Products"
        value={String(totalProducts)}
        change={productsChange}
        colorClass="products"
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        }
      />
      
      <StatCard 
        variant="dashboard"
        label="Total Orders"
        value={String(totalOrders)}
        change={ordersChange}
        colorClass="orders"
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        }
      />
      
      <StatCard 
        variant="dashboard"
        label="Avg. Rating"
        value={formatRating(averageRating)}
        change={`${totalReviews} reviews`}
        colorClass="rating"
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        }
      />
    </div>
  );
}
