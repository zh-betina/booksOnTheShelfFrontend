import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAsQfBHsAOJMTrmrsyZa0Smru15UE8R0jA",
    authDomain: "bots-dev-c0c56.firebaseapp.com",
    databaseURL: "https://bots-dev-c0c56-default-rtdb.firebaseio.com",
    projectId: "bots-dev-c0c56",
    storageBucket: "bots-dev-c0c56.appspot.com",
    messagingSenderId: "469703862930",
    appId: "1:469703862930:web:8e3d42364c34e05cbd144b",
    measurementId: "G-QDN61VPZHK"
};
try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack);
  }
}
const fire = firebase;

export default fire;