import React from "react";
import { useSelector } from "react-redux";

import { selectors as authSelectors } from "services/auth";
import AppLayout from "components/AppLayout";

function ListsOverviewPage() {
  const userProfile = useSelector(authSelectors.getUserProfile);

  return (
    <AppLayout>
      <pre>
        <code>{JSON.stringify(userProfile, null, 2)}</code>
      </pre>
    </AppLayout>
  );
}

export default ListsOverviewPage;
