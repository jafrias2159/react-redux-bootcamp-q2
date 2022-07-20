import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCredentials,
  setCredentials,
} from '../redux/slices/userSlice.js';
import {
  Bar,
  Links,
  FlexContainer,
} from '../styles/components/Header.styles.js';

export const Header = () => {
  const { validCrendetials } = useSelector(selectCredentials);
  const dispatch = useDispatch();
  
  const logoutHandler = () => {
    dispatch(
      setCredentials({ username: '', password: '', validCrendetials: false })
    );
  };

  return (
    <Bar className="topnav" id="myTopnav">
      <Links to="/">Wizestore</Links>
      <FlexContainer>
        <Links to="/cart">Cart</Links>
        <Links to="/products">Products</Links>
        {!validCrendetials ? (
          <Links to="/login">Login</Links>
        ) : (
          <Links to="/login" onClick={logoutHandler}>
            Logout
          </Links>
        )}
      </FlexContainer>
    </Bar>
  );
};
