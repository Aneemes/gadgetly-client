import React from "react";
import {
  Home,
  WishList,
  ProtectedRoute,
  AdminProtectedRoute,
  CartProtectedRoute,
  PageNotFound,
  ProductDetails,
  ProductByCategory,
  CheckoutPage,
} from "./shop";
import { DashboardAdmin, Categories, Products, Orders } from "./admin";
import { UserProfile, UserOrders, SettingUser } from "./shop/dashboardUser";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Routing All page will be here */
// ... (other imports)

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Shop & Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/wish-list" element={<WishList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products/category/:catId" element={<ProductByCategory />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        
        {/* Shop & Public Routes End */}

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<DashboardAdmin />} />
        <Route path="/admin/dashboard/categories" element={<Categories />} />
        <Route path="/admin/dashboard/products" element={<Products />} />
        <Route path="/admin/dashboard/orders" element={<Orders />} />
        {/* Admin Routes End */}

        {/* User Dashboard */}
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/user/orders" element={<UserOrders />} />
        <Route path="/user/setting" element={<SettingUser />} />
        {/* User Dashboard End */}

        {/* 404 Page */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
