// // var firebaseConfig = {
// //     apiKey: "AIzaSyA0gA-N5ihel2sCfUTeDn4f4gBVK2Jofnw",
// //     authDomain: "interaktywna-karta-medyczna.firebaseapp.com",
// //     databaseURL: "https://interaktywna-karta-medyczna.firebaseio.com",
// //     projectId: "interaktywna-karta-medyczna",
// //     storageBucket: "interaktywna-karta-medyczna.appspot.com",
// //     messagingSenderId: "359077375361",
// //     appId: "1:359077375361:web:8062ba39441bd769c68c80"
// // }

// // firebase.initializeApp(firebaseConfig);
// var firebaseRef = firebase.database().ref().child('interaktywna-karta-medyczna');
// var visitsRef = firebaseRef.child('visits');
// // var listaWizyt = [];
// // var user;
// var database = firebase.database();

// function drukuj() {
//     testowaTab.forEach(element => {
//         console.log(element);
//     });
// }

// function register(form) {
//     var fail = false;
//     var name = form.name.value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     var repassword = document.getElementById("repassword").value;
//     var x = document.getElementById("index_page");
//     var y = document.getElementById("login_page");
//     if (name == "" || name == " ") {
//         fail = "Enter your name please";
//     }
//     else if (password == "") {
//         fail = "Enter your password please";
//     }
//     else if (repassword == "") {
//         fail = "Confirm your password please";
//     }
//     else if (email == "") {
//         fail = "Enter your e-mail please";
//     }
//     else if (repassword != password) {
//         fail = "Passwords are not the same, please try again";
//     }

//     if (fail)
//         alert(fail);
//     else {
//         firebase.auth().createUserWithEmailAndPassword(email, password)
//             .then(() => {
//                 alert("Zarejestrowano");
//                 x.style.display = "block";
//                 y.style.display = "none";
//                 user = firebase.auth().currentUser;
//                 document.getElementById("uzytkownik").innerHTML = "Uzytkownik: " + user.email;

//                 writeUserData(user.uid, document.getElementById("name").value, user.email);
//             })
//             .catch(error => (alert(error)));
//     }
// }

// function login() {
//     var empty = false;
//     var email = document.getElementById("login_email");
//     var password = document.getElementById("login_password");
//     var x = document.getElementById("index_page");
//     var y = document.getElementById("login_page");
//     if (email == "" || email == " ") {
//         empty = "Enter Your e-mail please";
//     }
//     else if (password == "" || password == " ") {
//         empty = "Enter Your password please";
//     }
//     if (empty)
//         alert(empty);
//     else {
//         firebase.auth().signInWithEmailAndPassword(email.value, password.value)
//             .then(() => {
//                 alert("Zalogowano");
//                 user = firebase.auth().currentUser;
//                 x.style.display = "block";
//                 y.style.display = "none";
//                 document.getElementById("uzytkownik").innerHTML = "Uzytkownik: " + user.email;
//                 console.log(user);
//                 getVisits(listaWizyt);
//                 console.log(listaWizyt);
//             })
//             .catch(error => (alert(error)));
//     }
// }


// function writeUserData(userId, username, email) {
//     firebase.database().ref('users/' + userId).set({
//         username: username,
//         email: email
//     }, function (error) {
//         if (error) {
//             alert(error);
//         } else {
//         }
//     });
// }



// function writeVisitData() {
//     firebase.database().ref('visits/' + user.uid).push({
//         email: user.email,
//         placowka: document.getElementById("place").value,
//         nazwa_badania: document.getElementById("check_name").value,
//         data: document.getElementById("check_date").value,
//         lekarz: document.getElementById("doctor").value,
//         informacje: document.getElementById("info").value,
//         wynik: '',
//         leki: '',
//         koszt: 0

//     }, function (error) {
//         if (error) {
//             alert(error);
//         } else {
//             refreshData();
//         }
//     });
// }


// function getVisits(visits) {
//     firebase.database().ref('visits/' + user.uid).once("value", function (snapshot) {

//         var visitsList = snapshot.val();
//         console.log(visitsList)

//         for (let visit in visitsList) {

//             listaWizyt.push({
//                 key: visit,
//                 data: visitsList[visit].data,
//                 email: visitsList[visit].email,
//                 informacje: visitsList[visit].informacje,
//                 lekarz: visitsList[visit].lekarz,
//                 nazwa_badania: visitsList[visit].nazwa_badania,
//                 placowka: visitsList[visit].placowka,
//                 wynik: visitsList[visit].wynik,
//                 leki: visitsList[visit].leki,
//                 koszt: visitsList[visit].koszt
//             });
//         }
//         for (let i = 0; i < listaWizyt.length; i++) {
//             addListVisitItem(i, listaWizyt[i]);
//         };
//     });
// }

// function addListVisitItem(index, visit) {
//     var e = document.createElement("li");
//     e.setAttribute('data-id', index)
//     e.setAttribute('data-key', visit.key)
//     e.setAttribute('class', 'list--item');
//     e.setAttribute('id', 'list_item');
//     e.setAttribute('onClick', 'fillWynik(this)');

//     var t = document.createTextNode(visit.data + " - " + visit.nazwa_badania);

//     e.appendChild(t);
//     document.getElementById("visits_list").appendChild(e);
// }


// function fillWynik(obiekt) {
//     document.getElementById('wynikBadania').setAttribute('data-key', obiekt.getAttribute('data-key'))

