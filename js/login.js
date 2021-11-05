var loginForm = document.getElementById("login-form")
var outputDiv = document.getElementById("output")

function getInfo() {
    console.log('in getinfo');
    username = loginForm.name.value;
    email = loginForm.email.value;

    outputDiv.innerHTML = "<h1>Name is " + username + " and email is " + email + ".</h1>"
}


// Prevent login form from submitting, so we can have more control over it in javascript
document.getElementById("loginsubmit").addEventListener("click", function(event) {
    event.preventDefault();
    getInfo();
});