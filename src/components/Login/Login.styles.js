import styled, { css } from "styled-components";

export const LoginContainer = styled.div`
  background-color: rgb(245, 245, 245);
  margin: 30px auto;
  width: 40%;
  padding: 20px;
  box-sizing: border-box;
  word-wrap: break-word;
`;

export const LoginTitle = styled.h1`
  text-align: center;
`;

export const LoginLabel = styled.label`
  margin: auto;
  display: block;
  font-weight: bold;
  padding: 1rem;
  padding-bottom: 0.3rem;
  width: 80%;
`;

export const LoginInput = styled.input`
  margin: auto;
  width: 80%;
  box-sizing: border-box;
  display: block;
  height: 2rem;
  padding-left: 10px;
  padding-right: 10px;
  &:hover {
    border: 1px soild;
  }
  ${(props) =>
    props.type === "password" &&
    css`
      -webkit-text-security: disc;
      text-security: disc;
    `}
`;

export const LoginButton = styled.button`
  margin: auto;
  display: block;
  margin-top: 1.5rem;
  width: 80%;
  height: 2rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
  border: 0px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
    border-color: #1e7e34;
  }
`;
