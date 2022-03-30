import React from 'react';
import { navigate } from 'gatsby-link';

import {
  Wrapper,
  AddButton,
  ContentWrapper,
  Image,
  TextWrapper,
  Title,
  Price,
} from './style';

const ProductCard = ({ product }) => {
  return (
    <Wrapper>
      <AddButton onClick={() => alert('Added to cart!')}>
        <p>+</p>
      </AddButton>
      <ContentWrapper onClick={() => navigate(`/product/${product.id}`)}>
        <Image src={product.images[0]?.src} />
        <TextWrapper>
          <Title>{product.title}</Title>
          <Price>{product.priceRangeV2.maxVariantPrice.amount}0$</Price>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default ProductCard;
