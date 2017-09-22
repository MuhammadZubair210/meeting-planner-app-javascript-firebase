var database = firebase.database().ref('/');
var email = document.getElementById('email');
var password = document.getElementById('password');


function login() {

    var dataa = {
        email: email.value,
        password: password.value
    }

    firebase.auth().signInWithEmailAndPassword(dataa.email, dataa.password)
        .then(function (success) {
            localStorage.clear();
            console.log(success);
            // database.child('users/').once('child_added', function (snapshot) {
                // var convert = JSON.stringify(snapshot.val());

                localStorage.setItem('id', JSON.stringify(success.uid));
                // console.log(snapshot.val())
                location = "../home/home.html";

            // })
        })
        .catch(function (error) {
            console.log(error);
        })
}

