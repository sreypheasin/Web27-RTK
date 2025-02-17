import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";
import { BrowserRouter, Routes, Route } from "react-router";
import RootLayout from "./components/layouts/root-layout.jsx";
import Product from "./pages/product.jsx";
import ProductDetails from "./pages/product-details.jsx";
import Login from "./pages/auth/login.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<App />} />
            <Route path="/products" element={<Product />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
