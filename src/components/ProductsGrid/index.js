import React, { useEffect, useRef } from 'react';
import Product from '../Products/';
import { Grid } from './ProductsGrid.style';
import { useDispatch, useSelector } from 'react-redux';
import {
  allProductsSelector,
  fetchAllProducts,
} from '../../redux/slices/productsSlice';

const ProductsGrid = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(allProductsSelector);
  const first = useRef(false);

  useEffect(() => {
    if (!first.current) {
      dispatch(fetchAllProducts());
      first.current = true;
    }
  }, [dispatch]);

  const Cards = products.map((product) => {
    return (
      <Product
        img={product.images[0]}
        id={product.id}
        key={product.id}
        price={product.price}
        name={product.name}
        category={product.categories[0]}
      />
    );
  });

  return <Grid>{Cards}</Grid>;
};

export default ProductsGrid;
