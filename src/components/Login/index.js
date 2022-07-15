import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setCredentials } from "../../redux/slices/userSlice";
import loginApi from "../../utils/loginApi";

import {
  LoginContainer,
  LoginTitle,
  LoginLabel,
  LoginInput,
  LoginButton,
} from "./Login.styles";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [inputValues, setInputValues] = useState({
    username: "",
    password: "",
  });

  function getInputValue(event) {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  }

  async function loginHandler() {
    const { username, password } = inputValues;
    try {
      await loginApi(username, password);
      dispatch(setCredentials({ username, password, validCrendetials: true }));
      history.push("/products");
    } catch (e) {
      console.error(e);
      history.push("/login");
    }
  }

  return (
    <LoginContainer>
      <LoginTitle>Welcome to the WizeStore!</LoginTitle>

      <LoginLabel>Username</LoginLabel>
      <LoginInput
        name="username"
        placeholder="Insert Username..."
        onChange={getInputValue}
      />

      <LoginLabel>Password</LoginLabel>
      <LoginInput
        type="password"
        name="password"
        placeholder="Insert Password"
        onChange={getInputValue}
      />

      <LoginButton onClick={loginHandler}>Login</LoginButton>
    </LoginContainer>
  );
};

export default Login;
