import React from "react";
import { graphql } from "gatsby";

import { Layout } from "../components/Layout";
import { ProductList } from "../components/ProductList";

export default function ProductCollectionIndex({
  data: { shopifyCollection },
}) {
  return (
    <Layout>
      <h2 className={`display-2 text-center mt-5 mb-4`}>
        {shopifyCollection.title}
      </h2>
      <ProductList products={shopifyCollection.products} />
    </Layout>
  );
}

export const query = graphql`
  query ($collectionID: String!) {
    shopifyCollection(id: { eq: $collectionID }) {
      title
      products {
        id
        title
        handle
        collections {
          handle
        }
        images {
          altText
          src
          gatsbyImageData(width: 200, breakpoints: 10)
          height
          width
        }
        priceRangeV2 {
          maxVariantPrice {
            amount
          }
        }
      }
    }
  }
`;
