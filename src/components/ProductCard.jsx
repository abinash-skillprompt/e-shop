import { useQuery } from '@tanstack/react-query';

const ProductCard = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => {
      try {
        const dataFetch = await fetch('https://fakestoreapi.com/products');

        if (dataFetch.ok) {
          const jsonData = await dataFetch.json();

          return jsonData;
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.log(error);
      }
    },

    queryKey: ['getProducts'],
  });

  // Check if loading

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        Loading...
      </div>
    );
  }

  // Check if error

  if (isError) {
    console.log('Error while fetching data');

    return <div>Error fetching data</div>;
  }

  // Check if data is undefined or null

  if (!data) {
    console.log('Data is undefined or null');

    return <div>Data </div>;
  }
  return (
    <div className="bg-[F8F8F8] w-[250px] h-[300px] p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {/* Image Container */}
      <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-lg mb-4">
        <img
          src="https://static.vecteezy.com/system/resources/previews/011/794/199/non_2x/fabric-armchair-soft-cushion-with-metal-leg-3d-rendering-modern-interior-design-for-living-room-free-png.png"
          alt="chair"
          className="w-full h-full object-contain"
        />
      </div>
      {/* Product Details */}
      <p className="text-lg font-semibold text-gray-800">Chair</p>
      <p className="text-md text-gray-600">Rs. 25,000</p>
    </div>
  );
};

export default ProductCard;
