import React from "react";
import { useDispatch } from "react-redux";
import { auth } from "firebase/app";

import { googleAuthProvider } from "firebase-config";
import { actions as authActions } from "services/auth";

function SignInPage() {
  const dispatch = useDispatch();

  async function signInWithGoogle() {
    try {
      const result = await auth().signInWithPopup(googleAuthProvider);

      dispatch(
        authActions.login({
          email: result.user.email,
          userProfile: result.additionalUserInfo.profile,
          accessToken: result.credential.accessToken
        })
      );

      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <button onClick={signInWithGoogle}>sign up with google</button>
    </div>
  );
}

export default SignInPage;
