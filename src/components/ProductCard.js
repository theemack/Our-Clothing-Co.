import React from "react";
import { Link } from "gatsby";
import { cardImage, wrapper } from "./ProductCard.module.scss";

export const ProductCard = ({ product }) => {
  const price = product.priceRangeV2.maxVariantPrice.amount;
  return (
    <div className={`${wrapper} p-3 card mb-3 text-center `}>
      <Link
        className={`${wrapper} `}
        to={`${window.location.origin}/products/${product.collections[0].handle}/${product.handle}`}
      >
        <img
          className={`${cardImage}`}
          src={product.images[0].src}
          alt={product.images[0].altText}
        />
        <div className="card-body">
          <h5 className={`card-title`}>{product.title}</h5>
          <p className="card-text ">{price}</p>
        </div>
      </Link>
    </div>
  );
};
