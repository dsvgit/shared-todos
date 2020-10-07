import React from "react";

import { auth } from "firebase-config";

function AppLayout({ children, title }) {
  const { name, photoURL } = auth.currentUser;

  function logout() {
    auth.signOut();
  }

  return (
    <div>
      <div>
        <div>{name}</div>
        <img width={48} height={48} src={photoURL} alt="" />
        <button onClick={logout}>logout</button>
      </div>
      {title && (
        <div>
          <strong>{title}</strong>
        </div>
      )}
      <div>{children}</div>
    </div>
  );
}

export default AppLayout;
