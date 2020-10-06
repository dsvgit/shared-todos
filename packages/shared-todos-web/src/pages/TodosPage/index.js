import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import shortid from "shortid";

import AppLayout from "components/AppLayout";
import {
  selectors as listsSelectors,
  actions as listsActions,
} from "services/lists";
import useDialog from "hooks/useDialog";

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
  const { listId } = useParams();

  const dispatch = useDispatch();
  const list = useSelector((state) => listsSelectors.getList(state, listId));
  const todos = useSelector((state) => listsSelectors.getTodos(state, listId));

  const createDialog = useDialog();

  async function handleOpenCreateDialog() {
    const result = await createDialog.open();

    if (!result) return;

    dispatch(
      listsActions.addTodo({
        listId,
        id: shortid.generate(),
        title: result.title,
      })
    );
  }

  function handleToggleTodo(id) {
    dispatch(listsActions.toggleTodo(id));
  }

  return (
    <AppLayout title="todos">
      <Link to="/">{"<--"} back</Link>
      <div>{list.title}</div>
      <button onClick={handleOpenCreateDialog}>create todo</button>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <input
              type="checkbox"
              checked={todo.isDone}
              onChange={() => handleToggleTodo(todo.id)}
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
