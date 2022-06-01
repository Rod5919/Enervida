//#region imports
import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithEmailAndPassword, signOut,
    onAuthStateChanged
} from 'firebase/auth'
//#endregion imports

//#region variables
const usr = $('#user');
const pass = $('#password');
const logButton = document.querySelector('#log-button');
const loginForm = document.querySelector('.login-form');

const firebaseConfig = {
    apiKey: "AIzaSyCaJnH8j50gVOvzO3E2NnGjwzQeeC6xW7k",
    authDomain: "fir-enervida.firebaseapp.com",
    databaseURL: "https://fir-enervida-default-rtdb.firebaseio.com",
    projectId: "fir-enervida",
    storageBucket: "fir-enervida.appspot.com",
    messagingSenderId: "834297702702",
    appId: "1:834297702702:web:8c1ba9af1fa2cd240632bf",
    measurementId: "G-4D2TBHWE4P"
};

initializeApp(firebaseConfig);
const auth = getAuth();

//log in

logButton.addEventListener('click', (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, usr.val(), pass.val())
    .then((credential) =>{
        console.log("User logged in: ", credential.user);
        loginForm.reset();
    })
    .catch((error) => {
        console.error(error.message);
    });
});

// //log out
// const logoutButton = document.querySelector('.logout');
// logoutButton.addEventListener('click', () => {
//     signOut(auth)
//         .then(() => {
//             // console.log('logged out');
//         })
//         .catch((error) => console.error(error.message));
// });

// subscribing to auth changes
onAuthStateChanged(auth, (user) => {
    if (user != null)
        document.location.href = "pages/form1.html";
})

//#endregion variables