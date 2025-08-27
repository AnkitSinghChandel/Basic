let array = [10, 25, 85, 26];
let highestNumber = Math.max(...array);
console.log("The highest number is:", highestNumber);
////////////////////////////////////////////////////////////////////

let array2 = [10, 25, 85, 26];
let lowestNumber = Math.min(...array2);
console.log("The lowest number is:", lowestNumber);
/////////////////////////////////////////////////////////////////////

let array3 = [10, 25, 85, 26];
array3.sort((a, b) => b - a); // Sort in descending order
let secondHighestNumber = array3[1];
console.log("The second highest number is:", secondHighestNumber);
