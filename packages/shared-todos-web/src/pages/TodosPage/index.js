import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

import AppLayout from "components/AppLayout";
import useDialog from "hooks/useDialog";
import { auth, firestore } from "../../firebase-config";
import { useCollectionData } from "react-firebase-hooks/firestore";

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

function TodosPage() {
  const { uid } = auth.currentUser;
  const { listId } = useParams();

  const createDialog = useDialog();

  const todosRef = firestore.collection("todos");
  const query = todosRef.where("uid", "==", uid).where("listId", "==", listId);

  const [todos] = useCollectionData(query, { idField: "id" });

  async function handleCreate() {
    const result = await createDialog.open();

    if (!result) return;

    await todosRef.add({
      listId,
      uid,
      title: result.title,
      isDone: false,
    });
  }

  async function handleToggleTodo(id, isDone) {
    await todosRef.doc(id).update({ isDone: !isDone });
  }

  return (
    <AppLayout title="todos">
      <Link to="/">{"<--"} back</Link>
      <div>{listId}</div>
      <button onClick={handleCreate}>create todo</button>
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
    </AppLayout>
  );
}

export default TodosPage;
