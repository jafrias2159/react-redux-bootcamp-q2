import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import loginApi from "../../utils/loginApi";

import {
  LoginContainer,
  LoginTitle,
  LoginLabel,
  LoginInput,
  LoginButton,
} from "./Login.styles";

const Login = () => {
  const history = useHistory();
  const [inputValues, setInputValues] = useState({
    username: "",
    password: "",
  });

  function getInputValue(event) {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  }

  async function LoginHandler() {
    const { username, password } = inputValues;
    try {
      await loginApi(username, password);
      history.push('/products');
    } catch (e) {
      console.error(e);
      history.push('/login');
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

      <LoginButton onClick={LoginHandler}>Login</LoginButton>
    </LoginContainer>
  );
};

export default Login;
