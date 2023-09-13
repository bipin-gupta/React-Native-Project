import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8ivROVN2A4cH6iAm-2S209vsv-O8awhg",
  authDomain: "steel-bridge-345006.firebaseapp.com",
  projectId: "steel-bridge-345006",
  storageBucket: "steel-bridge-345006.appspot.com",
  messagingSenderId: "936661456446",
  appId: "1:936661456446:web:51875c764d6d100502a36f",
  measurementId: "G-JS8C32MBXV",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
