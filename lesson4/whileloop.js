// 1.	შექმენით პროგრამა, რომელიც ნებისმიერი 10 ელემენტისგან შემდგარი მასივიდან გამოიტანს ყოველ მესამე ელემენტს ეკრანზე. შეასრულეთ ეს დავალება ციკლების მეშვეობით.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let count = 2;

while (count < array.length) {
    console.log (array[count]);
    count += 3; 
};

// შექმენით, პროგრამა, რომელიც 10-დან 1-მდე რიცხვებს გამოიტანს. მაგ. 10,9,8,7,6,5,4,3,2,1, შეასრულეთ ეს დავალება ციკლების მეშვეობით.

let number = 10;
while (number >= 1) {
console.log(number);
number--;
};

let startingNumber = parseInt(prompt("Enter a starting number:"));
while (startingNumber >= 1) {
console.log(startingNumber);
startingNumber--;
};
// 3.	მოცემული მასივიდან
// let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob']
// ამოიღეთ 'Bob' სახელი ყველგან სადაც ის შეგხვდებათ და დაბრუნეთ მასივი 'Bob'-სახელის გარეშე. შედეგი ესეთი უნდა იყოს: ['John', 'Nick', 'Mary', 'Sue', 'Ann'] შეასრულეთ ეს დავალება ციკლების მეშვეობით, ასევე კარგი იქნება თუ იგივე დავალებას ციკლური ოპერაციების გამოყენების გარეშეც შეასრულებთ.

let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob'];
let result = [];
for (let i = 0; i < names.length; i++) {
if (names[i] !== 'Bob') {
    result.push(names[i]);
}
}
console.log(result); 


let Names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob'];
let resultesult = names.filter(name => name !== 'Bob');

console.log(result);

// 4.	ციკლური ოპერაციების მეშვეობით შექმენით ფუნქცია, რომელიც დაიანგარიშებს კონკრეტული რიცხვის ხარისხს, მაგ. შექმენით ფუნქცია სახელით: numberPower(number, power) და პარამეტრებით: number, power, მაგ. თუ რიცხვია 5 და ხარისხი 3, მაშინ თქვენმა ფუნქციამ უნდა დააბრუნოს 5*5*5 ანუ 125.
function numberPower(number, power) {
    if (power === 0) {
      return 1; 
    } else if (power < 0) {
      return "Power should be a non-negative integer"; 
    } else {
      let result = 1;
  
      for (let i = 1; i <= power; i++) {
        result *= number;
}

return result;
    }
}

const Number = 5;
const power = 3;
const Result = numberPower(number, power);
console.log(result); 

// 5.	შექმენით ფუნქცია, რომელიც 1-დან 100-მდე რიცხვებში დაიანგარიშებს თუ რომელი რიცხვები იყოფა 3-ზე უნაშთოდ, და იმ რიცხვების ადგილას რომლებიც იყოფა 3-ზე უნაშთოდ გამოიტანს, Fizz, ასევე იგივე ფუნქციის მიხედვით გამოიანგარიშეთ თუ რიცხვი 5-ზე იყოფა უნაშთოდ და გამოიტანეთ Buzz, ხოლო თუ რიცხვი იყოფა 3-ზეც და 5-ზეც უნაშთოდ გამოიტანეთ FizzBuzz.

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
      let output = "";
  
      if (i % 3 === 0) {
        output += "Fizz";
      }
  
      if (i % 5 === 0) {
        output += "Buzz";
      }
  
      if (output === "") {
        output = i;
      }
  
      console.log(output);
    }
}
fizzBuzz();
// 6.	შექმენით ფუნქცია,მაგ. სახელით: factorialCalculator(number), რომელიც დაიანგარიშებს და ეკრანზე გამოიტანს მისთვის პარამეტრის სახით მიწოდებული რიცხვის ფაქტორიალს, მაგ. 5! => 2*3*4*5 = 120, 

function factorialCalculator(number) {
  if (number < 0) {
    return "Factorial is not defined for negative numbers";
  } else if (number === 0 || number === 1) {
    return 1;
  } else {
    let result = 1;
    let i = 2;
    
    while (i <= number) {
      result *= i;
      i++;
    }
    return result;
  }
}
const inputNumber = 5;
const factorial = factorialCalculator(inputNumber);
console.log(`${inputNumber}! = ${factorial}`);







