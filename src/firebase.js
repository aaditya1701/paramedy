// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC5wspcUyuLy7tRCMsaZOaYvIfOJYDabOI",
    authDomain: "paramedy-31fd6.firebaseapp.com",
    projectId: "paramedy-31fd6",
    storageBucket: "paramedy-31fd6.appspot.com",
    messagingSenderId: "471068492008",
    appId: "1:471068492008:web:eac543ac52775e5fd9095d",
    measurementId: "G-Z2MWSRCY6P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);