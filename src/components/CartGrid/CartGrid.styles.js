import styled from "styled-components";

export const CardGridContainer = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr;
  grid-gap: 5px;
  width: 75%;
  margin: auto;
`;

export const CardGridTitle = styled.h2`
  text-align: center;
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 2;
`;

export const CardGrid= styled.div`
  display: grid;
`;
