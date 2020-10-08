import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { DeleteOutlined, PlusCircleOutlined } from "@ant-design/icons";
import * as firebase from "firebase";

import AppLayout from "components/AppLayout";
import useDialog from "hooks/useDialog";
import { auth } from "firebase-config";
import {
  Button,
  Col,
  Input,
  List,
  PageHeader,
  Row,
  Checkbox,
  Popover,
  Descriptions,
  Tag,
  CreateTag,
} from "components";
import ShareListDialog from "./ShareListDialog";
import { getListsRef, getTodosRef, useListData, useTodosData } from "data";

const {
  serverTimestamp,
  arrayUnion,
  arrayRemove,
} = firebase.firestore.FieldValue;

function Header({ onCreate }) {
  const [title, setTitle] = useState("");

  function handleCreate(title) {
    if (title.trim() === "") {
      return;
    }

    onCreate(title);
    setTitle("");
  }

  return (
    <Row gutter={16}>
      <Col flex={1}>
        <Input
          placeholder="Add new todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onPressEnter={() => handleCreate(title)}
        />
      </Col>
      <Col>
        <Button
          shape="circle"
          icon={<PlusCircleOutlined />}
          onClick={() => handleCreate(title)}
        />
      </Col>
    </Row>
  );
}

function TodosPage() {
  const { uid } = auth.currentUser;
  const { listId } = useParams();
  const history = useHistory();

  const shareDialog = useDialog();

  const listsRef = getListsRef();
  const todosRef = getTodosRef();

  const [todos] = useTodosData(listId);
  const list = useListData(listId) || {};

  async function handleCreate(title) {
    await todosRef.add({
      listId,
      uid,
      title,
      isDone: false,
      createdAt: serverTimestamp(),
    });
  }

  async function handleToggleTodo(id, isDone) {
    await todosRef.doc(id).update({ isDone: !isDone });
  }

  async function handleRemove(id) {
    await todosRef.doc(id).delete();
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
    <AppLayout title={`List: ${list.title || ''}`} onBack={() => history.goBack()}>
      <Descriptions size="small">
        <Descriptions.Item label="Members">
          {list.shared &&
            list.shared.map((email) => (
              <Tag
                key={email}
                closable={auth.currentUser.email !== email && list.uid === uid}
                onClose={() => handleUnshare(email)}
              >
                {email}
              </Tag>
            ))}
          <CreateTag
            key="add-new-tag"
            text="Add Member"
            onCreate={handleShare}
          />
        </Descriptions.Item>
      </Descriptions>
      <List header={<Header onCreate={handleCreate} />} bordered>
        {todos &&
          todos.map((todo) => (
            <List.Item key={todo.id}>
              <Checkbox
                checked={todo.isDone}
                onChange={() => handleToggleTodo(todo.id, todo.isDone)}
              >
                {todo.title}
              </Checkbox>
              <Button
                shape="circle"
                icon={<DeleteOutlined />}
                onClick={() => handleRemove(todo.id)}
              />
            </List.Item>
          ))}
      </List>
    </AppLayout>
  );
}

export default TodosPage;
