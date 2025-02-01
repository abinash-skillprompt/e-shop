import NavBar from '../components/NavBar';
import backgroundImage from '../assets/images/backgroundImage.png';
import { BsShopWindow } from 'react-icons/bs';
import ProductCard from '../components/ProductCard';
import BenefitsSection from '../components/BenefitsSection';

const Home = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto">
      {/* {Navigation Bar} */}
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
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mt-2 text-gray-700">
            E-Shop
          </h2>
        </div>
      </div>

      {/* Product Container */}
      <div className="px-6 md:px-8 lg:px-12 my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 12 }).map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>

      {/* {Benefits Section} */}
      <BenefitsSection />
    </div>
  );
};

export default Home;
