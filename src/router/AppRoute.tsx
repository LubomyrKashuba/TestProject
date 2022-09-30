import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Product from "../pages/Product";
import ProductList from "../pages/ProductList";

const AppRoute = () => {
  return (
    <Routes>
      <Route element={<ProductList />} path={"/"} />
      <Route element={<Product />} path={"/product/:id"} />
      <Route element={<Navigate to={"/"} />} path="*" />
    </Routes>
  );
};

export default AppRoute;
