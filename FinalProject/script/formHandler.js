function firstNameValidator(inputId, resultId) {
    let inputElement = document.getElementById(inputId);
    let resultElement = document.getElementById(resultId);
    const validationRegEx = inputElement.getAttribute("pattern");

    if (!inputElement.value.match(validationRegEx)) {
        resultElement.style.color = "red";
        resultElement.innerHTML = "Incorrect Format";
        return false;
    } else {
        resultElement.innerHTML = "";
        return true;
    }
}