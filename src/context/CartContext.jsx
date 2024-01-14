import { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalItem, setTotalItem] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  //add to cart
  const addToCart = (newItem) => {
    const initialNewItem = newItem;

    const existingItem = cartItems.find((item) => item.id === newItem.id);

    if (existingItem) {
      //if the item exists , update count and price
      const updatedItems = cartItems.map((item) =>
        item.id === newItem.id
          ? {
              ...item,
              count: item.count + newItem.count,
              price: (item.count + 1) * initialNewItem.price,
            }
          : item
      );
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, newItem]);
    }
  };

  //updatedCartItem
  const updatedCartItem = (changedItem) => {
    const updatedItems = cartItems.map((item) =>
      item.id == changedItem.id
        ? { ...item, count: changedItem.count, price: changedItem.price }
        : item
    );

    setCartItems(updatedItems);
  };

  //remove form cart
  const removeFromCart = (itemId) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  //handle reduce
  const handleReduce = (cartItem) => {
    const initial = cartItem;

    if (cartItem.count == 1) {
      removeFromCart(cartItem.id);
    } else {
      let newCount = cartItem.count - 1;
      let newPrice = initial.price - initial.price / initial.count;

      updatedCartItem({ ...cartItem, count: newCount, price: newPrice });
    }
  };

  //handle Add
  const handleAdd = (cartItem) => {
    const initial = cartItem;
    let newCount = cartItem.count + 1;
    let newPrice = initial.price + initial.price / initial.count;
    updatedCartItem({ ...cartItem, count: newCount, price: newPrice });
  };

  //get totalItem
  const getTotalItem = () => {
    return cartItems.reduce((total, item) => total + item.count, 0);
  };

  //get total cost
  const getTotalCost = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  //clear all cart data

  const clearCart = () => {
    toast.success('Check Out Successfully!Thank!');
    setCartItems([]);
  };

  useEffect(() => {
    const newTotalItems = getTotalItem();
    setTotalItem(newTotalItems);

    const newTotalCost = getTotalCost();
    setTotalCost(newTotalCost);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        totalItem,
        totalCost,
        handleReduce,
        handleAdd,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => {
  return useContext(CartContext);
};

export { CartProvider, useCart };
