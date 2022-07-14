import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productsOnCart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const selectedProduct = action.payload;
      const productOnCardIndex = state.productsOnCart.findIndex(
        (product) => product.id === selectedProduct.id
      );
      if (productOnCardIndex === -1) {
        state.productsOnCart.push({ ...action.payload, quantity: 1 });
      } else {
        state.productsOnCart[productOnCardIndex].quantity++;
      }
    },
    addNewProductQuantity(state, action) {
      const { selectedProduct, quantity } = action.payload;

      const productOnCardIndex = state.productsOnCart.findIndex(
        (product) => product.id === selectedProduct.id
      );
      state.productsOnCart[productOnCardIndex].quantity = quantity;
    },

    removeProduct(state, action) {
      const { selectedProduct } = action.payload;
      const products = state.productsOnCart.filter(
        (product) => product.id !== selectedProduct.id
      );
      state.productsOnCart = products;
    },
  },
});

export const { addToCart, addNewProductQuantity, removeProduct } =
  cartSlice.actions;
export const getCartProductsSelector = (state) => state.cart.productsOnCart;
export default cartSlice.reducer;
