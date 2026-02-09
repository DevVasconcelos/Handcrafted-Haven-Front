import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Breadcrumb from "../atoms/Breadcrumb";
import ImageGallery from "../molecules/ImageGallery";
import ProductInfo from "../organisms/ProductInfo";
import ProductReviews from "../organisms/ProductReviews";
import RelatedProducts from "../organisms/RelatedProducts";

export default function ProductDetail({ product, relatedProducts }) {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: product.category, href: "/categories" },
    { label: product.title }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[--background]">
      <Header />
      
      <main className="flex-1">
        <div className="max-w-300 mx-auto px-4 md:px-6">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 pb-8 md:pb-12">
            <ImageGallery images={product.images} gradient={product.gradient} />
            <ProductInfo product={product} />
          </div>
          
          <ProductReviews productId={product.id} sellerId={product.seller_id} />
          
          <RelatedProducts products={relatedProducts} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
