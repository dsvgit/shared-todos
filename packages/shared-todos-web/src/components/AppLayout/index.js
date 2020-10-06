import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  selectors as authSelectors,
  actions as authActions,
} from "services/auth";

function AppLayout({ children }) {
  const dispatch = useDispatch();
  const userProfile = useSelector(authSelectors.getUserProfile);

  function logout() {
    dispatch(authActions.logout());
  }

  return (
    <div>
      <div>
        <div>{userProfile.name}</div>
        <img src={userProfile.picture} alt="" />
        <button onClick={logout}>logout</button>
      </div>
      {children}
    </div>
  );
}

export default AppLayout;
