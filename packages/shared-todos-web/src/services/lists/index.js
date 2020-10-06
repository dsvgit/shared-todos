import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const getModuleState = (state) => state.lists;

export const selectors = {
  getLists(state) {
    const { listsIds, entities } = getModuleState(state);
    const lists = listsIds.map((id) => entities.lists[id]);

    return lists;
  },
  getList(state, listId) {
    const { entities } = getModuleState(state);
    const list = entities.lists[listId];

    return list;
  },
  getTodos(state, listId) {
    const { entities } = getModuleState(state);
    const todos = Object.values(entities.todos).filter(
      (todo) => todo.listId === listId
    );

    return todos;
  },
};

const slice = createSlice({
  name: "lists",
  initialState: {
    entities: {
      lists: {},
      todos: {},
    },
    listsIds: [],
  },
  reducers: {
    addList(state, { payload }) {
      const item = payload;

      state.listsIds.push(item.id);
      state.entities.lists[item.id] = item;
    },
    removeList(state, { payload }) {
      const id = payload;

      delete state.entities[id];

      const index = state.listsIds.indexOf(id);
      if (index > -1) {
        state.listsIds.splice(index, 1);
      }
    },
    addTodo(state, { payload }) {
      const item = payload;

      state.entities.todos[item.id] = item;
    },
  },
});

export const actions = slice.actions;
export const reducer = persistReducer(
  {
    key: "lists",
    storage,
  },
  slice.reducer
);
