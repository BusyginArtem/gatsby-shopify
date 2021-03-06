import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import useStore from '../../context/StoreContext.js';
import {
  Container,
  Heading,
  NavLinks,
  NavLinkItem,
  StyledLink,
} from './style.js';

const Layout = ({ pageTitle, children }) => {
  const { cart } = useStore();

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Container>
      <title>{data.site.siteMetadata?.title || pageTitle}</title>
      <nav>
        <NavLinks>
          <NavLinkItem>
            <StyledLink to="/">Home</StyledLink>
          </NavLinkItem>
          <NavLinkItem>
            <StyledLink to="/products">Products</StyledLink>
          </NavLinkItem>
          <NavLinkItem>
            <StyledLink to="/cart">Cart</StyledLink>
          </NavLinkItem>
        </NavLinks>
      </nav>
      <main>
        <Heading>{pageTitle}</Heading>
        {children}
      </main>
    </Container>
  );
};

export default Layout;
