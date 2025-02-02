// import NavBar from '../components/NavBar';
// import backgroundImage from '../assets/images/backgroundImage.png';
// import { BsShopWindow } from 'react-icons/bs';
// import ProductCard from '../components/ProductCard';
// import BenefitsSection from '../components/BenefitsSection';
// import Footer from '../components/Footer';
// import { useQuery } from '@tanstack/react-query';

// const Home = () => {
//   const {
//     data: products,
//     isLoading,
//     isError,
//   } = useQuery({
//     queryKey: ['getProducts'],
//     queryFn: async () => {
//       try {
//         const dataFetch = await fetch('https://fakestoreapi.com/products');

//         if (dataFetch.ok) {
//           const jsonData = await dataFetch.json();
//           console.log(jsonData);

//           return jsonData;
//         } else {
//           throw new Error('Failed to fetch data');
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     },
//   });

//   // Check if loading

//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center h-[100vh]">
//         Loading...
//       </div>
//     );
//   }

//   // Check if error

//   if (isError) {
//     console.log('Error while fetching data');

//     return <div>Error fetching data</div>;
//   }

//   // Check if data is undefined or null

//   if (!data) {
//     console.log('Data is undefined or null');

//     return <div>Data </div>;
//   }

//   const handleDelete = (id) => {
//     // Remove the product from local state
//     setProducts((prevProducts) =>
//       prevProducts.filter((product) => product.id !== id)
//     );
//   };
//   return (
//     <div className="w-full max-w-screen-xl mx-auto">
//       {/* {Navigation Bar} */}
//       <NavBar />

//       {/* Background Image and Title */}
//       <div className="relative w-full">
//         <img
//           src={backgroundImage}
//           alt="background image of home page"
//           className="w-full h-64 md:h-80 lg:h-96 object-cover"
//         />
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
//           <BsShopWindow className="h-8 w-8 md:h-10 md:w-10 text-gray-700" />
//           <h2 className="text-2xl md:text-3xl font-bold tracking-wide mt-2 text-gray-700">
//             E-Shop
//           </h2>
//         </div>
//       </div>

//       {/* Product Container */}
//       <div className="px-6 md:px-8 lg:px-12 my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {data.map((product) => (
//           <ProductCard
//             key={product.id}
//             product={product}
//             onDelete={handleDelete}
//           />
//         ))}
//       </div>

//       {/* {Benefits Section} */}
//       <BenefitsSection />

//       {/* {Footer Section} */}
//       <Footer />
//     </div>
//   );
// };

// export default Home;

import NavBar from '../components/NavBar';
import backgroundImage from '../assets/images/backgroundImage.png';
import { BsShopWindow } from 'react-icons/bs';
import ProductCard from '../components/ProductCard';
import BenefitsSection from '../components/BenefitsSection';
import Footer from '../components/Footer';
import { useQuery } from '@tanstack/react-query';
import { useHandleDelete } from '../apis/useHandleDelete';

const Home = () => {
  // Fetch products using useQuery
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['getProducts'],
    queryFn: async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) throw new Error('Failed to fetch products');
      return response.json();
    },
    staleTime: Infinity, // Prevent refetching unless explicitly required
  });

  // Use the custom hook for deletion
  const deleteMutation = useHandleDelete();

  const handleDelete = (id) => {
    deleteMutation.mutate(id);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        Loading...
      </div>
    );
  }

  if (isError) {
    return <div className="text-center text-red-500">Error fetching data</div>;
  }

  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <NavBar />
      {/* Background Image and Title */}
      <div className="relative w-full">
        <img
          src={backgroundImage}
          alt="background image of home page"
          className="w-full h-64 md:h-80 lg:h-96 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <BsShopWindow className="h-8 w-8 md:h-10 md:w-10 text-gray-700" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide mt-2 text-gray-700">
            E-Shop
          </h2>
        </div>
      </div>

      {/* Product List */}
      <div className="px-6 md:px-8 lg:px-12 my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDelete={handleDelete}
          />
        ))}
      </div>

      <BenefitsSection />
      <Footer />
    </div>
  );
};

export default Home;
