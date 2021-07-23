// Collection Page
import React from "react";
import { graphql } from "gatsby";
import { ProductList } from "../../../components/ProductList";

export default function ProductCollectionIndex({
  data: { products },
  pageContext: { productCollection },
}) {
  return (
    <div>
      <h2 className={`text-center `}>{productCollection}</h2>
      <ProductList products={products.nodes} />
    </div>
  );
}

export const query = graphql`
  query {
    products: allShopifyProduct(
      filter: { collections: { elemMatch: { handle: { eq: "best-sellers" } } } }
    ) {
      nodes {
        id
        title
        priceRangeV2 {
          maxVariantPrice {
            amount
          }
        }
      }
    }
  }
`;
