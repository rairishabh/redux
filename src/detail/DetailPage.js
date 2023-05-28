import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FaTruckMoving } from "react-icons/fa";
import { BiRecycle } from "react-icons/bi";
import { TbTruckReturn } from "react-icons/tb";
import { FaShieldAlt } from "react-icons/fa";
import { GiLaurelsTrophy } from "react-icons/gi";
import axios from "axios";
import "./DetailPage.css";

function DetailPage() {
  const parameter = useParams();
  var viewProduct = [];
  useSelector((state) => {
    state.productReducer.products.filter((item) => {
      if (item.id == parameter.productId) {
        return (viewProduct = item);
      }
    });
  });
  const [bannerImage, setbannerImage] = useState(viewProduct.images[0]);
  console.log("usestate", bannerImage);
  console.log(viewProduct);
  const iconStyle = {
    color: "#090b40",
    border: "2px solid black",
    borderRadius: "38%",
    fontSize: "67px",
    padding: "7px",
  };

  return (
    <>
      <div className="singleProductContainer">
        <div className="productImage">
          <img src={bannerImage} className="bannerImage" alt="" />
          <div className="downImage">
            <img
              src={viewProduct.images[0]}
              onClick={() => setbannerImage(viewProduct.images[0])}
              alt=""
            />
            <img
              src={viewProduct.images[1]}
              onClick={() => setbannerImage(viewProduct.images[1])}
              alt=""
            />
            <img
              src={viewProduct.images[2]}
              onClick={() => setbannerImage(viewProduct.images[2])}
              alt=""
            />
          </div>
        </div>
        <div className="rightLayout">
          <div className="quantity" id="item">
            Product Id: {viewProduct.id}
          </div>
          <div className="title" id="item">
            Title: {viewProduct.title}
          </div>
          <div className="price" id="item">
            Price: {viewProduct.price}
          </div>
          <div>
            <FaTruckMoving style={iconStyle} />
            <TbTruckReturn style={iconStyle} />
            <BiRecycle style={iconStyle} />
            <FaShieldAlt style={iconStyle} />
            <GiLaurelsTrophy style={iconStyle} />
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailPage;
