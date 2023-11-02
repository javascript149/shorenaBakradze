
function registerUser() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let username = document.getElementById('registerUsername').value;
    let password = document.getElementById('registerPassword').value;

    let oldUsersData = JSON.parse(localStorage.getItem('usersData')) || [];

    for (let i = 0; i < oldUsersData.length; i++) {
        if (oldUsersData[i].username === username) {
            document.getElementById("registerMessage").textContent = "User with the same username already exists.";
            return;
        }
    }

    let user = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: "********"
    };

    if (oldUsersData === null) {
        localStorage.setItem('usersData', JSON.stringify([user]));
    } else {
        oldUsersData.push(user);
        localStorage.setItem('usersData', JSON.stringify(oldUsersData));
    }

    let sessionToken = generateString(36);


    localStorage.setItem("sessionToken", sessionToken);

    document.getElementById("registerMessage").textContent = "Registration successful.";
       
}