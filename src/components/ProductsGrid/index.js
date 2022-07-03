import React from "react";
import Product from "../Products/";
import mockData from "../../Mocks/data/products.json";
import { Grid } from "./StyledComponents";

const {
  data: { products },
} = mockData;

const ProductsGrid = () => {
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

  return <Grid>{Cards}</Grid>;
};

export default ProductsGrid;
