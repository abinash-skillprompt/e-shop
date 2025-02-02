import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useHandleDelete = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete product');
      }
      return response.json();
    },
    onMutate: async (id) => {
      await queryClient.cancelQueries(['getProducts']);

      const previousProducts = queryClient.getQueryData(['getProducts']);
      queryClient.setQueryData(['getProducts'], (old) =>
        old.filter((product) => product.id !== id)
      );

      return { previousProducts };
    },
    onError: (err, id, context) => {
      queryClient.setQueryData(['getProducts'], context.previousProducts);
    },
    onSuccess: () => {
      alert('Product deleted successfully');
    },
  });
};
