import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import {
  Container,
  Heading,
  NavLinks,
  NavLinkItem,
  StyledLink,
} from './style.js';

const Layout = ({ pageTitle, children }) => {
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
            <StyledLink to="/about">About</StyledLink>
          </NavLinkItem>
          <NavLinkItem>
            <StyledLink to="/products">Products</StyledLink>
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
