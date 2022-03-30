import { Link } from "gatsby";
import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  max-width: 500px;
  font-family: sans-serif;
`;

export const Heading = styled.h1`
  color: rebeccapurple;
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
`;

export const NavLinkItem = styled.li`
  padding-right: 2rem;
`;

export const StyledLink = styled(Link)`
  color: black;

  &:hover {
    color: grey;
  }
`;