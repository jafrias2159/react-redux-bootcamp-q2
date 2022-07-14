import styled from "styled-components";

export const CartSummaryContainer = styled.div`
  background-color: beige;
  text-align: center;
  padding: 20px;
  height: 250px;
`;

export const CartSummaryButton = styled.button`
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
