function registrationForm() {
    let firstName = document.getElementById("first_name").value;
    let lastName = document.getElementById("last_name").value;
    let location = document.getElementById("location").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let existingDb = sessionStorage.getItem("usersData");

    let usersArray = [];

    if (existingDb) {
      usersArray = JSON.parse(existingDb);
    }

    usersArray.push({
      first_name: firstName,
      last_name: lastName,
      location: location,
      username: username,
      password: password,
    });

    sessionStorage.setItem("usersData", JSON.stringify(usersArray));

    document.getElementById("registrationForm").reset();
    document.getElementById("message").innerHTML = "Registration successful!";
  };
