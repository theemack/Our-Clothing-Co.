const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allShopifyCollection {
          edges {
            node {
              id
              handle
              products {
                id
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
        collectionID: node.id,
      },
    });
    node.products.forEach((product) => {
      createPage({
        path: `/products/${node.handle}/${product.handle}`,
        component: productPageTemplate,
        context: {
          productID: product.id,
        },
      });
    });
  });
};
