'use client';

import { useState, useRef } from 'react';

export default function ImageUpload({ onImagesChange }) {
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleFiles = (files) => {
    const fileArray = Array.from(files);
    const validFiles = fileArray.filter(file => {
      const isValid = file.type.startsWith('image/');
      const isSize = file.size <= 5 * 1024 * 1024; // 5MB
      return isValid && isSize;
    });

    if (validFiles.length > 0) {
      const newImages = validFiles.map(file => ({
        file,
        preview: URL.createObjectURL(file)
      }));
      
      const updatedImages = [...images, ...newImages];
      setImages(updatedImages);
      onImagesChange?.(updatedImages.map(img => img.file));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleInputChange = (e) => {
    handleFiles(e.target.files);
  };

  const removeImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    onImagesChange?.(updatedImages.map(img => img.file));
  };

  return (
    <div>
      <div 
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
        className={`border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-200 ${
          isDragging 
            ? 'border-[--primary] bg-linear-to-br from-[rgba(194,65,45,0.05)] to-[rgba(194,65,45,0.1)]' 
            : 'border-[--border] bg-[--bg] hover:border-[--primary] hover:bg-linear-to-br hover:from-[rgba(194,65,45,0.03)] hover:to-[rgba(194,65,45,0.08)]'
        }`}
      >
        <div className="text-6xl mb-4">📸</div>
        <div className="text-base font-semibold text-[--text] mb-2">Click to upload or drag and drop</div>
        <div className="text-sm text-[--muted] mb-1">PNG, JPG, WEBP up to 5MB each</div>
        <div className="text-sm text-[--muted]">Minimum 1 image required</div>
      </div>
      
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleInputChange}
        className="hidden"
      />
      
      {images.length > 0 && (
        <>
          <div className="text-[13px] text-[--muted] mt-4">First image will be the main product photo</div>
          
          {/* Image Preview Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
            {images.map((image, index) => (
              <div key={index} className="aspect-square rounded-xl bg-linear-to-br from-[--border]/30 to-[--bg] relative overflow-hidden shadow-sm">
                <img 
                  src={image.preview} 
                  alt={`Preview ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {index === 0 && (
                  <div className="absolute top-2 left-2 bg-[--primary] text-white text-xs px-2 py-1 rounded">
                    Principal
                  </div>
                )}
                <button 
                  type="button" 
                  onClick={(e) => {
                    e.stopPropagation();
                    removeImage(index);
                  }}
                  className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center text-[--text] hover:bg-[--primary] hover:text-white transition-all duration-200"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
