import { BsShopWindow } from 'react-icons/bs';
import { FaUserLarge } from 'react-icons/fa6';
import { PiShoppingCartBold } from 'react-icons/pi';

const NavBar = () => {
  return (
    <nav className="flex flex-wrap justify-between items-center h-16 bg-white font-poppins px-4 md:px-12">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <BsShopWindow className="h-6 w-6" />
        <h1 className="text-xl md:text-2xl font-semibold tracking-wide leading-6">
          E-Shop
        </h1>
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-4 sm:gap-6 md:gap-10 text-sm sm:text-base md:text-lg">
        <li className="cursor-pointer hover:text-gray-600">Home</li>
        <li className="cursor-pointer hover:text-gray-600">About</li>
        <li className="cursor-pointer hover:text-gray-600">Contact</li>
      </ul>

      {/* Icons */}
      <div className="flex gap-4 sm:gap-6 md:gap-10 items-center">
        <FaUserLarge className="h-4 w-4 sm:h-5 sm:w-5 cursor-pointer" />
        <PiShoppingCartBold className="h-4 w-4 sm:h-5 sm:w-5 cursor-pointer" />
      </div>
    </nav>
  );
};

export default NavBar;
