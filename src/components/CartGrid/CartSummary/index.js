import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { checkoutProducts } from '../../../redux/slices/cartSlice';
import { CartSummaryContainer, CartSummaryButton } from './CartSummary.styles';
import { useGetTotals } from './hooks';

const CartSummary = ({ cartProducts }) => {
  const { totalPrice, totalQuantity } = useGetTotals(cartProducts);
  const dispatch = useDispatch();
  const history = useHistory();
  const onCheckoutHandler = async () => {
    await dispatch(checkoutProducts());
    history.push('/order');
  };
  const dynamicCheckoutButton = cartProducts.length ? (
    <CartSummaryButton onClick={onCheckoutHandler}>Checkout</CartSummaryButton>
  ) : (
    ''
  );
  return (
    <CartSummaryContainer>
      <h4>Summary</h4>
      <hr />
      <p>Items: {totalQuantity}</p>
      <hr />
      <p>Total Cost</p>
      <p>${totalPrice}</p>
      {dynamicCheckoutButton}
    </CartSummaryContainer>
  );
};

export default CartSummary;
