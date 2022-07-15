import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Products } from '../pages/Products';
import { Cart } from '../pages/Cart';
import { Home } from '../pages/Home';
import { Header } from '../components/Header';
import { Login } from '../pages/Login';
import { useSelector } from 'react-redux';
import { selectCredentials } from '../redux/slices/userSlice';
import Checkout from '../pages/order';

export const AppRouter = () => {
  const { validCrendetials } = useSelector(selectCredentials);


  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          {!validCrendetials ? <Redirect to="/login" /> : <Products />}
        </Route>
        <Route path="/cart">
          {!validCrendetials ? <Redirect to="/login" /> : <Cart />}
        </Route>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/order">
          <Checkout />
        </Route>
      </Switch>
    </Router>
  );
};
