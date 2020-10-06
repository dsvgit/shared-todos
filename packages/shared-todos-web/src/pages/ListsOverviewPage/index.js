import React from "react";
import { useSelector } from "react-redux";

import { selectors } from "services/auth";

function ListsOverviewPage() {
  const userProfile = useSelector(selectors.getUserProfile);

  return (
    <div>
      <pre>
        <code>{JSON.stringify(userProfile, null, 2)}</code>
      </pre>
    </div>
  );
}

export default ListsOverviewPage;
