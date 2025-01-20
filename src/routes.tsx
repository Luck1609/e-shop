import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "./pages/layout";
import Home from "./pages/home";
import ProductListing from "./pages/products";
import ProductDetailsPage from "./pages/products/details";
import CartPage from "./pages/cart";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="products">
            <Route index element={<ProductListing />} />
            <Route path=":collection">
              <Route index element={<ProductListing />} />
              <Route path=":slug" element={<ProductDetailsPage />} />
            </Route>
          </Route>

          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
