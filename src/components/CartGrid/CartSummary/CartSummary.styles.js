import styled, { css } from "styled-components";

export const CartSummaryContainer = styled.div`
  background-color: beige;
  text-align: center;
  padding: 20px;
`;

export const CardGridColumn = styled.div`
  flex-grow: 7;
  display: inline-block;
  resize: none;
  ${(props) =>
    props.type === "small" &&
    css`
      flex-grow: 2;
    `}
`;