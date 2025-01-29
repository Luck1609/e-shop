import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "./pages/layout";
import Home from "./pages/home";
import ProductListing from "./pages/products";
import ProductDetailsPage from "./pages/products/details";
import CartPage from "./pages/cart";
import Login from "./pages/auth/login";
import AuthLayout from "./pages/auth/layout";
import ForgotPassword from "./pages/auth/forgot-password";
import ResetPassword from "./pages/auth/reset-password";
import Register from "./pages/auth/register";
import CheckoutLayout from "./pages/checkout/layout";
import CheckoutPage from "./pages/checkout";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="register" element={<Register />} />
        </Route>
        
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="products">
            <Route index element={<ProductListing />} />
            <Route path=":collection">
              <Route index element={<ProductListing />} />
              <Route path=":slug" element={<ProductDetailsPage />} />
            </Route>
          </Route>

          <Route element={<CheckoutLayout />}>
            <Route path="cart" element={<CartPage />} />
          </Route>

          <Route path="checkout" element={<CheckoutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
