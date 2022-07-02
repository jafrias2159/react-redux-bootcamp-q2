import React from "react";
import styled from "styled-components";
import Product from "./Product";

const {
  data: { products },
} = require("../../Mocks/data/products.json");
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0px, 1fr));
  gap: 40px;
  margin: 30px;
`;

export const ProductsGrid = () => {
  const Cards = products.items.map((product) => {
    return (
      <Product
        img={product.images[0]}
        key={product.id}
        price={product.price}
        name={product.name}
        category={product.categories[0]}
      />
    );
  });

  return <Container>{Cards}</Container>;
};
