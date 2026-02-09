'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { productService } from '@/lib/api/products';
import { uploadService } from '@/lib/api/upload';
import { categoryService } from '@/lib/api/categories';
import FormSection from '../molecules/FormSection';
import FormGroup from '../molecules/FormGroup';
import ImageUpload from '../molecules/ImageUpload';
import Select from '../atoms/Select';
import Textarea from '../atoms/Textarea';
import Checkbox from '../atoms/Checkbox';
import Button from '../atoms/Button';

export default function AddProductForm() {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    categoryId: '',
    price: '',
    stock: '',
    sku: '',
    materials: '',
    dimensions: '',
    weight: '',
    status: 'ACTIVE'
  });

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const data = await categoryService.getAll();
      setCategories(data);
    } catch (err) {
      console.error('Error loading categories:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      if (images.length === 0) {
        setError('Add at least one image');
        setIsSubmitting(false);
        return;
      }

      const uploadedImages = await uploadService.uploadMultiple(images, 'products');

      const productData = {
        title: formData.title,
        description: formData.description,
        category_id: parseInt(formData.categoryId),
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock),
        sku: formData.sku || undefined,
        materials: formData.materials || undefined,
        dimensions: formData.dimensions || undefined,
        weight: formData.weight || undefined,
        status: formData.status
      };

      const product = await productService.create(productData);

      if (uploadedImages && uploadedImages.length > 0) {
        await productService.addImages(product.id, {
          images: uploadedImages.map((img, index) => ({
            url: img.url,
            alt: formData.title,
            is_primary: index === 0
          }))
        });
      }

      router.push('/dashboard');
    } catch (err) {
      console.error('Error creating product:', err);
      setError(err.response?.data?.message || 'Error creating product');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSaveAsDraft = async () => {
    setFormData({ ...formData, status: 'OUT_OF_STOCK' });
    await handleSubmit(new Event('submit'));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      {/* BASIC INFORMATION */}
      <FormSection
        title="Basic Information"
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        }
      >
        <FormGroup
          id="title"
          label="Product Title"
          required
          placeholder="e.g., Artisan Ceramic Vase"
          helpText="Choose a clear, descriptive title for your product"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />

        <Textarea
          id="description"
          label="Description"
          required
          placeholder="Describe your product, materials used, crafting process, dimensions, care instructions..."
          helpText="Provide detailed information about your handcrafted item"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="categoryId" className="block text-sm font-semibold text-[--text] mb-2">
              Category <span className="text-[--primary]">*</span>
            </label>
            <Select
              id="categoryId"
              value={formData.categoryId}
              onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
              required
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </Select>
            <p className="text-[13px] text-[--muted] mt-1.5">Select the most appropriate category</p>
          </div>

          <FormGroup
            id="tags"
            label="Tags"
            placeholder="handmade, ceramic, artisan"
            helpText="Separate tags with commas"
          />
        </div>
      </FormSection>

      {/* PRICING & INVENTORY */}
      <FormSection
        title="Pricing & Inventory"
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormGroup
            id="price"
            label="Price"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            step="0.01"
          />

          <FormGroup
            id="stock"
            label="Stock Quantity"
            type="number"
            required
            placeholder="10"
            helpText="Number of items available"
            value={formData.stock}
            onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormGroup
            id="sku"
            label="SKU (Optional)"
            placeholder="VASE-001"
            helpText="Stock Keeping Unit for your inventory"
            value={formData.sku}
            onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
          />
        </div>
      </FormSection>

      {/* PRODUCT IMAGES */}
      <FormSection
        title="Product Images"
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        }
      >
        <div>
          <label className="block text-sm font-semibold text-(--text) mb-4">
            Upload Images <span className="text-(--primary)">*</span>
          </label>
          <ImageUpload onImagesChange={setImages} />
        </div>
      </FormSection>

      {/* SPECIFICATIONS */}
      <FormSection
        title="Product Specifications"
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormGroup
            id="materials"
            label="Materials Used"
            placeholder="e.g., Ceramic, Clay, Glaze"
            value={formData.materials}
            onChange={(e) => setFormData({ ...formData, materials: e.target.value })}
          />

          <FormGroup
            id="dimensions"
            label="Dimensions"
            placeholder="e.g., 8 x 6 x 12 inches"
            value={formData.dimensions}
            onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormGroup
            id="weight"
            label="Weight"
            placeholder="e.g., 2.5 lbs"
            value={formData.weight}
            onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
          />
        </div>
      </FormSection>

      {/* SHIPPING & ADDITIONAL INFO */}
      <FormSection
        title="Shipping & Additional Info"
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
        }
      >
        <Select
          id="shippingTime"
          label="Processing Time"
          helpText="Time needed to prepare the item for shipping"
          options={[
            { value: '', label: 'Select processing time' },
            { value: '1-2', label: '1-2 business days' },
            { value: '3-5', label: '3-5 business days' },
            { value: '1-2weeks', label: '1-2 weeks' },
            { value: 'custom', label: 'Custom order (discuss with buyer)' }
          ]}
        />

        <div>
          <label className="block text-sm font-semibold text-(--text) mb-4">Product Features</label>
          <div className="space-y-3">
            <Checkbox id="handmade" label="Handmade" defaultChecked />
            <Checkbox id="customizable" label="Customizable" />
            <Checkbox id="giftWrapping" label="Gift Wrapping Available" />
          </div>
        </div>
      </FormSection>

      {/* FORM ACTIONS */}
      <div className="flex flex-col sm:flex-row gap-4 justify-end">
        <Button
          variant="default"
          type="button"
          className="px-8 w-full sm:w-auto"
          onClick={handleSaveAsDraft}
          disabled={isSubmitting}
        >
          Save as Draft
        </Button>
        <Button
          variant="primary"
          type="submit"
          className="px-8 w-full sm:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Publicando...
            </>
          ) : (
            'Publish Product'
          )}
        </Button>
      </div>
    </form>
  );
}
