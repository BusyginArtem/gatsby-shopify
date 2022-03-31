import React, { useState } from 'react';
import { navigate } from 'gatsby-link';
import styled from 'styled-components';

import useStore from '../context/StoreContext';

import PrimaryButton from '../components/PrimaryButton';
import Layout from '../components/layout';

const Product = ({ pageContext }) => {
  const { product } = pageContext;

  const { addVariantToCart } = useStore();

  const [quantity, setQuantity] = useState(1);
  const [variantIdx, setVariantIdx] = useState(0);
  const [price, setPrice] = useState(product.variants[0].price);

  const handleUpdateQuantity = ({ target }) => {
    setQuantity(target.value);
  };

  const handleChangeSize = ({ target }) => {
    setVariantIdx(target.value);
    setPrice(product.variants[target.value].price);
  };

  return (
    <Layout>
      <BackButton onClick={() => navigate(-1)}>{'< '} Back</BackButton>
      <Wrapper>
        <Image src={product.images[0]?.src} />
        <InfoContainer>
          <Title>{product.title}</Title>
          <Subtitle>{price}0$</Subtitle>
          <p>{product.description}</p>
          {product.variants > 1 && (
            <InputForm>
              <Subtitle>
                <label htmlFor="qty">Size:</label>
              </Subtitle>
              <select value={variantIdx} onChange={handleChangeSize}>
                {product.variants.map((variant, idx) => (
                  <option key={variant.title} value={idx}>
                    {variant.title}
                  </option>
                ))}
              </select>
            </InputForm>
          )}
          <InputForm>
            <Subtitle>
              <label htmlFor="qty">Quantity:</label>
            </Subtitle>
            <Input
              placeholder="1"
              id="qty"
              type="number"
              value={quantity}
              onChange={handleUpdateQuantity}
            />
          </InputForm>
          <PrimaryButton
            text="Add to cart"
            onClick={() => addVariantToCart({ product, quantity, variantIdx })}
          />
        </InfoContainer>
      </Wrapper>
    </Layout>
  );
};

export default Product;

const BackButton = styled.p`
  cursor: pointer;
  color: #014c40;
  margin-left: 40px;
  font-size: 14px;
  font-weight: 600;
`;

const Wrapper = styled.div`
  margin: 40px;
  display: grid;
  grid-template-columns: 400px auto;
  gap: 40px;
`;

const Image = styled.img`
  width: 400px;
  height: 500px;
  border-radius: 30px;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  display: grid;
  align-items: flex-start;
  height: fit-content;
  gap: 10px;

  p {
    margin: 0;
  }
`;

const Title = styled.h1`
  margin: 0;
`;

const Subtitle = styled.p`
  font-weight: bold;
  max-width: 500px;
`;

const InputForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, auto);
  width: fit-content;
  gap: 20px;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  border-radius: 20px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  padding: 10px 20px;
  max-width: 80px;
  font-size: 12px;
  :focus {
    outline: none;
    outline-color: #014c40;
  }
`;
