const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = await graphql(`
    {
      allShopifyProduct {
        edges {
          node {
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
    }
  `);

  pages.data.allShopifyProduct.edges.forEach((edge) => {
    createPage({
      path: `/product/${edge.node.id}`,
      component: path.resolve('src/templates/product.js'),
      context: {
        product: edge.node,
      },
    });
  });
};
