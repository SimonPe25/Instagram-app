import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyAmXJ6uC4dMl9msBqe_AIRJEJr-Zm1ZbQc",
    authDomain: "instagram-8fe87.firebaseapp.com",
    projectId: "instagram-8fe87",
    storageBucket: "instagram-8fe87.appspot.com",
    messagingSenderId: "695104797444",
    appId: "1:695104797444:web:525be864f3cfaf6e22ee51"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;
 
seedDatabase(firebase);

export { firebase, FieldValue};