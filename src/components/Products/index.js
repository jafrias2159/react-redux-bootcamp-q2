import React from "react";
import {
  Card,
  CardImg,
  CardButton,
  CardBody,
  ProductName,
  ProductCategory,
  ProductPrice,
} from "./Product.style.js";

const Product = ({ img, name, category, price }) => {
  return (
    <Card>
      <CardImg src={img} />
      <CardBody>
        <ProductName>{name}</ProductName>
        <ProductCategory>{category}</ProductCategory>
        <ProductPrice>${price}</ProductPrice>
        <CardButton>Add to cart</CardButton>
      </CardBody>
    </Card>
  );
};

export default Product;
