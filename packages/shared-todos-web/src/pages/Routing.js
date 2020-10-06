import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { selectors } from "services/auth";

import SignInPage from "./SignInPage";
import ListsOverviewPage from "./ListsOverviewPage";

function LoginRouting() {
  return (
    <Switch>
      <Route path="/">
        <SignInPage />
      </Route>
    </Switch>
  );
}

function AppRouting() {
  return (
    <Switch>
      <Route path="/">
        <ListsOverviewPage />
      </Route>
    </Switch>
  );
}

function Routing() {
  const isAuthenticated = useSelector(selectors.isAuthenticated);

  return <Router>{isAuthenticated ? <AppRouting /> : <LoginRouting />}</Router>;
}

export default Routing;
