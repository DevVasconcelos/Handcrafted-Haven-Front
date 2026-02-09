import api from './client';

export const uploadService = {
  async uploadSingle(file, folder = 'products') {
    const formData = new FormData();
    // Backend expects field name "image"
    formData.append('image', file);
    formData.append('folder', folder);

    const response = await api.post('/upload/single', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data.data;
  },

  async uploadMultiple(files, folder = 'products') {
    const formData = new FormData();
    files.forEach((file) => {
      // Backend expects field name "images" for array uploads
      formData.append('images', file);
    });
    formData.append('folder', folder);

    const response = await api.post('/upload/multiple', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data.data;
  },

  async deleteFile(url) {
    const response = await api.delete('/upload', {
      data: { url }
    });

    return response.data;
  }
};
