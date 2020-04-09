import * as firebase from 'firebase/app';
import 'firebase/auth';

const fire = firebase.initializeApp({
    apiKey: "AIzaSyBBOMjeql0aN5Lc9oTp26g3gqa8rKjTtLo",
    authDomain: "smartphoneshopm22.firebaseapp.com",
    databaseURL: "https://smartphoneshopm22.firebaseio.com",
    projectId: "smartphoneshopm22",
    storageBucket: "smartphoneshopm22.appspot.com",
    messagingSenderId: "446077851799",
    appId: "1:446077851799:web:0da0b19336cdf4929db1d2",
    measurementId: "G-MK9ECC261J"
});

export default fire;