import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCGPJkkcbZeIyZIHV9yW1fDiIE8bV8j9IY",
  authDomain: "homely-food.firebaseapp.com",
  databaseURL: "https://homely-food.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
