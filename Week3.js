// Week 3 - freeCodeCamp Practice
// 1. Debugging
let score = 10;
console.log("Score is: " + score);

// 2. Basic Data Structures
let fruits = ["apple", "banana", "orange"];
fruits.push("mango");
console.log(fruits);

let learner = { name: "Aletta", grade: 10, subject: "JavaScript" };
console.log(learner.name);

// 3. Algorithm Scripting - Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("CyberSafe"));

// 3. Algorithm Scripting - Find longest word
function findLongestWord(str) {
  let words = str.split(" ");
  let longest = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest) {
      longest = words[i].length;
    }
  }
  return longest;
}
console.log(findLongestWord("I love learning JavaScript"));
