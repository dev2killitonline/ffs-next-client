import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AppContext } from "../../App";

export default function ProtectedRoute({ path, children }) {
  const { user } = useContext(AppContext);
  if (!user.isLoggedIn) {
    return <Redirect to="/login" />;
  } else {
    return <Route path={path}>{children}</Route>;
  }
}
