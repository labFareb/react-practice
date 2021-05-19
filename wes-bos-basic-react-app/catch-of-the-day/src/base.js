import Rebase from "re-base";
import Firebase from "firebase";

const firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyDdCdkSTlcOyU1k6L7YgV5yrf7TZc6PoqY",
  authDomain: "catch-of-the-day-reactpractice.firebaseapp.com",
  databaseURL:
    "https://catch-of-the-day-reactpractice-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is the default export
export default base;