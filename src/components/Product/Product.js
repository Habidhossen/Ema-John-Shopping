import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, img, price, ratings, seller } = props.product;

  return (
    <div>
      <div className="product-card">
        <div className="product-inner-div">
          <img className="card-img" src={img} alt="" />
          <h1 className="card-title">{name}</h1>
          <h5 className="card-price">Price: ${price} </h5>
          <p className="card-text">Manufacturer : {seller}</p>
          <p className="card-text">Rating : {ratings} star</p>
        </div>
        <button className="card-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
