import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '@/pages/Home/HomePage';
import DrinkPage from '@/pages/Drinks/DrinkPage';
import CartPage from '@/pages/Cart/CartPage';
import IceCreamPage from '@/pages/IceCreams/IceCreamPage';
import { CartProvider } from './context/CartContext';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/drinks" element={<DrinkPage />} />
          <Route path="/icecreams" element={<IceCreamPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </CartProvider>
      <Toaster position="bottom-right" />
    </BrowserRouter>
  );
}

export default App;
