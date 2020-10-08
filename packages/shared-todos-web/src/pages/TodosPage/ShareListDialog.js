import React, { useState } from "react";

function ShareListDialog({ onShare, close }) {
  const [email, setEmail] = useState("");

  return (
    <div>
      <div>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => onShare(email)}>share</button>
        <button onClick={() => close()}>close</button>
      </div>
    </div>
  );
}

export default ShareListDialog;
