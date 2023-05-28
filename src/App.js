import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ProductList from "./components/productList/ProductList";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/cart/Cart";
import DetailPage from "./detail/DetailPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="products/:productId" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
