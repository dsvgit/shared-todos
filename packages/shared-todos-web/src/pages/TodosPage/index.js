import React, { Fragment } from "react";
import { useParams, Link } from "react-router-dom";

import AppLayout from "components/AppLayout";
import useDialog from "hooks/useDialog";
import { auth } from "firebase-config";
import * as firebase from "firebase";
import CreateTodoDialog from "./CreateTodoDialog";
import ShareListDialog from "./ShareListDialog";
import { getListsRef, getTodosRef, useListData, useTodosData } from "data";

const {
  serverTimestamp,
  arrayUnion,
  arrayRemove,
} = firebase.firestore.FieldValue;

function TodosPage() {
  const { uid } = auth.currentUser;
  const { listId } = useParams();

  const createDialog = useDialog();
  const shareDialog = useDialog();

  const listsRef = getListsRef();
  const todosRef = getTodosRef();

  const [todos] = useTodosData(listId);
  const list = useListData(listId);

  async function handleCreate() {
    const result = await createDialog.open();

    if (!result) return;

    await todosRef.add({
      listId,
      uid,
      title: result.title,
      isDone: false,
      createdAt: serverTimestamp(),
    });
  }

  async function handleToggleTodo(id, isDone) {
    await todosRef.doc(id).update({ isDone: !isDone });
  }

  async function handleOpenShareDialog() {
    await shareDialog.open();
  }

  async function handleShare(email) {
    await listsRef.doc(listId).update({
      shared: arrayUnion(email),
    });

    shareDialog.close();
  }

  async function handleUnshare(email) {
    if (auth.currentUser.email === email || list.uid !== uid) {
      return;
    }

    await listsRef.doc(listId).update({
      shared: arrayRemove(email),
    });
  }

  return (
    <AppLayout title="todos">
      <Link to="/">{"<--"} back</Link>
      {list && (
        <Fragment>
          <div>{list.title}</div>
          {list.shared && (
            <div>
              shared with:{" "}
              <i>
                {list.shared.map((email) => (
                  <span onClick={() => handleUnshare(email)}> {email} </span>
                ))}
              </i>
            </div>
          )}
        </Fragment>
      )}
      <button onClick={handleCreate}>create todo</button>
      <button onClick={handleOpenShareDialog}>share</button>
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
        <ShareListDialog {...shareDialog} onShare={handleShare} />
      )}
    </AppLayout>
  );
}

export default TodosPage;
