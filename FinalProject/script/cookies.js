// function createCookie() {
//     let timeNow = new Date();

//     timeNow.setTime(timeNow.getTime() + 5 * 24 * 60 * 60 * 1000)

//     let atTime = timeNow.toUTCString();

//     let value = "MKiqweoMiooqwd123m12i3mkamskdmasd";
    
//     document.cookie = `sessionToken=${value};expires=${atTime};path=/`

//     let cookie = document.cookie;

//     let splitedCookie = cookie.split('; ');
    
//     let desiredCookie = splitedCookie.filter(cookie => cookie.includes("sessionToken"));

//     desiredCookie = desiredCookie[0];

//     desiredCookie = desiredCookie.slice(desiredCookie.indexOf("=")+1);

//     console.log(desiredCookie)
    
// }
// function createCookie() {
//     // Function to create a sample cookie
//     document.cookie = "sampleCookie=accepted; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
// }

// function acceptCookies() {
//     // Function to hide the cookie banner and record the user's cookie consent
//     var cookieBanner = document.getElementById("cookieBanner");
//     cookieBanner.style.display = "none";

//     // You can set a cookie to remember the user's cookie preference here
// }

// // Your login and registration functions can be defined here (e.g., loginUser and registerUser)
// function loginUser(event) {
//     event.preventDefault();
//     // Implement login logic
// }

// function registerUser(event) {
//     event.preventDefault();
//     // Implement registration logic
// }

// // Check for user's cookie preference and show/hide the cookie banner accordingly
// // You can implement this based on the user's choice in your cookie settings
// // For example, if the user has accepted cookies, you can hide the banner initially
// // and display it only if the user changes their preference

// function createCookies() {
//     createSessionCookie();
//     createSampleCookie();
// }

// function createSessionCookie() {
//     let timeNow = new Date();
//     timeNow.setTime(timeNow.getTime() + 5 * 24 * 60 * 60 * 1000);
//     let atTime = timeNow.toUTCString();
//     let sessionValue = "MKiqweoMiooqwd123m12i3mkamskdmasd";
//     document.cookie = `sessionToken=${sessionValue};expires=${atTime};path=/`;
// }

// function createSampleCookie() {
//     // Function to create a sample cookie
//     document.cookie = "sampleCookie=accepted; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
// }

// function acceptCookies() {
//     // Function to hide the cookie banner and record the user's cookie consent
//     var cookieBanner = document.getElementById("cookieBanner");
//     cookieBanner.style.display = "none";

//     // You can set a cookie to remember the user's cookie preference here
// }

// // Your login and registration functions can be defined here (e.g., loginUser and registerUser)
// function loginUser(event) {
//     event.preventDefault();
//     // Implement login logic
// }

// function registerUser(event) {
//     event.preventDefault();
//     // Implement registration logic
// }