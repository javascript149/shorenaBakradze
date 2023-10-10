document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    let existingDb = localStorage.getItem("usersData");

    if (existingDb) {
        let usersArray = JSON.parse(existingDb);
        let validUser = false;

        for (let i = 0; i < usersArray.length; i++) {
            if (usersArray[i].username === username && usersArray[i].password === password) {
                validUser = true;
                break;
            }
        }

        if (validUser) {
            message.textContent = "Login successful!";
        } else {
            message.textContent = "Invalid username or password. Please try again.";
        }
    } else {
        message.textContent = "No user data found. Please sign up.";
    }
});