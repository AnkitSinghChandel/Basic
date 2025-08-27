// slice()👇 string and array dono me kam krta hai.

// slice() ek string aur array method hai jo Original array ko change nahi karta
// kat ke ya slice krke new array deta hai.

array.slice(startIndex, endIndex);

<p>
  1. startIndex (required): Kahan se slice start karna hai (inclusive).
  <br />
  2. endIndex (optional): Kahan tak slice karna hai (exclusive, yaani us index
  ka item include nahi hota).
  <br />
  3. slice(start, end) → start se leke end (exclusive) tak ka data deta hai.
</p>;

// Example 1: Sirf startIndex dena
let arr = [1, 2, 3, 4, 5];
let result = arr.slice(2);
console.log(result); // [3, 4, 5]
//////////////////////////////////////////////////////////////

// Example 2: Array me slice
let arr2 = [10, 20, 30, 40, 50];
let result2 = arr2.slice(1, 4);
console.log(result2); // [20, 30, 40]
console.log(arr2); // [10, 20, 30, 40, 50] ← original array unchanged
/////////////////////////////////////////////////////////////

// Example 3: Negative index
let arr3 = [1, 2, 3, 4, 5];
let result3 = arr3.slice(-2);
console.log(result3); // [4, 5]
////////////////////////////////////////////////////////////

// Example 4: String me slice
let str = "Hello World";
let part = str.slice(0, 5);
console.log(part); // "Hello"
//////////////////////////////////////////////////////////

// Example 4: String me slice
// slice() ➤ Index based (inclusive, exclusive)
// inclusive se leke exclusive tak kat ke dega
let str2 = "JavaScript";
let part2 = str2.slice(4, 10);
console.log(part2); // "Script"
/////////////////////////////////////////////////////////

// slice() original array ya string ko modify nahi karta.

// splice() original ko change karta hai.

// Method	     New Array Deta Hai?	         Original Array Change?
// split()	     ✅ Yes	                       ❌ No
// slice()	     ✅ Yes	                       ❌ No
// splice()      ✅ Yes (deleted items)	       ✅ Yes
