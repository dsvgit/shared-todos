import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "firebase-config";

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
  const [user, loading] = useAuthState(auth);

  return loading ? <div>loading...</div> : (
    <Router>{user ? <AppRouting /> : <LoginRouting />}</Router>
  );
}

export default Routing;
