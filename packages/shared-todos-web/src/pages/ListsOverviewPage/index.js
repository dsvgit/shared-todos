import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as firebase from "firebase";
import { DeleteOutlined, PlusCircleOutlined } from "@ant-design/icons";

import AppLayout from "components/AppLayout";
import { auth } from "firebase-config";
import { getListsRef, useListsData } from "data";
import { Button, List, Input, Col, Row } from "components";

function Header({ onCreate }) {
  const [title, setTitle] = useState("");

  function handleCreate(title) {
    if (title.trim() === '') {
      return;
    }

    onCreate(title);
    setTitle('');
  }

  return (
    <Row gutter={16}>
      <Col flex={1}>
        <Input
          placeholder="Add new list..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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

function ListsOverviewPage() {
  const { uid, email } = auth.currentUser;

  const listsRef = getListsRef();
  const [lists] = useListsData(email);

  async function handleCreate(title) {
    await listsRef.add({
      title,
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
      <List header={<Header onCreate={handleCreate} />} bordered>
        {lists &&
          lists.map((item) => (
            <List.Item key={item.id}>
              <Link to={`/${item.id}`}>{item.title}</Link>
              <Button
                shape="circle"
                icon={<DeleteOutlined />}
                onClick={() => handleRemove(item.id)}
              />
            </List.Item>
          ))}
      </List>
    </AppLayout>
  );
}

export default ListsOverviewPage;
