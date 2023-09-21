function hoistExample() {
    a = "hello"; 
    b = "World"; 
}

hoistExample();

console.log(a);
console.log(b); 

//  a და b გამოცხადებულია var, let, ან const 
// გარეშე, ისინი გახდებიან გლობალური ცვლადები. ეს ნიშნავს იმას, 
// რომ მათზე წვდომა შესაძლებელია კოდის ნებისმიერი ადგილიდან,
//  მათ შორის ფუნქციის გარეთ.