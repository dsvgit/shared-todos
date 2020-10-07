import React, { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Link } from "react-router-dom";
import * as firebase from "firebase";

import AppLayout from "components/AppLayout";
import useDialog from "hooks/useDialog";
import { auth, firestore } from "firebase-config";

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

function ListsOverviewPage() {
  const { uid, email } = auth.currentUser;

  const createDialog = useDialog();

  const listsRef = firestore.collection("lists");
  const query = listsRef.where("shared", "array-contains", email);

  const [lists] = useCollectionData(query, { idField: "id" });

  async function handleCreate() {
    const result = await createDialog.open();

    if (!result) return;

    await listsRef.add({
      title: result.title,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      shared: [email],
    });
  }

  async function handleRemove(id) {
    await listsRef.doc(id).delete();
  }

  return (
    <AppLayout title="lists overview">
      <button onClick={handleCreate}>create list</button>
      <div>
        {lists &&
          lists.map((item) => (
            <div key={item.id}>
              <span>{item.id}</span>{" "}
              <Link to={`/${item.id}`}>{item.title}</Link>
              <button onClick={() => handleRemove(item.id)}>remove</button>
            </div>
          ))}
      </div>
      {createDialog.isOpen && <CreateListDialog {...createDialog} />}
    </AppLayout>
  );
}

export default ListsOverviewPage;
