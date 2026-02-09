'use client';

import { useState } from 'react';
import Filters from './Filters';
import ProductGrid from './ProductGrid';
import { productService } from '@/lib/api/products';

export default function ProductsSection({ initialProducts, categories }) {
  const normalizeNumber = (value, fallback = 0) => {
    if (value === null || value === undefined) return fallback;
    if (typeof value === 'number') return Number.isFinite(value) ? value : fallback;
    const parsed = Number(String(value).replace(',', '.'));
    return Number.isFinite(parsed) ? parsed : fallback;
  };

  const normalizePrice = (value) => {
    return normalizeNumber(value, 0);
  };

  const normalizeProduct = (product = {}) => {
    const images = (product.images && product.images.length)
      ? product.images
      : product.primary_image
        ? [{ url: product.primary_image, is_primary: true }]
        : [];

    return {
      ...product,
      title: product.title || product.name || product.product_name || 'Product',
      price: normalizePrice(product.price ?? product.value ?? product.amount),
      category: product.category_name || product.category || product.category?.name,
      category_name: product.category_name || product.category || product.category?.name,
      seller_name: product.seller_name || product.seller?.store_name || product.seller,
      rating: product.rating ?? product.average_rating ?? 0,
      reviews: product.review_count ?? product.reviews ?? product.reviews_count ?? 0,
      sales: normalizeNumber(
        product.total_sales ??
        product.sales ??
        product.sales_count ??
        product.total_sales_count ??
        product.sold ??
        product.sold_count ??
        product.units_sold ??
        product.quantity_sold ??
        product.purchases_count ??
        product.orders_count ??
        product.order_count ??
        0
      ),
      images
    };
  };

  const matchesSearch = (product = {}, term = '') => {
    const query = (term || '').trim().toLowerCase();
    if (!query) return true;
    const haystack = [
      product.title,
      product.name,
      product.product_name,
      product.category,
      product.category_name,
      product.seller_name,
      product.seller?.store_name,
      product.description
    ]
      .filter(Boolean)
      .map((value) => String(value).toLowerCase());
    return haystack.some((value) => value.includes(query));
  };

  const getSalesCount = (product = {}) => {
    return normalizeNumber(product.sales ?? product.total_sales, 0);
  };

  const sortProducts = (list = [], sortBy = 'recent') => {
    const clone = [...list];
    if (sortBy === 'price-asc') {
      return clone.sort((a, b) => a.price - b.price);
    }
    if (sortBy === 'price-desc') {
      return clone.sort((a, b) => b.price - a.price);
    }
    if (sortBy === 'rating' || sortBy === 'popular') {
      // Rating: best first; Popular: sales first, then rating, then reviews
      return clone.sort((a, b) => {
        if (sortBy === 'popular') {
          const salesDiff = getSalesCount(b) - getSalesCount(a);
          if (salesDiff !== 0) return salesDiff;
        }
        const ratingDiff = (b.rating ?? 0) - (a.rating ?? 0);
        if (ratingDiff !== 0) return ratingDiff;
        const reviewsA = a.reviews ?? a.review_count ?? a.reviews_count ?? 0;
        const reviewsB = b.reviews ?? b.review_count ?? b.reviews_count ?? 0;
        return reviewsB - reviewsA;
      });
    }
    // 'recent' or unknown: keep API order
    return clone;
  };

  const [products, setProducts] = useState(() => sortProducts((initialProducts || []).map(normalizeProduct)));
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    minPrice: '',
    maxPrice: '',
    sortBy: 'recent',
    page: 1,
    limit: 12
  });
  const [pagination, setPagination] = useState({
    total: 0,
    pages: 0,
    page: 1,
    limit: 12
  });

  const fetchProducts = async (newFilters = filters) => {
    try {
      setLoading(true);
      setProducts([]);
      const params = {};
      
      if (newFilters.category) params.category = newFilters.category;
      if (newFilters.minPrice) params.minPrice = newFilters.minPrice;
      if (newFilters.maxPrice) params.maxPrice = newFilters.maxPrice;
      if (newFilters.sortBy) params.sort = newFilters.sortBy;
      params.page = newFilters.page;
      params.limit = newFilters.limit;

      const response = await productService.search(params);
      const normalized = (response.data || []).map(normalizeProduct);
      const filtered = normalized.filter((p) => matchesSearch(p, newFilters.search));
      setProducts(sortProducts(filtered, newFilters.sortBy));
      if (response.meta) {
        setPagination(response.meta);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (newFilters) => {
    const updatedFilters = { ...filters, ...newFilters, page: 1 };
    setFilters(updatedFilters);
    fetchProducts(updatedFilters);
  };

  const handlePageChange = (newPage) => {
    const updatedFilters = { ...filters, page: newPage };
    setFilters(updatedFilters);
    fetchProducts(updatedFilters);
  };

  return (
    <>
      <Filters 
        onFilterChange={handleFilterChange}
        categories={categories}
        currentFilters={filters}
      />
      <ProductGrid 
        products={products} 
        loading={loading}
        pagination={pagination}
        onPageChange={handlePageChange}
      />
    </>
  );
}
