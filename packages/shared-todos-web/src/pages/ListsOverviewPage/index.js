import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import shortid from "shortid";

import {
  selectors as listsSelectors,
  actions as listsActions,
} from "services/lists";
import AppLayout from "components/AppLayout";
import useDialog from "hooks/useDialog";

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
  const dispatch = useDispatch();
  const lists = useSelector(listsSelectors.getLists);
  const createDialog = useDialog();

  async function handleOpenCreateDialog() {
    const result = await createDialog.open();

    if (!result) return;

    dispatch(
      listsActions.addList({ id: shortid.generate(), title: result.title })
    );
  }

  async function handleRemove(id) {
    dispatch(listsActions.removeList(id));
  }

  return (
    <AppLayout title="lists overview">
      <button onClick={handleOpenCreateDialog}>create list</button>
      <div>
        {lists.map((item) => (
          <div key={item.id}>
            <span>{item.id}</span> <Link to={`/${item.id}`}>{item.title}</Link>
            <button onClick={() => handleRemove(item.id)}>remove</button>
          </div>
        ))}
      </div>
      {createDialog.isOpen && <CreateListDialog {...createDialog} />}
    </AppLayout>
  );
}

export default ListsOverviewPage;
