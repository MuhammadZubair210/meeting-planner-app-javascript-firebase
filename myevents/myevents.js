var database = firebase.database().ref('/');
var body = document.getElementById('body');
// database.child('users').on("child_added", function (snap) {
//     var id = snap.key
//     var use = snap.val()

// })
// function interested(g) {
var get = localStorage.getItem('id');
console.log(get)
// var s = get.substring(1, get.length - 1)
used = []
database.child('intevents/' + get).on("child_added", function (snapshot) {
    console.log(get)
    used=(snapshot.val())
    console.log(get)
    console.log(firebase.auth())
    var div1 = document.createElement('DIV');
    div1.setAttribute('class', 'demo-card-wide mdl-card mdl-shadow--2dp');
    var div2 = document.createElement('Div');
    div2.setAttribute('class', 'card-body')
    var txt = document.createTextNode("Organization: " + snapshot.val().Organization)
    var ev = document.createTextNode("Event: " + used.Event)
    var dat = document.createTextNode("Date: " + used.date)
    console.log(new Date(used.date))

    var h1 = document.createElement('H5')
    var h3 = document.createElement('H3')
    var h33 = document.createElement('H5')

    h1.appendChild(txt);
    h3.appendChild(ev);
    h33.appendChild(dat)
    div2.appendChild(ev);
    div2.appendChild(h33)
    div1.appendChild(h1);
    div1.appendChild(div2);
    body.appendChild(div1)
})

function logout() {
    firebase.auth().signOut().then(function () {
        location = "../login/login.html"
    }).catch(function (error) {
    });
}
