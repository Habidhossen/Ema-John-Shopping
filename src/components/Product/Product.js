import React from "react";
import "./Product.css";

const Product = () => {
  return (
    <div>
      <div className="product-card">
        <img className="card-img" src="" alt="" />
        <h1 className="Card-title">Ultraboost 22 Shoes</h1>
        <h5 className="Card-price">Price: $190 </h5>
        <p className="Card-text">Manufacturer : Addidas</p>
        <p className="Card-text">Rating : 3 start</p>
        <button className="Card-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
