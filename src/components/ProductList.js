import React from "react";
import { ProductCard } from "./ProductCard";

export const ProductList = ({ collectionHandle }) => {
  return (
    <div>
      <h2 className={`text-center `}>{collectionHandle}</h2>
      <div className="row row-cols-2">
        {products.map((product) => {
          <div className="col-md">
            <ProductCard />
          </div>;
        })}

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
