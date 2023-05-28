import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./cart.css";
import { addToCart, removeFromCart } from "../../redux/slices/cartSlice";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import card from "../../images/card.png";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);
  const products = useSelector((state) => {
    return state.productReducer.products;
  });

  console.log(cart);
  //   console.log("currentProducts>>", currentProducts);
  var total = 0;

  return (
    <div className="fullCartContainer">
      {/* <h1>Checkout</h1> */}
      <div className="cartDetailCheckoutContiner">
        <div className="productDetailContainer">
          <div className="myBagH1">
            <h1>MY BAG</h1>
            <hr></hr>
          </div>
          {cart.map((item) => {
            total = total + item.price * item.quantity;

            return (
              <div className="cartItems">
                <div className="cartLeftLayout">
                  <img src={item.image} alt="" />
                </div>
                <div className="cartRightLayout">
                  <h3>
                    <span style={{ color: "black" }}>Price: </span>₹{" "}
                    {item.price}
                  </h3>
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                  <p>
                    Qty:{" "}
                    <span style={{ color: "#040eff", fontWeight: "600" }}>
                      {item.quantity}
                    </span>
                  </p>
                </div>
                <div className="removeBtn">
                  <AiOutlineMinusCircle
                    style={{
                      fontSize: "30px",
                      color: "red",
                      margin: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      dispatch(removeFromCart(item));
                    }}
                  />
                  <AiOutlinePlusCircle
                    style={{
                      fontSize: "30px",
                      color: "green",
                      margin: "5px",
                      cursor: "pointer",
                    }}
                    // onClick={dispatch(addToCart(item))}
                    onClick={() => dispatch(addToCart(item))}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="cartDetailContainer">
          <div className="myBagH1">
            <h1>TOTAL</h1>
            <hr></hr>
          </div>
          <div className="subTotal">
            <h3>Sub Total</h3>
            <p>₹{total}</p>
          </div>
          <div className="delivery subTotal">
            <h3>Delivery</h3>
            <BsFillInfoCircleFill />
          </div>
          <div className="checkoutBtn">
            <button>Checkout</button>
          </div>
          <h3 className="weaccept">WE ACCEPT:</h3>
          <img src={card} alt="" />
          <p>Got discount code? add in next step</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
