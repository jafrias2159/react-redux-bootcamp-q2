import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr 0.5fr 0.5fr;
  grid-gap: 5px;
  border-bottom: 1px solid gray;
  place-items: center;
`;
export const CartItemDetailsContainer = styled.div`
  display: inline-flex;
  width: 400px;
  text-align: center;
`;

export const CartItemColumn = styled.div`
  text-align: center;
`;

export const CartITemTitle = styled.b`
  display: block;
`;

export const CartItemImg = styled.img`
  width: 110px;
`;

export const CartItemInput = styled.input`
  display: block;
  width: 60px;
  margin: 10px;
`;

export const CardItemButton = styled.button`
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
  border: 0px;
  width: 70px;
  height: 30px;
  &:hover {
    color: #fff;
    background-color: #5a6268;
    border-color: #545b62;
  }
`;
