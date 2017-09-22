var database = firebase.database().ref('/');
var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');

function submit() {

    var dataa = {
        username: username.value,
        email: email.value,
        password: password.value,
        
    }

    firebase.auth().createUserWithEmailAndPassword(dataa.email, dataa.password)
        .then(function (data) {
            console.log(data)
            database.child('users/' + data.uid).set(dataa)
        })
        .catch(function (error) {
            console.log("something went wrong")
        })

}