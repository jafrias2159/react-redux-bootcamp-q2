import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-around;
  box-sizing: content-box;
  overflow: auto;
  resize: none;
  border-bottom: 1px solid;
`;
export const CartItemDetailsContainer = styled.div`
  display: inline-flex;
  width: 400px;
  max-width: 400px;
  min-width: 400px;
  text-align: center;
  resize: none;
`;

export const CartItemColumn = styled.div`
  text-align: center;
  resize: none;
`;

export const CartITemTitle = styled.b`
  display: block;
  resize: none;
`;

export const CartItemImg = styled.img`
  width: 110px;
  resize: none;
`;

export const CartItemInput = styled.input`
  display: block;
  width: 60px;
  max-width: 60px;
  min-width: 60px;
  resize: none;
`;

export const CardItemButton = styled.button`
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
  border-style: 0px;
  resize: none;
  &:hover {
    color: #fff;
    background-color: #5a6268;
    border-color: #545b62;
  }
`;
