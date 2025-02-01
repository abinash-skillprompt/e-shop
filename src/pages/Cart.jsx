import NavBar from '../components/NavBar';
import backgroundImage from '../assets/images/backgroundImage.png';
import BenefitsSection from '../components/BenefitsSection';
import { PiShoppingCartBold } from 'react-icons/pi';
import Footer from '../components/Footer';
import { MdDelete } from 'react-icons/md';

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

      {/* Product || Quantity || Subtotal */}
      {/* <div className="flex justify-between items-center bg--[#F4F4F4] py-2 mb-4 mx-10 text-lg">
        <span className="font-bold text-lg">Product</span>
        <span className="font-bold text-lg">Quantity</span>
        <span className="font-bold text-lg">Subtotal</span>
      </div> */}
      <div className="grid grid-cols-3 gap-4 items-center bg-[#F4F4F4] pb-2 mb-4 mx-10">
        <span className="font-bold text-lg text-left">Product</span>
        <span className="font-bold text-lg text-center">Quantity</span>
        <span className="font-bold text-lg text-right">Subtotal</span>
      </div>

      {/* Product in Cart */}
      <div className="grid grid-cols-3 gap-4 items-center border-b border-black py-4 mx-10">
        <div className="flex items-center space-x-4">
          <img
            src="https://static.vecteezy.com/system/resources/previews/011/794/199/non_2x/fabric-armchair-soft-cushion-with-metal-leg-3d-rendering-modern-interior-design-for-living-room-free-png.png"
            alt="Plain Mirror"
            className="w-16 h-16 object-cover"
          />
          <div>
            <p className="font-semibold">Plain Mirror</p>
            <p className="text-gray-600">Rs. 25,000</p>
            <div className="flex items-center gap-1 ">
              <MdDelete className=" w-5 h-5" />
              <button className="text-sm  flex items-center">Delete</button>
            </div>
          </div>
        </div>
        <span className="font-medium text-center">1</span>
        <span className="font-medium text-right">Rs. 25,000</span>
      </div>

      <div className="grid grid-cols-3 gap-4 items-center border-b border-black py-4 mx-10">
        <div className="flex items-center space-x-4">
          <img
            src="https://static.vecteezy.com/system/resources/previews/011/794/199/non_2x/fabric-armchair-soft-cushion-with-metal-leg-3d-rendering-modern-interior-design-for-living-room-free-png.png"
            alt="Plain Mirror"
            className="w-16 h-16 object-cover"
          />
          <div>
            <p className="font-semibold">Plain Mirror</p>
            <p className="text-gray-600">Rs. 25,000</p>
            <div className="flex items-center gap-1 ">
              <MdDelete className=" w-5 h-5" />
              <button className="text-sm  flex items-center">Delete</button>
            </div>
          </div>
        </div>
        <span className="font-medium text-center">1</span>
        <span className="font-medium text-right">Rs. 25,000</span>
      </div>

      {/* Cart Items */}
      {/* {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="flex justify-between items-center border-b border-black py-4"
        >
          <div className="flex items-center space-x-4">
            <img
              src="/path/to/mirror-image.jpg" // Replace with the correct image path
              alt="Plain Mirror"
              className="w-16 h-16 object-cover"
            />
            <div>
              <p className="font-semibold">Plain Mirror</p>
              <p className="text-gray-600">Rs. 25,000</p>
              <button className="text-red-600 text-sm mt-1 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 6.5l-14 14M19.5 20.5l-14-14"
                  />
                </svg>
                Delete
              </button>
            </div>
          </div>
          <span className="font-medium">1</span>
          <span className="font-medium">Rs. 25,000</span>
        </div>
      ))} */}

      {/* {Benefits Section} */}
      <BenefitsSection />

      {/* {Footer Section} */}
      <Footer />
    </div>
  );
};

export default Cart;
