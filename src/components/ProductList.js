import React from "react";
import { ProductCard } from "./ProductCard";

export const ProductList = ({ products }) => {
  return (
    <div>
      <div className="row row-cols-2">
        {products.map((product) => {
          return (
            <div key={product.id} className="col-md">
              <ProductCard product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
