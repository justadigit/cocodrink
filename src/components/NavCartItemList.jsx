import { useCart } from '@/context/CartContext';
import Lottie from 'lottie-react';
import EMPTYCART from '@/assets/lottie/emptyCart.json';
import NavCartItem from '@/components/NavCartItem';
import { useNavigate } from 'react-router-dom';
function NavCartItemList() {
  const { cartItems, totalCost } = useCart();
  const navigator = useNavigate();
  return (
    <div
      className={`flex flex-col items-center overflow-auto ${
        cartItems.length == 0 && 'h-[400px]'
      }  max-h-[500px]`}
    >
      {cartItems.length == 0 && (
        <div className="w-full h-full p-4">
          <Lottie animationData={EMPTYCART} loop={true} />
        </div>
      )}
      {cartItems.map((item, index) => (
        <NavCartItem item={item} key={index} />
      ))}
      {cartItems.length > 0 && (
        <div className="w-full bg-white sticky bottom-0 flex flex-col">
          <div className="w-full sticky p-2 flex flex-row items-center justify-between">
            <span className="text-black">Total Cost</span>
            <span className="text-blue-600">{totalCost} $</span>
          </div>
          <span
            className="mt-3 w-full flex justify-center p-2 bg-blue-600 text-white cursor-pointer"
            onClick={() => navigator('/cart')}
          >
            Go to Receive
          </span>
        </div>
      )}
    </div>
  );
}

export default NavCartItemList;
