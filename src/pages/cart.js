import React from "react";
import { Layout } from "../components/Layout";
import { StoreContext } from "../context/store-context";

export default function Cart() {
  const { checkout, loading } = React.useContext(StoreContext);
  const handleCheckout = () => {
    window.open(checkout.webUrl);
  };
  return (
    <Layout>
      <h1>This is the cart</h1>
      <button className={`btn `} onClick={handleCheckout} disabled={loading}>
        Checkout
      </button>
    </Layout>
  );
}
