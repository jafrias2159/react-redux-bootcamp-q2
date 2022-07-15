import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Products';
import { Grid } from '../components/ProductsGrid/ProductsGrid.style';
import {
  checkoutSelector,
  emptyCar,
  getCartProductsSelector,
} from '../redux/slices/cartSlice';

const Order = () => {
  const checkoutData = useSelector(checkoutSelector);
  const selectedProducts = useSelector(getCartProductsSelector);
  const dispatch = useDispatch();
  const ref = useRef(false);

  useEffect(() => {
    return () => {
      if (ref.current) {
        dispatch(emptyCar());
      }
      ref.current = true;
    };
  }, []);

  const Cards = selectedProducts.map((product) => {
    return (
      <Product
        img={product.images[0]}
        id={product.id}
        key={product.id}
        price={product.price}
        name={product.name}
        category={product.categories[0]}
        showButton={false}
      />
    );
  });

  return (
    <div style={{ margin: 'auto', width: '75%' }}>
      <h3>Order Details</h3>
      <pre>{JSON.stringify(checkoutData, null, 4)}</pre>
      <h3>Your proucts</h3>
      <Grid>{Cards}</Grid>
    </div>
  );
};

export default Order;
