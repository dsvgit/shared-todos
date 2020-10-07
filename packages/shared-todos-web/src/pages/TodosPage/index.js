import React, { Fragment, useState } from "react";
import { useParams, Link } from "react-router-dom";

import AppLayout from "components/AppLayout";
import useDialog from "hooks/useDialog";
import { auth, firestore } from "../../firebase-config";
import { useDocument, useCollectionData } from "react-firebase-hooks/firestore";
import * as firebase from "firebase";

function CreateTodoDialog({ close }) {
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

function ShareListDialog({ listId, list, close }) {
  const listsRef = firestore.collection("lists");
  const [email, setEmail] = useState("");

  async function handleShare() {
    const shared = list.shared || [];
    await listsRef.doc(listId).update({
      shared: [...new Set([...shared, email])],
    });

    close();
  }

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
        <button onClick={() => handleShare()}>share</button>
        <button onClick={() => close()}>close</button>
      </div>
    </div>
  );
}

function TodosPage() {
  const { uid } = auth.currentUser;
  const { listId } = useParams();

  const createDialog = useDialog();
  const shareDialog = useDialog();

  const [listDoc] = useDocument(firestore.doc(`lists/${listId}`));
  const list = listDoc && listDoc.data();
  const todosRef = firestore.collection("todos");
  const query = todosRef.where("listId", "==", listId);

  const [todos] = useCollectionData(query, { idField: "id" });

  async function handleCreate() {
    const result = await createDialog.open();

    if (!result) return;

    await todosRef.add({
      listId,
      uid,
      title: result.title,
      isDone: false,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  }

  async function handleToggleTodo(id, isDone) {
    await todosRef.doc(id).update({ isDone: !isDone });
  }

  async function handleShare() {
    shareDialog.open();
  }

  async function handleUnshare() {

  }

  return (
    <AppLayout title="todos">
      <Link to="/">{"<--"} back</Link>
      {list && (
        <Fragment>
          <div>{list.title}</div>
          {list.shared && (
            <div>
              shared with: <i>{list.shared.join(", ")}</i>
            </div>
          )}
        </Fragment>
      )}
      <button onClick={handleCreate}>create todo</button>
      <button onClick={handleShare}>share</button>
      <div>
        {todos &&
          todos.map((todo) => (
            <div key={todo.id}>
              <input
                type="checkbox"
                checked={todo.isDone}
                onChange={() => handleToggleTodo(todo.id, todo.isDone)}
              />
              <span>{todo.id}</span> <span>{todo.title}</span>
            </div>
          ))}
      </div>
      {createDialog.isOpen && <CreateTodoDialog {...createDialog} />}
      {shareDialog.isOpen && (
        <ShareListDialog {...shareDialog} listId={listId} list={list} />
      )}
    </AppLayout>
  );
}

export default TodosPage;
