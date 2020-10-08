import React from "react";

import { auth } from "firebase-config";
import { Button, Layout, Avatar, Row, Col, Typography } from "components";

function AppLayout({ children }) {
  const { displayName, photoURL } = auth.currentUser;

  function logout() {
    auth.signOut();
  }

  return (
    <Layout style={{ backgroundColor: "white" }}>
      <Layout.Header>
        <Row justify="space-between">
          <div>
            <Typography style={{ color: "white" }} level={3}>
              Shared Todos
            </Typography>
          </div>
          <Row gutter={16}>
            <Col>
              <Avatar size={36} src={photoURL} />
            </Col>
            <Col>
              <Typography style={{ color: "white" }} level={3}>
                {displayName}
              </Typography>
            </Col>
            <Col>
              <Button onClick={logout}>logout</Button>
            </Col>
          </Row>
        </Row>
      </Layout.Header>
      <Layout.Content style={{ padding: "25px", margin: "0 auto" }}>
        <div style={{ width: 500 }}>{children}</div>
      </Layout.Content>
    </Layout>
  );
}

export default AppLayout;