//     var index = obiekt.getAttribute('data-id');
//     document.getElementById('check_name_').innerText = listaWizyt[index].nazwa_badania;
//     document.getElementById('place_').innerText = listaWizyt[index].placowka;
//     document.getElementById('check_date_').innerText = listaWizyt[index].data;
//     document.getElementById('doctor_').innerText = listaWizyt[index].lekarz;
//     document.getElementById('info_').innerText = listaWizyt[index].informacje;


//     document.getElementById('result').value = listaWizyt[index].wynik;
//     document.getElementById('medicines').value = listaWizyt[index].leki;
//     document.getElementById('cost').value = listaWizyt[index].koszt;
// }

// function updateWynikBadania() {
//     var key = document.getElementById('wynikBadania').getAttribute('data-key');
//     firebase.database().ref('visits/' + user.uid).child(key).update({
//         wynik: document.getElementById('result').value,
//         leki: document.getElementById('medicines').value,
//         koszt: document.getElementById('cost').value
//     });
//     refreshData();
// }

// function refreshData() {
//     listaWizyt = [];
//     document.getElementById('visits_list').innerHTML = '';
//     getVisits(listaWizyt);
// }

///////////////////////////////////////////////////////////////////////////
var app = new Vue({
    el: '#app',
    data: {
        firebaseConfig: {
            apiKey: "AIzaSyA0gA-N5ihel2sCfUTeDn4f4gBVK2Jofnw",
            authDomain: "interaktywna-karta-medyczna.firebaseapp.com",
            databaseURL: "https://interaktywna-karta-medyczna.firebaseio.com",
            projectId: "interaktywna-karta-medyczna",
            storageBucket: "interaktywna-karta-medyczna.appspot.com",
            messagingSenderId: "359077375361",
            appId: "1:359077375361:web:8062ba39441bd769c68c80"
        },
        listaWizyt: [
        ],
        user: '',
        password: '',
        email: '',
        actualKey: '',
        formName: 'reg-form'
    },
    created() {
        firebase.initializeApp(this.firebaseConfig);
    },
    methods: {
        register() {
            var fail = false;
            var user;
            var name = this.formName;
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
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => {
                        alert("Zarejestrowano");
                        x.style.display = "block";
                        y.style.display = "none";
                        this.user = firebase.auth().currentUser;
                        document.getElementById("uzytkownik").innerHTML = "Uzytkownik: " + this.user.email;

                        this.writeUserData(this.user.uid, document.getElementById("name").value, this.user.email);
                    })
                    .catch(error => (alert(error)));
            }
            console.log(this.user);
        },
        login() {
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
                        this.user = firebase.auth().currentUser;
                        x.style.display = "block";
                        y.style.display = "none";
                        document.getElementById("uzytkownik").innerHTML = "Uzytkownik: " + this.user.email;
                        console.log(this.user);
                        this.getVisits(this.listaWizyt);
                        // console.log(this.listaWizyt);
                    })
                    .catch(error => (alert(error)));
            }
        },
        writeUserData(userId, username, email) {
            firebase.database().ref('users/' + userId).set({
                username: username,
                email: email
            }, function (error) {
                if (error) {
                    alert(error);
                } else {
                }
            });
        },
        writeVisitData() {
            firebase.database().ref('visits/' + this.user.uid).push({
                email: this.user.email,
                placowka: document.getElementById("place").value,
                nazwa_badania: document.getElementById("check_name").value,
                data: document.getElementById("check_date").value,
                lekarz: document.getElementById("doctor").value,
                informacje: document.getElementById("info").value,
                wynik: '',
                leki: '',
                koszt: 0

            }, function (error) {
                if (error) {
                    alert(error);
                } else {
                }
            });
            this.refreshData();
        },

        getVisits(listaWizyta) {
            firebase.database().ref('visits/' + this.user.uid).once("value", function (snapshot) {
                var visitsList = snapshot.val();

                for (let visit in visitsList) {
                    listaWizyta.push({
                        key: visit,
                        data: visitsList[visit].data,
                        email: visitsList[visit].email,
                        informacje: visitsList[visit].informacje,
                        lekarz: visitsList[visit].lekarz,
                        nazwa_badania: visitsList[visit].nazwa_badania,
                        placowka: visitsList[visit].placowka,
                        wynik: visitsList[visit].wynik,
                        leki: visitsList[visit].leki,
                        koszt: visitsList[visit].koszt
                    });
                    console.log(listaWizyta)
                }
            })
        },

        fillWynik(obiekt) {
            this.actualKey = obiekt.key;
            document.getElementById('check_name_').innerText = obiekt.nazwa_badania;
            document.getElementById('place_').innerText = obiekt.placowka;
            document.getElementById('check_date_').innerText = obiekt.data;
            document.getElementById('doctor_').innerText = obiekt.lekarz;
            document.getElementById('info_').innerText = obiekt.informacje;


            document.getElementById('result').value = obiekt.wynik;
            document.getElementById('medicines').value = obiekt.leki;
            document.getElementById('cost').value = obiekt.koszt;
        },

        updateWynikBadania() {
            firebase.database().ref('visits/' + this.user.uid).child(this.actualKey).update({
                wynik: document.getElementById('result').value,
                leki: document.getElementById('medicines').value,
                koszt: document.getElementById('cost').value
            });
            this.refreshData();
        },

        refreshData() {
            this.listaWizyt = [];
            document.getElementById('visits_list').innerHTML = '';
            this.getVisits(this.listaWizyt);
        },

    },
});