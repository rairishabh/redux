import React from "react";
import "./SingleProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SingleProduct({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);
  const currentItem = cart.find((item) => item.id == product.id);
  if (currentItem) console.log(currentItem);
  const curQuantity = currentItem ? currentItem.quantity : 0;
  // console.log("curr", curQuantity);
  return (
    <div className="singleProduct">
      <Link to={`/products/${product.id}`} style={{ textDecoration: "none" }}>
        <img
          src={product.images[0]}
          className="productImg"
          alt={product.title}
        />
      </Link>
      <div className="productInfo">
        <h2 className="productTitle">{product.title}</h2>
        <p className="productPrice">{product.price}</p>
      </div>
      {/* <div className="cartInfo">
        <button className="button" onClick={() => dispatch(addToCart(product))}>
          +
        </button>
        <h5>{curQuantity}</h5>
        <button
          className="button"
          onClick={() => dispatch(removeFromCart(product.id))}
        >
          -
        </button>
      </div> */}
      {/* <button>Add To Cart</button> */}
      <div
        onClick={() => {
          dispatch(addToCart(product));
          toast("🚀Item added to cart 🛒", {
            position: "top-right",
            autoClose: 2000,
          });
        }}
        style={{ border: "none" }}
      >
        <Button text={"Add To Cart"} />
        <ToastContainer />
      </div>
    </div>
  );
}

export default SingleProduct;
