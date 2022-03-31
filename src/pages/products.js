import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';

const Products = ({ data }) => {
  const { nodes } = data.allShopifyProduct;

  return (
    <Layout pageTitle="Products">
      <Wrapper>
        {nodes.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  {
    allShopifyProduct {
      nodes {
        id
        title
        handle
        variants {
          shopifyId
          price
          title
        }
        priceRangeV2 {
          maxVariantPrice {
            amount
          }
        }
        description
        images {
          src
        }
      }
    }
  }
`;

const Wrapper = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export default Products;
