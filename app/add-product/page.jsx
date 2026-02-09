import AddProduct from '@/components/templates/AddProduct';

export const metadata = {
  title: 'Add Product — Handcrafted Haven',
  description: 'List a new handcrafted product for sale in the marketplace',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AddProductPage() {
  return <AddProduct />;
}
