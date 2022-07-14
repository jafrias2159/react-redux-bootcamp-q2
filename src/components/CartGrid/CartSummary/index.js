import React, { useMemo } from "react";
import { CartSummaryContainer, CartSummaryButton } from "./CartSummary.styles";

const CartSummary = ({ cartProducts }) => {
  const totalCost = useMemo(
    () =>
      cartProducts.reduce((accumulator, product) => {
        return accumulator + product.total;
      }, 0),
    [cartProducts]
  );

  const totalProducts = useMemo(
    () =>
      cartProducts.reduce((accumulator, product) => {
        return accumulator + product.quantity;
      }, 0),
    [cartProducts]
  );

  return (
    <CartSummaryContainer>
      <h4>Summary</h4>
      <hr />
      <p>Items: {totalProducts}</p>
      <hr />
      <p>Total Cost</p>
      <p>${totalCost.toFixed(2)}</p>
      <CartSummaryButton>Checkout</CartSummaryButton>
    </CartSummaryContainer>
  );
};

export default CartSummary;
