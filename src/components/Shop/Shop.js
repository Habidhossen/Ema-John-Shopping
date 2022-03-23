import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  // set state
  const [products, setProducts] = useState([]);
  // set usereffect
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product product={product}></Product>
        ))}
      </div>
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
