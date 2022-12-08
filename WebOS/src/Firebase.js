// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmXDx2oAi8pOlo-bbvqphoxCFs7qqwek5ee",
  authDomain: "standbybaby-90e4a.firebaseapp.com",
  projectId: "standbybaby-90e4a",
  storageBucket: "standbybaby-90e4a.appspot.com",
  messagingSenderId: "852844629117",
  appId: "1:852844629247:web:240e69961498276a231d0ca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireStore = getFirestore(app);

export { fireStore };
