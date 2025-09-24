import React, { use, useState } from "react";
import Bottle from "../bottle";
import "./Bottles.css";

const Bottles = ({ bottlesPromise }) => {
  const [cart, setCart] = useState([]);
  const bottles = use(bottlesPromise);
  const handelCart = (bottle) => {
    // console.log("bottle will be added to cart");
    const newCart = [...cart, bottle];
    setCart(newCart);
  };
  //   console.log(bottles);
  return (
    <div>
      <h3>Bottles: {bottles.length}</h3>
      <p>cart : {cart.length}</p>
      <div className="bottle-card">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            handelCart={handelCart}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
