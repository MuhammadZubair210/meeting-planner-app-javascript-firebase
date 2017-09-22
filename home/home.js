var database = firebase.database().ref('/');
var organization = document.getElementById('organization');
var eventss = document.getElementById('event');
var date = document.getElementById('date');


function submit() {
    var eventdata = {
        organization: organization.value,
        event: eventss.value,
        date: date.value
    }
    database.child('event/').push(eventdata);
    console.log(eventdata)
}


function logout() {
    firebase.auth().signOut().then(function () {
    }).catch(function (error) {
    });
}