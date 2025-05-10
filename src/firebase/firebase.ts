// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const myApiKey = import.meta.env.VITE_APP_APIKEY;
const myAuthDomain = import.meta.env.VITE_APP_AUTHDOMAIN;
const myProjectID = import.meta.env.VITE_APP_PROJECTID;
const myStorageBucket = import.meta.env.VITE_APP_STORAGEBUCKET;
const myMessengerSenderID = import.meta.env.VITE_APP_MESSAGINGSENDERID;
const myAppID = import.meta.env.VITE_APP_APPID;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: myApiKey,
  authDomain: myAuthDomain,
  projectId: myProjectID,
  storageBucket: myStorageBucket,
  messagingSenderId: myMessengerSenderID,
  appId: myAppID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
