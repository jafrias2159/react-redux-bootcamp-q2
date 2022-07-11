import React from "react";
import styled from "styled-components";

const CartSummary = ({ cartProducts }) => {
  const CartSummaryContainer = styled.div`
    background-color: beige;
    text-align: center;
    padding: 20px;
  `;
  let totalCost = 0;
  cartProducts.forEach((product) => {
    totalCost += product.total;
  });
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
