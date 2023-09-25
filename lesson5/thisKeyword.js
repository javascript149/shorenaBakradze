// შექმენით ობიექტი სახელით "calculator" შესაბამისი ატრიბუტებით სახელად. num1, num2, ანუ რაღაც ესეთი {num1: 10, num2: 5}, დაამატეთ ამ ობიექტში ახალი ატრიბუტები სახელით add, substract, multiply, divide, მათი მთავარი მიზანი უნდა იქნეს, რომ გამოიანგარიშოს ამ ორი რიცხვის ჯამი, სხვაობა, ნამრავლი, განაყოფი. ეს ყველაფერი მოახდინეთ this საკვანძო სიტყვის მეშვეობით.

const calculator = {
    num1: 10,
    num2: 5,
    
    add: function() {
    return this.num1 + this.num2;
    },
    
    subtract: function() {
    return this.num1 - this.num2;
    },
    
    multiply: function() {
    return this.num1 * this.num2;
    },
    
    divide: function() {
    return this.num1 / this.num2;
    }
};
  console.log(calculator.add()); 
  console.log( calculator.subtract()); 
  console.log(calculator.multiply()); 
  console.log(calculator.divide()); 
