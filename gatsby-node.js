const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allShopifyCollection {
          edges {
            node {
              handle
              products {
                handle
              }
            }
          }
        }
      }
    `
  );

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const collectionPageTemplate = path.resolve(
    `src/templates/collectionPageTemplate.js`
  );

  const productPageTemplate = path.resolve(
    `src/templates/productPageTemplate.js`
  );

  result.data.allShopifyCollection.edges.forEach(({ node }) => {
    createPage({
      path: `products/${node.handle}`,
      component: collectionPageTemplate,
      context: {
        collection: node.handle,
      },
    });
    node.products.forEach((product) => {
      createPage({
        path: `/products/${node.handle}/${product.handle}`,
        component: productPageTemplate,
        context: {
          product: node.products.handle,
        },
      });
    });
  });
};
