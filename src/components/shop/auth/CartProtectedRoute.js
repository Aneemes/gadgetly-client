import React from "react";
import { Route, Navigate } from "react-router-dom";
import { isAuthenticate } from "./fetchApi";

const CartProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    component={
      JSON.parse(localStorage.getItem("cart")).length !== 0 &&
      isAuthenticate() ? (
        <Component />
      ) : (
        <Navigate
          to={{
            pathname: "/",
            state: { from: rest.location },
          }}
        />
      )
    }
  />
);

export default CartProtectedRoute;
