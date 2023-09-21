// შექმენით ფუნქცია, რომელიც იპოვის ყველზე გრძელ სიტყვას მოცემულ სტრიქონში.

const sentence = "მწვერვალები დაიპყარით არა იმიტომ, რომ მსოფლიომ დაგინახოთ, არამედ იმიტომ, რომ თქვენ დაინახოთ მსოფლიო";
const longestWords = findLongestWord(sentence);
function findLongestWord(sentence) {
    const words = sentence.split(' ');
    const longestWords = words.filter(word => word.length === Math.max(...words.map(word => word.length)));
    return longestWords;
}  
console.log(longestWords);


