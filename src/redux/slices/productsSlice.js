import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { convertArrayToObjectByKey } from '../../utils/convertArray';

const fetchAllProducts = createAsyncThunk(
  'products/fetchAllProducts',
  async () => {
    const requestResponse = await fetch(
      'https://6x8prpit9f.execute-api.us-east-1.amazonaws.com/api/products',
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'x-api-key': '94tOOmgSAz3V6Xe7f2cMuz6qjgrIXS2xq8Xbly00',
        },
      }
    );

    const { items } = await requestResponse.json();
    return items;
  }
);

const initialState = {
  products: [],
  searchProducts: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      const items = convertArrayToObjectByKey(action.payload, 'id');
      state.products = action.payload;
      state.searchProducts = items;
    });
  },
});

export const allProductsSelector = (state) => state.products;
export const getProductById = (id) => (state) => {
  return state.products.searchProducts[id];
};
export { fetchAllProducts };
export default productsSlice.reducer;
