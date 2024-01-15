function validateInput(input, regex) {
    return input.value.match(regex) !== null;
}

function registerUser(event) {
    event.preventDefault();
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let messageElement = document.getElementById("message");
    

    let nameRegex = /^[A-Za-z]{3,15}$/;
    let emailRegex = /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+$/;
    let phoneRegex = /^\+995\d{9}$/;
    let usernameRegex = /^[a-zA-Z0-9_]{3,32}$/;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;

    if (
        validateInput(firstName, nameRegex) &&
        validateInput(lastName, nameRegex) &&
        validateInput(email, emailRegex) &&
        validateInput(phone, phoneRegex) &&
        validateInput(username, usernameRegex) &&
        validateInput(password, passwordRegex)
    ) {
        let userData = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            phone: phone.value,
            username: username.value,
            password: password.value,
        };

        localStorage.setItem(username.value, JSON.stringify(userData));

        // alert("Registration successful!");
        messageElement.textContent = "Registration successful!";
        messageElement.style.color = "green"; 
        
    } else {
        // alert("Invalid input. Please check the fields.");
        messageElement.textContent = "Invalid input. Please check the fields.";
        messageElement.style.color = "red"; 
    }
}


function loginUser(event) {
    event.preventDefault();

    const loginUsername = document.getElementById("loginUsername");
    const loginPassword = document.getElementById("loginPassword");
    const messageElement = document.getElementById("message"); 

    let userData = JSON.parse(localStorage.getItem(loginUsername.value));
    if (userData && userData.password === loginPassword.value) {
        messageElement.textContent = "Login successful!";
        messageElement.style.color = "green"; 
      
    } else {
        messageElement.textContent = "Invalid username or password.";
        messageElement.style.color = "red"; 
    }
}

