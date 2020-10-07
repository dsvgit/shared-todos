import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

import config from "./config";

firebase.initializeApp(config.firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

firestore.enablePersistence().catch(function (error) {
  if (error.code === "failed-precondition") {
    // Multiple tabs open, persistence can only be enabled
    // in one tab at a a time.
  } else if (error.code === "unimplemented") {
    // The current browser does not support all of the
    // features required to enable persistence
  }
  console.error(error);
});
