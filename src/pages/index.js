import * as React from "react";
import { Navigation } from "../components/Navigation";
import { Header } from "../components/Header";
import { Catalog } from "../components/Catalog";
import "../styles/index.scss";
import "../styles/globals.scss";

const IndexPage = () => {
  return (
    <div>
      <div className={`container-xxl`}>
        <Navigation />
        <Header />
        <main>
          <h2 className={`text-center`}>Best Sellers</h2>
          <Catalog />
        </main>
      </div>
    </div>
  );
};

export default IndexPage;
