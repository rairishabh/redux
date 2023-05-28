import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchdata, loadProducts } from "../../redux/slices/productSlice";
import SingleProduct from "../singleProduct/SingleProduct";
import "./productList.css";
import banner1 from "../../images/banner-1.jpg";
import banner2 from "../../images/banner-2.jpg";

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  const prductStatus = useSelector((state) => state.productReducer.status);
  useEffect(() => {
    dispatch(fetchdata());
  }, []);
  if (prductStatus == "loading") {
    return (
      <div
        className="loadingDiv"
        style={{ margin: "180px", marginTop: "18px" }}
      >
        <img
          src="https://media.tenor.com/8BeuRyZSb90AAAAC/shopping-cart-shopping.gif"
          alt=""
        />
      </div>
    );
  }
  return (
    <>
      <div className="bannerImg">
        <div className="imgDiv img-1">
          <img src={banner1} alt="" />
        </div>
        <div className="imgDiv discount">50% Discount</div>
        <div className="imgDiv title">On all latest fashion trends</div>
        <div className="imgDiv"></div>
        <div className="imgDiv img-6">
          <img src={banner2} alt="" />
        </div>
      </div>
      <div className="productList">
        {products.map((item) => {
          return <SingleProduct key={item.id} product={item} />;
        })}
      </div>
    </>
  );
}

export default ProductList;
