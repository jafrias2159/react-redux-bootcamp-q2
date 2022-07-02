import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  box-pack: justify;
  justify-content: space-between;
  font-size: 1em;
  color: black;
  cursor: pointer;
  flex-direction: column;
  display: flex;
`;

const CardHeader = styled.div`
  max-height: 150px;
  display: flex;
  box-pack: center;
  justify-content: center;
`;

const CardBody = styled.div`
  align-self: center;
  width: 100%;
  text-align: center;
  padding: 16px;
`;

const CardImg = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

const Button = styled.button`
  margin-top: 16px;
  width: 100%;
  background-color: rgb(32, 52, 73);
  color: white;
  border: 0px;
  height: 50px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
`;
const ProductName = styled.h3`
  margin: 0px;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%; // some width
`;
const ProductCategory = styled.h3`
  margin: 4px 0px 8px;
  text-align: left;
  font-weight: 100;
`;
const ProductPrice = styled.h4`
  margin: 0px;
  text-align: right;
`;

const Product = ({ img, name, category, price }) => {
  return (
    <Card>
      <CardHeader>
        <CardImg src={img} />
      </CardHeader>
      <CardBody>
        <ProductName>{name}</ProductName>
        <ProductCategory>{category}</ProductCategory>
        <ProductPrice>${price}</ProductPrice>
        <Button>Add to cart</Button>
      </CardBody>
    </Card>
  );
};

export default Product;
