import React from "react";
import {
  LoginContainer,
  LoginTitle,
  LoginLabel,
  LoginInput,
  LoginButton,
} from "./Login.styles";

const Login = () => {
  return (
    <LoginContainer>
      <LoginTitle>Welcome to WZ Store</LoginTitle>
      <LoginLabel>Username</LoginLabel>
      <LoginInput placeholder="Insert Username..." />
      <LoginLabel>Password</LoginLabel>
      <LoginInput type="password" placeholder="Insert Password" />
      <LoginButton>Login</LoginButton>
    </LoginContainer>
  );
};

export default Login;
