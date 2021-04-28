import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =
{
    apiKey: "AIzaSyAsiy4WPEFiyS4Fwg6blckzl0NDa4PpOyM",
    authDomain: "crwn-db-5d1cc.firebaseapp.com",
    projectId: "crwn-db-5d1cc",
    storageBucket: "crwn-db-5d1cc.appspot.com",
    messagingSenderId: "244019942726",
    appId: "1:244019942726:web:d35a080e33917053ea8147",
    measurementId: "G-K9HEWDPQKB"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;