import * as React from "react";
import { graphql } from "gatsby";
import { Navigation } from "../components/Navigation";
import { Header } from "../components/Header";
import { ProductList } from "../components/ProductList";
import "../styles/index.scss";

export const query = graphql`
  query {
    shopifyCollection(handle: { eq: "best-sellers" }) {
      products {
        id
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  return (
    <div>
      <div className={`container-xxl`}>
        <Navigation />
        <Header />
        <main>
          <h2 className={`text-center`}>Best Sellers</h2>
          <ProductList
            collectionHandle={"Best Sellers"}
            products={data.shopifyCollection.products}
          />
        </main>
      </div>
    </div>
  );
};

export default IndexPage;
