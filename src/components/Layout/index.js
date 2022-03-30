import React from 'react';

import Header from '../Header';
import {
  Container,
  Heading,
  NavLinks,
  NavLinkItem,
  StyledLink
} from './style.js';

const Layout = ({ pageTitle, children }) => {
  return (
    <Container>
      <Header />
      <title>{pageTitle}</title>
      <nav>
        <NavLinks>
          <NavLinkItem>
            <StyledLink to="/">
              Home
            </StyledLink>
          </NavLinkItem>
          <NavLinkItem>
            <StyledLink to="/about">
              About
            </StyledLink>
          </NavLinkItem>
          <NavLinkItem>
            <StyledLink to="/blog">
              Blog
            </StyledLink>
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