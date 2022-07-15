import React from 'react';
import CartITem from './CartITem';
import CartSummary from './CartSummary';
import { CardGrid, CardGridContainer, CardGridTitle } from './CartGrid.styles';
import { useSelector } from 'react-redux';
import { getCartProductsSelector } from '../../redux/slices/cartSlice';

const CartGrid = () => {
  const cartProducts = useSelector(getCartProductsSelector);
  const cartItemsElements = cartProducts.map((product) => {
    return (
      <CartITem
        img={product.images[0]}
        key={product.id}
        id={product.id}
        price={product.price}
        name={product.name}
        quantity={product.quantity}
      />
    );
  });

  const gridContend = cartItemsElements.length ? (
    cartItemsElements
  ) : (
    <h3>0 products in the cart</h3>
  );

  return (
    <CardGridContainer>
      <CardGridTitle>Shopping Cart</CardGridTitle>
      <CardGrid>{gridContend}</CardGrid>
      <CartSummary cartProducts={cartProducts} />
    </CardGridContainer>
  );
};

export default CartGrid;
