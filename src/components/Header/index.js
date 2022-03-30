import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Header } from './style.js';

const HeaderComponent = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      siteBuildMetadata {
        buildTime
      }
    }  
  `);

  return (
    <Header>
      <h1>{ data.site.siteMetadata.title }</h1>
    </Header>
  );
};

export default HeaderComponent;