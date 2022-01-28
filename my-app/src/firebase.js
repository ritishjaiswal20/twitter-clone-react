import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyC3W_2Bv0EQFVHXacA1ModEkWkTWfXkkCU",
    authDomain: "twitter-clone-65ddb.firebaseapp.com",
    projectId: "twitter-clone-65ddb",
    storageBucket: "twitter-clone-65ddb.appspot.com",
    messagingSenderId: "72076739793",
    appId: "1:72076739793:web:2624348c59fdc29b1171f0",
    measurementId: "G-EZV759EM36"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// const auth =firebase.auth();
// const provider =new firebase.auth.GoogleAuthProvider();
// export{auth,provider};
export default db;