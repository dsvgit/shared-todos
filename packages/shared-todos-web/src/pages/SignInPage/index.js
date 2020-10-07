import React from "react";

import { auth, googleAuthProvider } from "firebase-config";

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
    <div>
      <button onClick={signInWithGoogle}>Sign in with google</button>
    </div>
  );
}

export default SignInPage;
