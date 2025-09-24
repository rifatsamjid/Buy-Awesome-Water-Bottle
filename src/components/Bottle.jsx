import React from "react";
import "./Bottle.css";
const Bottle = ({ bottle, handelCart }) => {
  //   console.log(bottle);
  const { img, name, price, stock } = bottle;
  return (
    <div className="card">
      <img src={img} alt="" />
      <h4>{name}</h4>
      <p>${price}</p>
      <p>{stock} remaining</p>
      <button onClick={() => handelCart(bottle)}>Buy Now</button>
    </div>
  );
};

export default Bottle;
