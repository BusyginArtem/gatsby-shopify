import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import ProductRow from '../components/ProductRow';
import PrimaryButton from '../components/PrimaryButton';
import useStore from '../context/StoreContext';

const Cart = () => {
  const { cart } = useStore();
  console.log('%c cart', 'color: green; font-weight: bold;', cart);
  return (
    <Layout>
      <Wrapper>
        <HeaderWrapper>
          <Text>Product</Text>
          <Text>Quantity</Text>
          <Text>Remove Item</Text>
        </HeaderWrapper>

        {cart.length > 0 ? (
          cart.map((item, index) => <ProductRow key={index} item={item} />)
        ) : (
          <Text>Your cart is empty.</Text>
        )}

        <ButtonWrapper>
          <PrimaryButton
            text="Checkout"
            onClick={() => console.log('Redirect to checkout page')}
          />
        </ButtonWrapper>
      </Wrapper>
    </Layout>
  );
};

export default Cart;

const Wrapper = styled.div`
  margin: 40px;
`;

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 330px);
  gap: 40px;
`;

const Text = styled.p`
  font-weight: 600;
  font-size: 14px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
