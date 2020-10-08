import React from "react";

import { auth, googleAuthProvider } from "firebase-config";
import { Button, Layout, Typography } from "components";

import "./index.css";

const { Title } = Typography;

function SignInPage() {
  async function signInWithGoogle() {
    try {
      const result = await auth.signInWithPopup(googleAuthProvider);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Layout>
      <Layout.Content>
        <div className="login-content">
          <Title level={2}>Shared Todos</Title>
          <Button onClick={signInWithGoogle}>Sign in with google</Button>
        </div>
      </Layout.Content>
    </Layout>
  );
}

export default SignInPage;
