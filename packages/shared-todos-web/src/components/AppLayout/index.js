import React from "react";
import { MoreOutlined } from "@ant-design/icons";

import { auth } from "firebase-config";
import {
  Layout,
  Avatar,
  Row,
  Col,
  Typography,
  Dropdown,
  Menu,
  Button,
  PageHeader,
} from "components";

function AppLayout({ title, onBack, doShowSettings, doShowAvatar, children }) {
  const { photoURL } = auth.currentUser;

  function logout() {
    auth.signOut();
  }

  return (
    <Layout className="app-layout">
      {/*<Layout.Header>*/}
      {/*  <Row justify="space-between">*/}
      {/*    <Row gutter={16} style={{ alignItems: "baseline" }}>*/}
      {/*      <Col>*/}
      {/*        <Avatar size={36} src={photoURL} />*/}
      {/*      </Col>*/}
      {/*      <Col>*/}
      {/*        <Typography.Title style={{ color: "white" }} level={4}>*/}
      {/*          {title}*/}
      {/*        </Typography.Title>*/}
      {/*      </Col>*/}
      {/*    </Row>*/}
      {/*    <Row gutter={16}>*/}
      {/*      <Col></Col>*/}
      {/*    </Row>*/}
      {/*  </Row>*/}
      {/*</Layout.Header>*/}
      <Layout.Content className="app-content">
        <PageHeader
          title={title}
          onBack={onBack}
          avatar={doShowAvatar && { src: photoURL }}
          extra={
            doShowSettings && [
              <Dropdown
                placement="bottomRight"
                overlay={
                  <Menu>
                    <Menu.Item onClick={logout}>Logout</Menu.Item>
                  </Menu>
                }
                trigger={["click"]}
              >
                <Button
                  shape="circle"
                  icon={<MoreOutlined />}
                  style={{ border: "none" }}
                />
              </Dropdown>,
            ]
          }
        >
          {children}
        </PageHeader>
      </Layout.Content>
    </Layout>
  );
}

export default AppLayout;
