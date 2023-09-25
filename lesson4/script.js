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

// 7.	შექმენით ფუნქცია, რომელიც სტრიქონის პირველ ასობგერის კაპიტალიზირებას მოახდენს მაგ. javascript => უნდა გახდეს: Javascript, ანუ J დიდი ასობგერით უნდა ეწეროს.

function capitalizeFirstLetter(str) {
  if (str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}
const inputString = "javascript";
const capitalizedString = capitalizeFirstLetter(inputString);
console.log(capitalizedString);

// 8.	შექმენით ფუნქცია, რომელიც შეამოწმებს არის თუ არა მასზე მიწოდებული სტრიქონი ცარიელი. მაგ. blankStringChecker(testString) => რომელიც დააბრუნებს this string is blank-ს თუ ცარიელია/ this string is not blank-ს თუ ცარიელი არაა.

function blankStringChecker(str) {
  if (str.trim() === '') {
    return 'This string is blank';
  } else {
    return 'This string is not blank';
  }
}
const testString1 = '';
const testString2 = 'Hello, world!';

console.log(blankStringChecker(testString1)); 
console.log(blankStringChecker(testString2)); 

// 9. შექმენით ფუნქცია, რომელიც მასზე მიწოდებულ სტრიქონს გადააქცევს მასივად. მაგ. stringToArray(testString) => თუ მივაწვდით სტრიქონს “Hello, World” => გამოიტანს მის ვერსიას მასივში. [“Hello”, “World”]

function stringToArray(inputString) {
  const wordsArray = inputString.split(' ');

  return wordsArray;
}
const testString = "Hello, World";
const resultArray = stringToArray(testString);
console.log(resultArray); 

// 10.	შექმენით ერთგვარი ემაილის დამცველი ფუნქცია, რომლის ფუნქციონალი მდგომარეობს შემდგომში: მომხმარებელი გაწვდის ემაილს წერტილით გამოყოფილ თავისი სახელით და გვარით, beqa.beqauri@gmail.com, თქვენი ფუნქცია კი გამოიტანს მის დაცულ ვერსიას ამ ფორმით:  beqa……..@gmail.com. წერტილების ოდენობა უნდა ემთხვეოდეს გვარის სიგრძეს.

function protectEmail(email) {
  const [username, domain] = email.split('@');
  const [firstName, lastName] = username.split('.');
  const dotsCount = lastName.length;
  const protectedEmail = `${firstName}${'.'.repeat(dotsCount)}@${domain}`;

  return protectedEmail;
}
const email = "beqa.beqauri@gmail.com";
const protectedEmail = protectEmail(email);
console.log(protectedEmail); 







