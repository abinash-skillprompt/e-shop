import { useMutation } from '@tanstack/react-query';

const useHandleUpdate = () => {
  const updateMutation = useMutation({
    mutationFn: async (productData) => {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productData.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(productData),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to update the product');
      }

      return response.json();
    },
    onSuccess: (data) => {
      console.log('Product updated successfully:', data);
      alert('Product updated successfully!');
    },
    onError: (error) => {
      console.error('Error updating product:', error);
      alert('Failed to update the product.');
    },
  });

  return updateMutation.mutate;
};

export default useHandleUpdate;
