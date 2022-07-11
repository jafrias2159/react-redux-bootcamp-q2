import React, { useState } from "react";
import styled, { css } from "styled-components";
import CartITem from "./CartITem";
import mockData from "../../Mocks/data/products.json";
import CartSummary from "./CartSummary";

const CardGridContainer = styled.div`
  width: 90%;
  margin: 36px auto;
  border: 1px solid #c3c3c3;
`;

const CardGridTitle = styled.h2`
  display: block;
  text-align: center;
`;

const CardGridContent = styled.div`
  width: 95%;
  margin: 36px auto;
  border: 1px solid #c3c3c3;
  display: flex;
`;

const CardGridColumn = styled.div`
  flex-grow: 7;
  display: inline-block;
  ${(props) =>
    props.type === "small" &&
    css`
      flex-grow: 2;
    `}
`;

const {
  data: { products },
} = mockData;

const selectedProducts = products.items.slice(7, 12).map((product) => {
  return {
    ...product,
    quantity: 1,
    total: parseFloat(product.price),
  };
});

const CartGrid = () => {
  const [cartProducts, setCartProducts] = useState(selectedProducts);
  const cartItemsElements = cartProducts.map((product) => {
    return (
      <CartITem
        img={product.images[0]}
        key={product.id}
        id={product.id}
        price={product.price}
        name={product.name}
        quantity={product.quantity}
        updateQuantity={updateQuantity}
      />
    );
  });
  function updateQuantity(id, quantity) {
    const cartItemsCopy = [...cartProducts];
    const updatedCartItems = cartItemsCopy.map((cartItem) => {
      if (cartItem.id === id)
        return { ...cartItem, quantity, total: quantity * cartItem.price };
      return cartItem;
    });

    setCartProducts(updatedCartItems);
  }

  return (
    <CardGridContainer>
      <CardGridTitle>Shopping Cart</CardGridTitle>
      <CardGridContent>
        <CardGridColumn>{cartItemsElements}</CardGridColumn>
        <CardGridColumn type="small">
          <CartSummary cartProducts={cartProducts} />
        </CardGridColumn>
      </CardGridContent>
    </CardGridContainer>
  );
};

export default CartGrid;
