import React, { useState } from "react";

function CreateListDialog({ close }) {
  const [title, setTitle] = useState("");

  return (
    <div>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => close({ title })}>create</button>
        <button onClick={() => close()}>close</button>
      </div>
    </div>
  );
}

export default CreateListDialog;
