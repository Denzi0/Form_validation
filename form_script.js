const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector("small");
    small.innerText = message;

}

function showSucces(input) {
    const formcontrol = input.parentElement;
    formcontrol.className = "form-control success";
}

function isValidateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (username.value === '') {
        showError(username, "Username is required");
    } else {
        showSucces(username);
    }

    if (email.value === '') {
        showError(email, "Email is required");
    } else if (!isValidateEmail(email.value)) {
        showError(email, "Email is not valid");
    } else {
        showSucces(email);
    }
    if (password.value === '') {
        showError(password, "Password is required");
    } else {
        showSucces(password);
    }
    if (password2.value === '') {
        showError(password2, "Confirm Password is required");
    } else {
        showSucces(password2);
    }

});