import { useCart } from '@/context/CartContext';
import Layout from '@/layouts/Layout';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { APP_BG_COLOR } from '@/constants/app';
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/solid';
import TotalValueComponent from '@/pages/Cart/components/TotalValueComponent';

function CartPage() {
  const navigator = useNavigate();
  const {
    cartItems,
    handleReduce,
    handleAdd,
    removeFromCart,
    totalItem,
    totalCost,
    clearCart,
  } = useCart();
  useEffect(() => {
    if (cartItems.length == 0) {
      navigator('/');
    }
  }, [cartItems]);

  const handleCheckout = () => {
    clearCart();
    navigator('/');
  };
  return (
    <Layout title="Cart">
      <div className="w-full flex flex-row">
        <div className="w-2/3 mr-2">
          <h1 className="font-semibold text-4xl border-b-2 pb-4">Item List</h1>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className={`${APP_BG_COLOR} flex flex-col w-full items-start justify-center p-4 border-b-2`}
            >
              <div className="w-full flex flex-row items-start justify-between">
                <div className="w-full flex flex-row items-start">
                  <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded-md">
                    <img src={item.image} className="w-[80%]" alt="" />
                  </div>
                  <div className="ml-2 w-full h-[80px] max-h-full flex flex-col items-start justify-between">
                    <span className="text-black font-semibold text-2xl">
                      {item.name}
                    </span>
                    <div className="flex flex-row text-center rounded-md overflow-hidden">
                      <span
                        className="p-2 text-lg font-semibold text-white bg-red-600 cursor-pointer"
                        onClick={() => handleReduce(item)}
                      >
                        <MinusIcon className="w-4 h-4" />
                      </span>
                      <span className="px-2 text-lg font-semibold">
                        {item.count}
                      </span>
                      <span
                        className="p-2 text-lg font-semibold text-white bg-green-600 cursor-pointer"
                        onClick={() => handleAdd(item)}
                      >
                        <PlusIcon className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[80px] max-h-full px-2 flex flex-col items-end justify-between">
                  <span className="flex text-blue-600 text-2xl font-bold">
                    {item.price} $
                  </span>
                  <TrashIcon
                    className="text-red-500 w-8 h-8 cursor-pointer"
                    onClick={() => removeFromCart(item.id)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/3 h-full px-4 sticky top-20">
          <h1 className="font-bold text-2xl mb-6">Summary</h1>
          <TotalValueComponent
            totalName={'Total Item'}
            totalValue={totalItem}
          />
          <TotalValueComponent
            totalName={'Total Item Cost'}
            totalValue={totalCost}
          />
          <TotalValueComponent totalName={'Tax Cost'} totalValue={0} />
          <TotalValueComponent
            totalName={'Total Cost'}
            totalValue={totalCost}
            last={true}
          />
          <div className="w-full flex mt-4">
            <span
              className="w-full p-4 text-center bg-gray-500 text-white rounded-full font-semibold text-xl cursor-pointer"
              onClick={() => handleCheckout()}
            >
              Checkout
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CartPage;
