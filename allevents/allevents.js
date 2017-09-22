var database = firebase.database().ref('/');
var body = document.getElementById('body');
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log(user.uid);
    }
})

function logout() {
    firebase.auth().signOut().then(function () {
    }).catch(function (error) {
    });
}
var d = JSON.parse(localStorage.getItem('userdata'));
console.log(d);
database.child('event').on("child_added", function (snap) {
    var obj = snap.val();
    obj.key = snap.key
    console.log(snap.val())
    var div1 = document.createElement('DIV');
    div1.setAttribute('class', 'card');
    var div2 = document.createElement('Div');
    div2.setAttribute('class', 'card-body')
    var button1 = document.createElement('BUTTON');
    button1.setAttribute('class', 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent aaa')
    var button2 = document.createElement('BUTTON');
    var buttext = document.createTextNode("Interested")
    var hr = document.createElement('HR');
    var br = document.createElement('BR');

    button1.appendChild(buttext);
    button2.setAttribute('class', 'btn-danger')
    // button1.className = 'mdl-button mdl-js-button mdl-js-ripple-effect';
    // componentHandler.upgradeElement(button1);
    var org = document.createTextNode("Organization:" + " " + obj.organization);
    var eve = document.createTextNode("Event:" + " " + obj.event);
    var dat = document.createTextNode("Date:" + " " + obj.date);

    var h1 = document.createElement('h5');
    var p = document.createElement('h6');
    var p1 = document.createElement('h6');

    div1.className = "demo-card-wide mdl-card mdl-shadow--2dp"
    var get = JSON.parse(localStorage.getItem("id"));
    console.log(get)
    h1.appendChild(org);
    p.appendChild(eve);
    p1.appendChild(dat)
    div2.appendChild(p);
    div2.appendChild(p1)
    div1.appendChild(h1);
    div2.appendChild(br)
    div2.appendChild(hr)
    div1.appendChild(div2);
    div1.appendChild(button1);
    body.appendChild(div1);

    // database.child('users').on("child_added", function (snap) {
    //     var id = snap.key
    //     var use = snap.val()
    //     console.log(id)
    button1.addEventListener('click', function () {
        var send = {
            Organization: obj.organization,
            Event: obj.event,
            date: obj.date,
            useruid: get,
        }

        database.child('intevents/' + get).push(send);
        console.log(send)
        div2.style.backgroundColor = "yellow"

        // })



    })

    var get = localStorage.getItem('id');
    var s = get.substring(1, get.length - 1)
    console.log(get)
    database.child('intevents/' + get).on("child_added", function (snapshot) {
        console.log(snapshot.val())
        if (obj.organization == snapshot.val().Organization && obj.event == snapshot.val().Event) {
            console.log(snapshot.val())
            button1.style.backgroundColor = 'aqua';
            button1.style.color = 'white'
            button1.disabled = true
            button1.innerHTML = "confirmed"
        }
    })

    // div1.appendChild(hr)
    // body.appendChild(hr)

});



