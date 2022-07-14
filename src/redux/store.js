import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';
import productsSlice from './slices/productsSlice';
import userSlice from './slices/userSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice,
    products: productsSlice,
  },
});

export default store;
