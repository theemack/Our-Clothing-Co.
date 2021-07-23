import React from "react";

export const ProductCard = ({ product }) => {
  return (
    <div>
      {/* product.image */}
      <img
        src="/shoe.jpg"
        // width="635"
        // height="560"
        alt="white shoe with green trim"
        className={`card-img-top`}
      />
      <div className="card-body">
        <h5 className="cart-title">{product.title}</h5>
        {/* product.description */}
        {/* <p className="card-text">These are some white shoes</p> */}
      </div>
    </div>
  );
};
