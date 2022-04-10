import { initializeApp } from "firebase/app";

const Fire = () => {
    // Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4Izvc4subPtDMfvAVtzGEC4ex5K4hP-c",
  authDomain: "fir-practic1.firebaseapp.com",
  projectId: "fir-practic1",
  storageBucket: "fir-practic1.appspot.com",
  messagingSenderId: "683648505331",
  appId: "1:683648505331:web:db1aeaccc224642471ee86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
    return app;
};

export default Fire;
