import { initializeApp } from '@react-native-firebase/app';
import { getFirestore } from '@react-native-firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCXFAhxKpHaewgXeN51J8OYfKCn_NXbZeA",
  authDomain: "todoa-list.firebaseapp.com",
  projectId: "todoa-list",
  storageBucket: "todoa-list.firebasestorage.app",
  messagingSenderId: "683593986809",
  appId: "1:683593986809:web:181dce098d5f12d84be828",
  measurementId: "G-ML2Y43S2HP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
