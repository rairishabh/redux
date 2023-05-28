import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./navbar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const cart = useSelector((state) => state.cartReducer.cart);
  let count = 0;
  cart.forEach((element) => {
    count += element.quantity;
  });
  return (
    <nav>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <div className="banner">
          <h2>Store</h2>
        </div>
      </Link>
      <div className="right-layout">
        <div className="cart-layout">
          <Link to={"/cart"}>
            <AiOutlineShoppingCart />
          </Link>
          <h3>{count}</h3>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
