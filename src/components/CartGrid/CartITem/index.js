import React from "react";
import styled from "styled-components";

const CartItemContainer = styled.div`
  display: flex;
`;

const CartItemColumn = styled.div`
  text-align: center;
  flex-grow: ${(props) => props.size || 1};
`;
const CartITemTitle = styled.b`
  display: block;
`;

const CartITem = ({ id, img, price, name, quantity, updateQuantity }) => {
  function setProductQuantity(event, id) {
    const productQuantity = parseFloat(event.target.value);
    updateQuantity(id, productQuantity);
  }

  return (
    <CartItemContainer>
      <CartItemColumn size={2}>
        <CartITemTitle>Product details</CartITemTitle>
        <CartItemContainer style={{ maxWidth: "400px" }}>
          <CartItemColumn size={2}>
            <img src={img} alt="asa" width="110px" />
          </CartItemColumn>
          <CartItemColumn size={8}>{name}</CartItemColumn>
        </CartItemContainer>
      </CartItemColumn>
      <CartItemColumn>
        <CartITemTitle>Quantity</CartITemTitle>
        <input
          name="quantity"
          type="number"
          style={{ width: "40px", display: "block", margin: "auto" }}
          value={quantity}
          onChange={(event) => setProductQuantity(event, id)}
        />
        <button>Remove</button>
      </CartItemColumn>
      <CartItemColumn>
        <CartITemTitle>Price</CartITemTitle>${price.toFixed(2)}
      </CartItemColumn>
      <CartItemColumn>
        <CartITemTitle>Total</CartITemTitle>${(price * quantity).toFixed(2)}
      </CartItemColumn>
    </CartItemContainer>
  );
};

export default CartITem;
