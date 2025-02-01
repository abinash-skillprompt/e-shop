import NavBar from '../components/NavBar';
import backgroundImage from '../assets/images/backgroundImage.png';
import BenefitsSection from '../components/BenefitsSection';
import { PiShoppingCartBold } from 'react-icons/pi';
import Footer from '../components/Footer';

const Cart = () => {
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
          {/* <BsShopWindow className="h-8 w-8 md:h-10 md:w-10 text-gray-700" /> */}
          <PiShoppingCartBold className="h-8 w-8 md:h-10 md:w-10 text-gray-700" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide mt-2 text-gray-700">
            Cart
          </h2>
        </div>
      </div>

      {/* {Benefits Section} */}
      <BenefitsSection />

      {/* {Footer Section} */}
      <Footer />
    </div>
  );
};

export default Cart;
