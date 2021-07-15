import React from "react";
import { ProductCard } from "./ProductCard";

export const Catalog = () => {
  return (
    <div className="catalogWrapper">
      <div className="row row-cols-2">
        <div className="col-md">
          <ProductCard />
        </div>
        <div className="col-md">
          <ProductCard />
        </div>
        <div className="col-md">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};
