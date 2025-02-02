import { create } from 'zustand';
import { persist } from 'zustand/middleware'; // Import the persist middleware

// Zustand store for managing cart state
const useCartStore = create(
  persist(
    (set) => ({
      cart: [], // Array to store products in the cart

      // Add a product to the cart
      addToCart: (product) =>
        set((state) => {
          // Check if the product already exists in the cart
          const existingProduct = state.cart.find(
            (item) => item.id === product.id
          );
          if (existingProduct) {
            // If the product exists, increase its quantity
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          } else {
            // If the product doesn't exist, add it to the cart with quantity 1
            return { cart: [...state.cart, { ...product, quantity: 1 }] };
          }
        }),

      // Remove a product from the cart
      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        })),

      // Update the quantity of a product in the cart
      updateQuantity: (productId, quantity) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          ),
        })),
    }),
    {
      name: 'cart-storage', // Unique name for the localStorage key
      getStorage: () => localStorage, // Use localStorage for persistence
    }
  )
);

export default useCartStore;
