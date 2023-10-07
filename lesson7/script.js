let calcInput = document.getElementById("result");
let mathSymbols = ["+", "-", "*", "÷"];

function plusHandler() {
    let currentValue = calcInput.value;
    if (currentValue !== "" && !mathSymbols.includes(currentValue[currentValue.length - 1])) {
        calcInput.value = currentValue + "+";
    }
}

function minusHandler() {
    let currentValue = calcInput.value;
    if (currentValue !== "" && !mathSymbols.includes(currentValue[currentValue.length - 1])) {
        calcInput.value = currentValue + "-";
    }
}

function multiplyHandler() {
    let currentValue = calcInput.value;
    if (currentValue !== "" && !mathSymbols.includes(currentValue[currentValue.length - 1])) {
        calcInput.value = currentValue + "*";
    }
}

function divideHandler() {
    let currentValue = calcInput.value;
    if (currentValue !== "" && !mathSymbols.includes(currentValue[currentValue.length - 1])) {
        calcInput.value = currentValue + "÷";
    }
}

function sevenHandler() {
    calcInput.value = calcInput.value + "7";
}

function eightHandler() {
    calcInput.value = calcInput.value + "8";
}

function nineHandler() {
    calcInput.value = calcInput.value + "9";
}

function fourHandler() {
    calcInput.value = calcInput.value + "4";
}

function fiveHandler() {
    calcInput.value = calcInput.value + "5";
}

function sixHandler() {
    calcInput.value = calcInput.value + "6";
}

function oneHandler() {
    calcInput.value = calcInput.value + "1";
}

function twoHandler() {
    calcInput.value = calcInput.value + "2";
}

function threeHandler() {
    calcInput.value = calcInput.value + "3";
}

function zeroHandler() {
    calcInput.value = calcInput.value + "0";
}

function clearHandler() {
    calcInput.value = "";
}

function equalsHandler() {
    let currentValue = calcInput.value;
    if (currentValue.includes("+")) {
        let splitNumbers = currentValue.split("+");
        let sum = 0;

        for (let number of splitNumbers) {
            sum = sum + Number(number);
        }
        calcInput.value = sum;
    } else if (currentValue.includes("-")) {
        let splitNumbers = currentValue.split("-");
        calcInput.value = Number(splitNumbers[0]) - Number(splitNumbers[1]);
    } else if (currentValue.includes("*")) {
        let splitNumbers = currentValue.split("*");
        calcInput.value = Number(splitNumbers[0]) * Number(splitNumbers[1]);
    } else if (currentValue.includes("÷")) {
        let splitNumbers = currentValue.split("÷");
        if (Number(splitNumbers[1]) !== 0) {
            calcInput.value = Number(splitNumbers[0]) / Number(splitNumbers[1]);
        } else {
            calcInput.value = "Error";
        }
    }
}