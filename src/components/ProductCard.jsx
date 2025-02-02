import PropTypes from 'prop-types';
import { IoMdAdd } from 'react-icons/io';
import { RxCross2, RxUpdate } from 'react-icons/rx';
import useHandleUpdate from '../apis/useHandleUpdate';
import useCartStore from '../store/useCartStore';

// const ProductCard = ({ product, onDelete }) => {
//   // const queryClient = useQueryClient();

//   const deleteMutation = useMutation({
//     mutationFn: async () => {
//       const response = await fetch(
//         `https://fakestoreapi.com/products/${product.id}`,
//         {
//           method: 'DELETE',
//         }
//       );
//       if (!response.ok) {
//         throw new Error('Failed to delete product');
//       }
//       return response.json();
//     },
//     onSuccess: () => {
//       // No need to refetch; the product is already removed from UI
//       console.log('Product deleted successfully');
//       alert('Product deleted successfully');
//     },
//   });

//   const handleDelete = () => {
//     // Immediately remove product from UI
//     onDelete(product.id);

//     // Send API call to delete the product
//     deleteMutation.mutate();
//   };

//   return (
//     <div className=" w-[250px] h-[300px] p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
//       {/* Image Container */}
//       <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-lg mb-4">
//         <img
//           src={product.image}
//           alt={product.description}
//           className="w-full h-full object-contain "
//         />
//       </div>
//       {/* Product Details */}

//       <p className="text-lg font-semibold text-gray-800">{product.title}</p>
//       <div className="flex items-center justify-between pt-1">
//         <p className="text-md text-gray-600">$ {product.price}</p>
//         <div className="flex items-center gap-1 justify-center ">
//           <button>
//             <IoMdAdd className="w-5 h-5 cursor-pointer" />
//           </button>
//           <button onClick={handleDelete}>
//             <RxCross2 className="text-red-500 w-5 h-5 cursor-pointer" />
//           </button>
//           <button>
//             <RxUpdate className="w-4 h-4 cursor-pointer" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

const ProductCard = ({ product, onDelete }) => {
  const handleUpdate = useHandleUpdate();

  const addToCart = useCartStore((state) => state.addToCart); // Get the addToCart function from the store

  const onUpdateClick = () => {
    // calling the update mutation with the existing product
    handleUpdate(product);
  };

  const handleAddToCart = () => {
    // Add the product to the cart
    addToCart(product);
    alert('Product added to cart!');
  };

  return (
    <div className="w-[250px] h-[300px] p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
      {/* Image Container */}
      <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-lg mb-4">
        <img
          src={product.image}
          alt={product.description}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Product Details */}
      <p className="text-lg font-semibold text-gray-800">{product.title}</p>
      <div className="flex items-center justify-between pt-1">
        <p className="text-md text-gray-600">$ {product.price}</p>
        <div className="flex items-center gap-1 justify-center">
          <button onClick={handleAddToCart}>
            <IoMdAdd className="w-5 h-5 cursor-pointer hover:text-blue-500 transition-all duration-150" />
          </button>
          <button onClick={() => onDelete(product.id)}>
            <RxCross2 className="text-red-400 hover:text-red-800 transition-all duration-150 w-5 h-5 cursor-pointer" />
          </button>
          <button onClick={onUpdateClick}>
            <RxUpdate className="w-4 h-4 cursor-pointer  hover:text-green-500 transition-all duration-150" />
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ProductCard;
