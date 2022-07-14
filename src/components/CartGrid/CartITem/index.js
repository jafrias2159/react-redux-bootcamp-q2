import React from "react";
import {
  CardItemButton,
  CartItemColumn,
  CartItemContainer,
  CartItemDetailsContainer,
  CartItemImg,
  CartItemInput,
  CartITemTitle,
} from "./CardItem.styles";

const CartITem = ({ id, img, price, name, quantity, updateQuantity }) => {
  const setProductQuantity = (event, id) => {
    const productQuantity = parseInt(event.target.value);
    updateQuantity(id, productQuantity);
  };

  return (
    <CartItemContainer>
      <CartItemColumn>
        <CartITemTitle>Product details</CartITemTitle>
        <CartItemDetailsContainer>
          <CartItemImg src={img} alt={name} />
          <p>{name}</p>
        </CartItemDetailsContainer>
      </CartItemColumn>
      <CartItemColumn>
        <CartITemTitle>Quantity</CartITemTitle>
        <CartItemInput
          name="quantity"
          type="number"
          value={quantity}
          onChange={(event) => setProductQuantity(event, id)}
        />
        <CardItemButton>Remove</CardItemButton>
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
