import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addNewProductQuantity,
  removeProduct,
} from '../../../redux/slices/cartSlice';
import { getProductById } from '../../../redux/slices/productsSlice';
import {
  CardItemButton,
  CartItemColumn,
  CartItemContainer,
  CartItemDetailsContainer,
  CartItemImg,
  CartItemInput,
  CartITemTitle,
} from './CardItem.styles';

const CartITem = ({ id, img, price, name, quantity }) => {
  const selectedProduct = useSelector(getProductById(id));
  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    const quantity = event.target.value;
    dispatch(addNewProductQuantity({ selectedProduct, quantity }));
  };

  const handleDeleteProduct = () => {
    dispatch(removeProduct({ selectedProduct }));
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
          onChange={(event) => handleOnChange(event)}
        />
        <CardItemButton onClick={handleDeleteProduct}>Remove</CardItemButton>
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
