import React from 'react';
import { CartSummaryContainer, CartSummaryButton } from './CartSummary.styles';
import { useGetTotals } from './hooks';

const CartSummary = ({ cartProducts }) => {
  const { totalPrice, totalQuantity } = useGetTotals(cartProducts);

  return (
    <CartSummaryContainer>
      <h4>Summary</h4>
      <hr />
      <p>Items: {totalQuantity}</p>
      <hr />
      <p>Total Cost</p>
      <p>${totalPrice}</p>
      <CartSummaryButton>Checkout</CartSummaryButton>
    </CartSummaryContainer>
  );
};

export default CartSummary;
