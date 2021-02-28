import firebase from 'firebase/app';
import 'firebase/auth';
// import firebaseConfig from '../serviceAccountKey.json';
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

try {
  firebase.initializeApp(firebaseConfig);
  //   firebase.analytics();
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack);
  }
}

const provider = new firebase.auth.GithubAuthProvider();

export { provider };

export default firebase;
