import React from "react";

export const ProductCard = () => {
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
        {/* product.title */}
        <h5 className="cart-title">Shoes</h5>
        {/* product.description */}
        <p className="card-text">These are some white shoes</p>
      </div>
    </div>
  );
};
