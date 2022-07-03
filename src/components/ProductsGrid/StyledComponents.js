import styled from "styled-components";

export const Grid = styled.div`
  margin: 32px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0px, 1fr));
  gap: 40px;
`;
