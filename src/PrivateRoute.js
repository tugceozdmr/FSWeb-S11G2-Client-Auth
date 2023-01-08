import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component, ...rest }) => {
  const token = localStorage.getItem("token");
  const ProtectedComp = component;

  console.log("you're here");
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <ProtectedComp {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;