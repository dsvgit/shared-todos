import { initializeApp, auth } from "firebase";
import "firebase/auth";

import config from "./config";

initializeApp(config.firebaseConfig);

export const googleAuthProvider = new auth.GoogleAuthProvider();
