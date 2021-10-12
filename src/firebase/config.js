import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBdp6VTFHDITFMjoxI_sJX-fC9DEOTvimk",
    authDomain: "vue-blog-system-8a112.firebaseapp.com",
    projectId: "vue-blog-system-8a112",
    storageBucket: "vue-blog-system-8a112.appspot.com",
    messagingSenderId: "981161682696",
    appId: "1:981161682696:web:3cda6a794e9e513be6aebd"
  };

  firebase.initializeApp(firebaseConfig);

  //database setup
  let db=firebase.firestore();
  let timestamp=firebase.firestore.FieldValue.serverTimestamp

  export {db,timestamp};