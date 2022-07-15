import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '../../components/ProductsGrid/ProductsGrid.style';
import Product from '../Products';
import {
  checkoutSelector,
  emptyCar,
  getCartProductsSelector,
} from '../../redux/slices/cartSlice';
import { OrderDetailsContainer } from './orderDetails.style';

const OrderDeatils = () => {
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
    <OrderDetailsContainer>
      <h3>OrderDeatils Details</h3>
      <pre>{JSON.stringify(checkoutData, null, 4)}</pre>
      <h3>Your proucts</h3>
      <Grid>{Cards}</Grid>
    </OrderDetailsContainer>
  );
};

export default OrderDeatils;
