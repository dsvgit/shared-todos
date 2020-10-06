import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { selectors } from "services/auth";

import SignInPage from "./SignInPage";
import ListsOverviewPage from "./ListsOverviewPage";
import TodosPage from "./TodosPage";

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
      <Route exact path="/">
        <ListsOverviewPage />
      </Route>
      <Route exact path="/:listId">
        <TodosPage />
      </Route>
    </Switch>
  );
}

function Routing() {
  const isAuthenticated = useSelector(selectors.isAuthenticated);

  return <Router>{isAuthenticated ? <AppRouting /> : <LoginRouting />}</Router>;
}

export default Routing;
