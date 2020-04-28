import { Route, Redirect } from "react-router-dom";
import React from "react";

const PrivateRouter = ({ logged, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        logged ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRouter;
