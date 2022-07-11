import React from "react";
import {CartSummaryContainer } from "./CartSummary.styles";

const CartSummary = ({ cartProducts }) => {
  const totalCost = cartProducts.reduce((accumulator, object) => {
    return accumulator + object.total;
  }, 0);

  return (
    <CartSummaryContainer>
      <h4> Summary</h4>
      <hr />
      <p>Items: {cartProducts.length}</p>
      <hr />
      <p>Total Cost</p>
      <p>${totalCost.toFixed(2)}</p>
    </CartSummaryContainer>
  );
};

export default CartSummary;
