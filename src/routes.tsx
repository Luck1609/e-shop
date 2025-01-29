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
import Tracking from "./pages/tracking";
import TrackingDetails from "./pages/tracking/details";
import UserLayout from "./pages/user/layout";
import PurchaseHistory from "./pages/user/history";
import AccountDetails from "./pages/user/account-details";
import SecurityDetails from "./pages/user/security";

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

          <Route path="track-package">
            <Route index element={<Tracking />} />
            <Route path=":token" element={<TrackingDetails />} />
          </Route>

          <Route path="checkout" element={<CheckoutPage />} />

          <Route element={<UserLayout />}>
            <Route path="purchase-history" element={<PurchaseHistory />} />
            <Route path="profile" element={<AccountDetails />} />
            <Route path="security" element={<SecurityDetails />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
