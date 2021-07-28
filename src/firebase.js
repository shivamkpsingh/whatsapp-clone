import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyBnKDWHzwvwycXWz7PDBqS6bJKtZzayI2w",
  authDomain: "whatsapp-clone-e6114.firebaseapp.com",
  projectId: "whatsapp-clone-e6114",
  storageBucket: "whatsapp-clone-e6114.appspot.com",
  messagingSenderId: "1538846087",
  appId: "1:1538846087:web:df899aa3b0ec56b71b7722",
  measurementId: "G-Y3T4Q83JBH"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth()
const provider=new firebase.auth.GoogleAuthProvider()
export {auth,provider}
export default db;