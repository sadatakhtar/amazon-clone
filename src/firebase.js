import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDDPivMdaJFTfMI8cJ4XNdbGNHjUv3nPsI",
    authDomain: "clone-76120.firebaseapp.com",
    projectId: "clone-76120",
    storageBucket: "clone-76120.appspot.com",
    messagingSenderId: "354383344870",
    appId: "1:354383344870:web:67951166e9252b5aec7727",
    measurementId: "G-WY3KR9E2Y4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};