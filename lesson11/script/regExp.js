function validateInput(input, regex) {
    return input.value.match(regex) !== null;
}

function registerUser(event) {
    event.preventDefault();
    
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    const nameRegex = /^[A-Za-z]{3,15}$/;
    const emailRegex = /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+$/;
    const phoneRegex = /^\+995\d{9}$/;
    const usernameRegex = /^[a-zA-Z0-9_]{3,32}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;

    if (
        validateInput(firstName, nameRegex) &&
        validateInput(lastName, nameRegex) &&
        validateInput(email, emailRegex) &&
        validateInput(phone, phoneRegex) &&
        validateInput(username, usernameRegex) &&
        validateInput(password, passwordRegex)
    ) {
        const userData = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            phone: phone.value,
            username: username.value,
            password: password.value,
        };

        // Store user data in localStorage
        localStorage.setItem(username.value, JSON.stringify(userData));

        alert("Registration successful!");
    } else {
        alert("Invalid input. Please check the fields.");
    }
}

function loginUser(event) {
    event.preventDefault();

    const loginUsername = document.getElementById("loginUsername");
    const loginPassword = document.getElementById("loginPassword");

    const userData = JSON.parse(localStorage.getItem(loginUsername.value));

    if (userData && userData.password === loginPassword.value) {
        alert("Login successful!");
    } else {
        alert("Invalid username or password.");
    }
}
