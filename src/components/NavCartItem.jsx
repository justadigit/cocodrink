import React from 'react';
import { APP_BG_COLOR } from '@/constants/app';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';
import { useCart } from '@/context/CartContext';
export default function NavCartItem({ item }) {
  const { handleReduce, handleAdd } = useCart();
  return (
    <div
      className={`${APP_BG_COLOR} flex flex-col w-full items-center justify-center p-4 border-b-2`}
    >
      <div className="w-full flex flex-row items-center justify-between">
        <img src={item.image} alt="" className="w-12 h-12" />
        <div className="grid grid-cols-3 text-center rounded-sm overflow-hidden">
          <span
            className="p-2 text-lg font-semibold text-white bg-red-600 cursor-pointer"
            onClick={() => handleReduce(item)}
          >
            <MinusIcon className="w-4 h-4" />
          </span>
          <span className="px-2 text-lg font-semibold">{item.count}</span>
          <span
            className="p-2 text-lg font-semibold text-white bg-green-600 cursor-pointer"
            onClick={() => handleAdd(item)}
          >
            <PlusIcon className="w-4 h-4" />
          </span>
        </div>
      </div>
      <div className="w-full px-2 flex flex-row items-center justify-between">
        <span className="text-black">{item.name}</span>
        <span className="text-blue-600">{item.price} $</span>
      </div>
    </div>
  );
}
