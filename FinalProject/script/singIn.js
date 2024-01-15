
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateString(length) {
    let result = '';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        result = result + characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

function signInAndCreateCookie() {
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;
    let rememberMeChecked = document.getElementById("rememberMe").checked;

    let dataFromDb = localStorage.getItem("usersData");
    dataFromDb = JSON.parse(dataFromDb);

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
            
           
            window.location.href = "index.html";
        }
    }

    localStorage.setItem("usersData", JSON.stringify(dataFromDb));
}
