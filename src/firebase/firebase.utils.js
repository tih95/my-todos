import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyASyAUafiQl4vVpqm2xLVxWGi06wMi2Of8",
  authDomain: "my-todos-767ba.firebaseapp.com",
  databaseURL: "https://my-todos-767ba.firebaseio.com",
  projectId: "my-todos-767ba",
  storageBucket: "my-todos-767ba.appspot.com",
  messagingSenderId: "225561465952",
  appId: "1:225561465952:web:c44f610272f378d7fa5f05"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (user, name) => {
  
  const userRef = firestore.collection('users').doc(user.uid);

  try {
    await userRef.set({
      displayName: name,
      email: user.email,
      dateCreated: new Date()
    })
  }
  catch(e) {
    console.log(e);
  }
}

export default firebase;