import React, { Fragment } from 'react';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '@/constants/app';
import LOGO from '@/assets/logo/logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { useCart } from '@/context/CartContext';
import NavCartItemList from '@/components/NavCartItemList';
function Navbar() {
  const { totalItem } = useCart();
  const navigator = useNavigate();
  const location = useLocation();
  console.log(location);
  return (
    <div
      className={`w-full ${PRIMARY_COLOR} ${SECONDARY_COLOR} px-40 py-4 flex justify-between items-center z-[10]`}
    >
      <div
        className="flex items-center cursor-pointer"
        onClick={() => navigator('/')}
      >
        <img src={LOGO} alt="" className="mr-2 h-10 w-10" />
      </div>
      <div className="flex items-center text-lg font-semibold">
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link to="/drinks" className="mr-4">
          Drink
        </Link>
        <Link to="/icecreams" className="mr-4">
          Ice-Cream
        </Link>
        {location.pathname !== '/cart' && (
          <div>
            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button className="relative w-full justify-center">
                <span className="absolute -top-2 -left-2 text-sm font-normal text-white bg-blue-600 px-1 rounded-md">
                  {totalItem}
                </span>
                Cart
              </Menu.Button>

              {/* Use the `Transition` component. */}
              <Transition
                as={Fragment}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Menu.Items className="absolute -right-4 mt-2 w-[400px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg overflow-hidden z-20">
                  <NavCartItemList />
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
