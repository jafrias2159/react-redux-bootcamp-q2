import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  width: 100%;
  -webkit-box-pack: justify;
  justify-content: space-between;
  font-size: 1em;
  color: black;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
`;

export const CardHeader = styled.div`
  max-height: 150px;
  display: flex;
  box-pack: center;
  justify-content: center;
`;

export const CardBody = styled.div`
  align-self: center;
  display: block;
  width: 90%;
  padding: 1.25rem;
`;

export const CardImg = styled.img`
  max-height: 150px;
  max-width: 150px;
  display: flex;
`;

export const CardButton = styled.button`
  margin-top: 16px;
  width: 100%;
  background-color: #007bff;
  color: white;
  border: 0px;
  height: 50px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  border-radius: 0.25rem;
`;

export const ProductName = styled.h3`
  margin: 0px;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
`;

export const ProductCategory = styled.h3`
  margin: 4px 0px 8px;
  text-align: left;
  font-weight: 100;
`;

export const ProductPrice = styled.h4`
  margin: 0px;
  text-align: right;
`;
