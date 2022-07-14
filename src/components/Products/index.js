import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice.js';
import { getProductById } from '../../redux/slices/productsSlice.js';
import {
  Card,
  CardImg,
  CardButton,
  CardBody,
  ProductName,
  ProductCategory,
  ProductPrice,
} from './Product.style.js';

const Product = ({ img, name, category, price, id }) => {
  const dispatch = useDispatch();
  const selectedProduct = useSelector(getProductById(id));
  const handleClick = () => {
    dispatch(addToCart(selectedProduct));
  };

  return (
    <Card>
      <CardImg src={img} />
      <CardBody>
        <ProductName>{name}</ProductName>
        <ProductCategory>{category}</ProductCategory>
        <ProductPrice>${price}</ProductPrice>
        <CardButton onClick={handleClick}>Add to cart</CardButton>
      </CardBody>
    </Card>
  );
};

export default Product;
