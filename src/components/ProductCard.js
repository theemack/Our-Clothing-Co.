import React from "react";

export const ProductCard = () => {
  return (
    <div>
      <img
        src="/shoe.jpg"
        // width="635"
        // height="560"
        alt="white shoe with green trim"
        className={`card-img-top`}
      />
      <div className="card-body">
        <h5 className="cart-title">Shoes</h5>
        <p className="card-text">These are some white shoes</p>
      </div>
    </div>
  );
};
