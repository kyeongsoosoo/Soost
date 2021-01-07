import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBnqhzIyIWuNlRxZ5BXYg6PiC7tK4U7QHc',
  authDomain: 'soosta-6c155.firebaseapp.com',
  projectId: 'soosta-6c155',
  storageBucket: 'soosta-6c155.appspot.com',
  messagingSenderId: '580595378254',
  appId: '1:580595378254:web:1723b0a6fbbb36129b3b1f',
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();

export default fb;
