import React from 'react';
import { APP_COLOR, PRIMARY_COLOR } from '@/constants/app';
import { useCart } from '@/context/CartContext';
function ListPage({ list }) {
  const { addToCart, cartItems } = useCart();
  return (
    <div className="grid grid-cols-5 gap-6 mt-4">
      {list.map((item) => (
        <div
          key={item.id}
          className={`p-4 border-2 flex flex-col items-center rounded-md ${APP_COLOR}  `}
        >
          <img src={item.image} alt="" className="w-[80%]" />
          <div className="w-full flex sm:flex-wrap items-center justify-between p-2">
            <span className="text-xl w-5/6 text-gray-400 font-semibold">
              {item.name}
            </span>
            <span className="text-xl w-1/6 text-blue-400 font-semibold">
              {item.price} $
            </span>
          </div>
          <span
            className={`flex w-full mt-4 items-center justify-center border-2 py-2 rounded-md font-semibold text-lg text-white ${PRIMARY_COLOR} cursor-pointer`}
            onClick={() => addToCart(item)}
          >
            Add to Cart
          </span>
        </div>
      ))}
    </div>
  );
}

export default ListPage;
