import { initializeApp, auth } from "firebase";
import "firebase/auth";

import config from "./config";

console.log(config.firebaseConfig);
initializeApp(config.firebaseConfig);

export const googleAuthProvider = new auth.GoogleAuthProvider();
