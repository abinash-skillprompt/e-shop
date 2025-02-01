import { BsShopWindow } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-10 px-6 mx-5">
      <div className="max-w-7xl mx-auto">
        {/* Main Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Logo and Address */}
          <div>
            <div className="flex items-center gap-2">
              <BsShopWindow className="h-8 w-8" />
              <h2 className="text-2xl font-semibold">E-Shop</h2>
            </div>
            <p className="text-[#9F9F9F] text-base mt-2">
              M-square Building, Moti Marga, <br />
              Rajmarga Chauraha, Butwal-09, Nepal
            </p>
          </div>

          {/* Links Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Links */}
            <div>
              <h3 className="text-[#9F9F9F] font-semibold text-lg">Links</h3>
              <ul className="mt-2 space-y-1 text-black">
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h3 className="text-[#9F9F9F] font-semibold text-lg">About</h3>
              <ul className="mt-2 space-y-1 text-black ">
                <li>Policies</li>
                <li>Investors</li>
                <li>Careers</li>
                <li>Privacy policy</li>
              </ul>
            </div>

            {/* Sell */}
            <div>
              <h3 className="text-[#9F9F9F] font-semibold text-lg">Sell</h3>
              <ul className="mt-2 space-y-1 text-black">
                <li>Sell on E-Shop</li>
                <li>Forums</li>
                <li>Teams</li>
                <li>Affiliates</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="my-6 border-gray-300" />

        {/* Copyright */}
        <p className="text-center text-[#9F9F9F] text-sm">
          2025 E-Shop. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
