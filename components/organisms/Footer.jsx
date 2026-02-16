import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-(--border) py-8 md:py-12 px-4 md:px-6 text-(--muted) text-sm mt-16 bg-white" role="contentinfo">
      <nav className="max-w-300 mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8" aria-label="Footer navigation">
        <div>
          <h4 className="text-sm font-bold text-(--text) mb-4 uppercase tracking-wider">Shop</h4>
          <Link href="#" className="block text-(--muted) mb-1 hover:text-(--primary) transition-colors focus:outline-none focus:text-(--primary)">
            New Products
          </Link>
          <Link href="#" className="block text-(--muted) mb-1 hover:text-(--primary) transition-colors focus:outline-none focus:text-(--primary)">
            Best Sellers
          </Link>
          <Link href="#" className="block text-(--muted) mb-1 hover:text-(--primary) transition-colors focus:outline-none focus:text-(--primary)">
            Deals
          </Link>
        </div>

        <div>
          <h4 className="text-sm font-bold text-(--text) mb-4 uppercase tracking-wider">Sell</h4>
          <Link href="/dashboard" className="block text-(--muted) mb-1 hover:text-(--primary) transition-colors focus:outline-none focus:text-(--primary)">
            Dashboard
          </Link>
          <Link href="/add-product" className="block text-(--muted) mb-1 hover:text-(--primary) transition-colors focus:outline-none focus:text-(--primary)">
            Add Product
          </Link>
          <Link href="#" className="block text-(--muted) mb-1 hover:text-(--primary) transition-colors focus:outline-none focus:text-(--primary)">
            Seller Guide
          </Link>
          <Link href="#" className="block text-(--muted) mb-1 hover:text-(--primary) transition-colors focus:outline-none focus:text-(--primary)">
            Fees
          </Link>
        </div>

        <div>
          <h4 className="text-sm font-bold text-(--text) mb-4 uppercase tracking-wider">About</h4>
          <Link href="/about" className="block text-(--muted) mb-1 hover:text-(--primary) transition-colors focus:outline-none focus:text-(--primary)">
            About Us
          </Link>
          <Link href="#" className="block text-(--muted) mb-1 hover:text-(--primary) transition-colors focus:outline-none focus:text-(--primary)">
            How It Works
          </Link>
          <Link href="#" className="block text-(--muted) mb-1 hover:text-(--primary) transition-colors focus:outline-none focus:text-(--primary)">
            Blog
          </Link>
          <Link href="#" className="block text-(--muted) mb-1 hover:text-(--primary) transition-colors focus:outline-none focus:text-(--primary)">
            Press
          </Link>
        </div>

        <div>
          <h4 className="text-sm font-bold text-(--text) mb-4 uppercase tracking-wider">Support</h4>
          <Link href="#" className="block text-(--muted) mb-1 hover:text-(--primary) transition-colors focus:outline-none focus:text-(--primary)">
            Help Center
          </Link>
          <Link href="#" className="block text-(--muted) mb-1 hover:text-(--primary) transition-colors focus:outline-none focus:text-(--primary)">
            Shipping & Delivery
          </Link>
          <Link href="#" className="block text-(--muted) mb-1 hover:text-(--primary) transition-colors focus:outline-none focus:text-(--primary)">
            Returns
          </Link>
          <Link href="#" className="block text-(--muted) mb-1 hover:text-(--primary) transition-colors focus:outline-none focus:text-(--primary)">
            Contact
          </Link>
        </div>
      </nav>

      <div className="max-w-300 mx-auto mt-8 pt-6 border-t border-(--border) text-center">
        <p>© 2026 Handcrafted Haven. All rights reserved.</p>
      </div>
    </footer>
  );
}
