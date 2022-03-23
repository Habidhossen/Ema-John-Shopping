import React from "react";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="shop-container">
      <div className="product-container">All Products</div>
      <div className="cart-container">
        <div>
          <h1 className="cart-title">Order Summary</h1>
          <p className="cart-items">Selected Items: 6</p>
          <p className="cart-items">Total Price: $1140</p>
          <p className="cart-items">Total Shipping Charge: $5</p>
          <p className="cart-items">Tax: $114</p>
          <h1 className="cart-total">Grand Total: $1559</h1>
        </div>
        <div>
          <button className="btn-clear-cart">Clear Cart</button>
          <button className="btn-review-order">Review Order</button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
