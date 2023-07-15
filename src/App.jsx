import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductsView from "./featuers/products/ProductsView";
import CartView from "./featuers/cart/CartView";
import ViewPage from "./pages/ViewPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsView />} />
        <Route path="/cart" element={<CartView />} />
        <Route path="/cart/view/:productId" element={<ViewPage />} />
      </Routes>
    </div>
  );
}

export default App;
