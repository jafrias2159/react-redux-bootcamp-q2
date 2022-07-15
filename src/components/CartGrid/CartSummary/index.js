import React from 'react';
import { CartSummaryContainer, CartSummaryButton } from './CartSummary.styles';
import { useGetTotals } from './hooks';

const CartSummary = ({ cartProducts }) => {
  const { totalPrice, totalQuantity } = useGetTotals(cartProducts);
  const dynamicCheckoutButton = cartProducts.length ? (
    <CartSummaryButton>Checkout</CartSummaryButton>
  ) : (
    ''
  );
  return (
    <CartSummaryContainer>
      <h4>Summary</h4>
      <hr />
      <p>Items: {totalQuantity}</p>
      <hr />
      <p>Total Cost</p>
      <p>${totalPrice}</p>
      {dynamicCheckoutButton}
    </CartSummaryContainer>
  );
};

export default CartSummary;
