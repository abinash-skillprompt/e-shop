import { BsShopWindow } from 'react-icons/bs';
import { FaUserLarge } from 'react-icons/fa6';
import { PiShoppingCartBold } from 'react-icons/pi';
import { NavLink } from 'react-router-dom';
import useCartStore from '../store/useCartStore';

const NavBar = () => {
  const cart = useCartStore((state) => state.cart);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <nav className="flex flex-wrap justify-between items-center h-16 bg-white font-poppins px-4 md:px-12">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <NavLink>
          <BsShopWindow className="h-6 w-6" />
        </NavLink>
        <h1 className="text-xl md:text-2xl font-semibold tracking-wide leading-6">
          <NavLink to="/">E-Shop</NavLink>
        </h1>
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-4 sm:gap-6 md:gap-10 text-sm sm:text-base md:text-lg">
        <NavLink to="/">
          <li className="cursor-pointer hover:text-gray-600">Home</li>
        </NavLink>
        <NavLink to="/about">
          <li className="cursor-pointer hover:text-gray-600">About</li>
        </NavLink>
        <NavLink to="/contact">
          <li className="cursor-pointer hover:text-gray-600">Contact</li>
        </NavLink>
      </ul>

      {/* Icons */}
      <div className="flex gap-4 sm:gap-6 md:gap-10 items-center">
        <NavLink to="#">
          <FaUserLarge className="h-4 w-4 sm:h-5 sm:w-5 cursor-pointer" />
        </NavLink>

        <NavLink to="/cart" className="relative">
          <PiShoppingCartBold className="h-4 w-4 sm:h-5 sm:w-5 cursor-pointer" />
          {/* Display the number of items in the cart */}
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
