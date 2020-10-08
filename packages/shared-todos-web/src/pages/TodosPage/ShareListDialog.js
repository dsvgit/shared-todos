import React, { useState } from "react";

import { Input } from "components";

function ShareListDialog({ onShare }) {
  const [email, setEmail] = useState("");

  return (
    <Input
      autoFocus
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      onPressEnter={() => onShare(email)}
    />
  );
}

export default ShareListDialog;
