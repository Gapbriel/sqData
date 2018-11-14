import firebase from 'firebase';
// please input your firebase config here.
const config = {
    apiKey: "",	
    authDomain: "",	   
    databaseURL: "",
    projectId: "",	  
    storageBucket: "",	
    messagingSenderId: ""
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const database = firebase.database();
export const firebaseAuth = firebase.auth;
