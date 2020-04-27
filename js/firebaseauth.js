var firebaseConfig = {
    apiKey: "AIzaSyA0gA-N5ihel2sCfUTeDn4f4gBVK2Jofnw",
    authDomain: "interaktywna-karta-medyczna.firebaseapp.com",
    databaseURL: "https://interaktywna-karta-medyczna.firebaseio.com",
    projectId: "interaktywna-karta-medyczna",
    storageBucket: "interaktywna-karta-medyczna.appspot.com",
    messagingSenderId: "359077375361",
    appId: "1:359077375361:web:8062ba39441bd769c68c80"
};
firebase.initializeApp(firebaseConfig);
var user;

//const auth = firebase.auth();

function register(form) {
    var fail = false;
    var name = form.name.value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var repassword = document.getElementById("repassword").value;
    var x = document.getElementById("index_page");
    var y = document.getElementById("login_page");
    if (name == "" || name == " ") {
        fail = "Enter your name please";
    }
    else if (password == "") {
        fail = "Enter your password please";
    }
    else if (repassword == "") {
        fail = "Confirm your password please";
    }
    else if (email == "") {
        fail = "Enter your e-mail please";
    }
    else if (repassword != password) {
        fail = "Passwords are not the same, please try again";
    }

    if (fail)
        alert(fail);
    else {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(() => {
                alert("Zarejestrowano");
                x.style.display = "block";
                y.style.display = "none";
                user = firebase.auth().currentUser;
            })
            .catch(error => (alert(error)));
    }
}
function wyloguj() {
    auth.signOut();

    alert("Wylogowano");
}

function login() {
    var empty = false;
    var email = document.getElementById("login_email");
    var password = document.getElementById("login_password");
    var x = document.getElementById("index_page");
    var y = document.getElementById("login_page");
    if (email == "" || email == " ") {
        empty = "Enter Your e-mail please";
    }
    else if (password == "" || password == " ") {
        empty = "Enter Your password please";
    }
    if (empty)
        alert(empty);
    else {
        firebase.auth().signInWithEmailAndPassword(email.value, password.value)
            .then(() => {
                alert("Zalogowano");
                user = firebase.auth().currentUser;
                x.style.display = "block";
                y.style.display = "none";
            })
            .catch(error => (alert(error)));
    }
}

///////////////////////////////////////////////////////////////////////////
// var app = new Vue({
//     el: '#app',
//     data: {
//         email: '',
//         password: '',
//         authUser: {},
//         login: false,
//         error: ''
//     },
//     methods: {
//         register() {
//             firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
//                 .then(() => {
//                     alert("Zarejestrowano")
//                 })
//                 .catch(error => (alert(error)));
//             firebase.auth().onAuthStateChanged(user => { this.authUser = user });
//         },
//         signOut() {
//             firebase.auth().signOut();
//         },
//         signIn() {
//             firebase.auth().signInWithEmailAndPassword(this.email, this.password)
//                 .then(() => {
//                     alert("Zalogowano")
//                 })
//                 .catch(error => (alert(error)));
//             firebase.auth().onAuthStateChanged(user => { this.authUser = user });
//         },
//     },
// }); 