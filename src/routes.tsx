import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "./pages/layout";
import Home from "./pages/home";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
