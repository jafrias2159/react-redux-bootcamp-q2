import React, { useState } from "react";
import CartITem from "./CartITem";
import mockData from "../../Mocks/data/products.json";
import CartSummary from "./CartSummary";
import { CardGrid, CardGridContainer, CardGridTitle } from "./CartGrid.styles";


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
        <CardGrid>{cartItemsElements}</CardGrid>
        <CartSummary cartProducts={cartProducts} />
    </CardGridContainer>
  );
};

export default CartGrid;
