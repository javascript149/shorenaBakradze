function signInHandler(event) {
    event.preventDefault(); // Prevent form submission

    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;
    let rememberMeChecked = document.getElementById("rememberMe").checked;

    // Fetch user data from localStorage and validate
    let dataFromDb = JSON.parse(localStorage.getItem("usersData")) || [];

    for (let userData of dataFromDb) {
        if (userData.username === username && userData.password === password) {
            if (rememberMeChecked === true) {
                let timeNow = new Date();
                timeNow.setTime(timeNow.getTime() + 5 * 24 * 60 * 60 * 1000);
                let atTime = timeNow.toUTCString();
                let value = generateString(36);
                document.cookie = `sessionToken=${value};expires=${atTime};path=/`;
                userData.sessionToken = value;
            } else {
                let value = generateString(36);
                userData.sessionToken = value;
                sessionStorage.setItem("sessionToken", value);
            }
            localStorage.setItem("usersData", JSON.stringify(dataFromDb));
            // Successful login, you can redirect the user or show a success message here.
            return;
        }
    }
    document.getElementById("loginMessage").textContent = "Invalid username or password.";
}


