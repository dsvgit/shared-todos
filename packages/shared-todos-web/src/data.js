import { useCollectionData, useDocument } from "react-firebase-hooks/firestore";

import { firestore } from "firebase-config";

export function getListsRef() {
  const listsRef = firestore.collection("lists");

  return listsRef;
}

export function getTodosRef() {
  const todosRef = firestore.collection("todos");

  return todosRef;
}

export function useListsData(email) {
  const listsRef = getListsRef();
  const query = listsRef.where("shared", "array-contains", email);

  const collectionData = useCollectionData(query, { idField: "id" });

  return collectionData;
}

export function useListData(listId) {
  const [listDoc] = useDocument(firestore.doc(`lists/${listId}`));
  const list = listDoc && listDoc.data();

  return list;
}

export function useTodosData(listId) {
  const todosRef = getTodosRef();
  const query = todosRef.where("listId", "==", listId);
  const collectionData = useCollectionData(query, { idField: "id" });

  return collectionData;
}
