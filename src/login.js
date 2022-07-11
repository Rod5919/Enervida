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
    apiKey: "AIzaSyAl0BpNq9ooPpnl49FCb9jAkz5E-NoLcjk",
    authDomain: "enervida-b74cc.firebaseapp.com",
    projectId: "enervida-b74cc",
    storageBucket: "enervida-b74cc.appspot.com",
    messagingSenderId: "1038354980356",
    appId: "1:1038354980356:web:43ae80439e350e9fb59f51",
    measurementId: "G-FJJE1LYEC1"
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
