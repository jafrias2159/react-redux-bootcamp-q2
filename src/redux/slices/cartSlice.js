import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const checkoutProducts = createAsyncThunk(
  'cart/checkoutProducts',
  async () => {
    const requestResponse = await fetch(
      'https://6x8prpit9f.execute-api.us-east-1.amazonaws.com/api/orders',
      {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'x-api-key': '94tOOmgSAz3V6Xe7f2cMuz6qjgrIXS2xq8Xbly00',
        },
      }
    );

    const dataResut = await requestResponse.json();
    return dataResut;
  }
);

const initialState = {
  productsOnCart: [],
  checkoutStatus: undefined,
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
    emptyCar(state) {
      state.productsOnCart = [];
      state.checkoutStats = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(checkoutProducts.fulfilled, (state, action) => {
      state.checkoutStatus = { ...action.payload };
    });
  },
});

export const { addToCart, addNewProductQuantity, removeProduct, emptyCar } =
  cartSlice.actions;
export const getCartProductsSelector = (state) => state.cart.productsOnCart;
export const checkoutSelector = (state) => state.cart.checkoutStatus;
export default cartSlice.reducer;
