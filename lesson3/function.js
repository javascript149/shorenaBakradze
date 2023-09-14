// 1. შექმენით ფუნქცია, რომელიც რიცხვის კვადრატს იანგარიშებს;

function square(number) {
    return number * number;
}
let num = 7;
let result = square(num);
alert(`${7} კვადრატი ტოლია ${result}`);



function Square(number) {
    let Square;
    Square = number * number;
    return Square;
}
alert(Square (35))

// 2. შექმენით ფუნქცია, რომელიც ცელსიუსში მიწოდებულ ტემპერატურას გადაიყვანს ფერენჰეიტში, 1°C ტოლია 33.8°F -ის. (1°C × 9/5) + 32 = 33.8°F

function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}
let celsiusTemperature = 1;
let fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
alert(`${celsiusTemperature}°C ტოლია ${fahrenheitTemperature}°F`);

// 3. დაწერეთ ფუნქცია, რომელიც სტრიქონს უკუღმა ატრიალებს მაგ. abcd => dcba
let ArrayAbc = ["a", "b", "c", "d"];
alert(ArrayAbc);
let reversed = ArrayAbc.reverse();
alert(reversed);

function arrayReverse() {
    let ArrayAbc = ["a", "b", "c", "d"];
    let reversed = ArrayAbc.reverse();
    return reversed;
}
let reversedArray = arrayReverse();
alert(reversedArray);
