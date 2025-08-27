// splice()👇 only array me kam krta hai.

// splice() ek array method hai jo array me se elements ko add, remove ya replace karne ke kaam aata hai.

array.splice(startIndex, deleteCount, additem1, additem2, additem3);

// Parameter 👇                   Description 👇
// startIndex	                  Kahan se changes start karna hai (inclusive)
// deleteCount	                  Kitne elements remove karna hai
// item1, item2, ...	          (Optional) Naye elements jo insert karna ho

// Example 1: Elements remove karna
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 2); // index 2 se 2 elements delete karo
console.log(arr); // [1, 2, 5]
/////////////////////////////////////////////////////////////////////

// Example 2: Elements add karna
let arr2 = [1, 2, 5];
arr2.splice(2, 0, 3, 4); // index 2 pe kuch delete nahi, sirf 3 aur 4 insert karo
console.log(arr2); // [1, 2, 3, 4, 5]
/////////////////////////////////////////////////////////////////////

// Example 3: Elements replace karna
let arr3 = [1, 2, 3, 4, 5];
arr3.splice(1, 2, 20, 30); // index 1 se 2 elements hatao (2,3), aur unki jagah 20,30 daalo
console.log(arr3); // [1, 20, 30, 4, 5]
//////////////////////////////////////////////////////////////////////

// Example 4: Sirf last element hatana
let arr4 = [10, 20, 30];
arr4.splice(-1, 1); // last index se 1 element delete
console.log(arr4); // [10, 20]
/////////////////////////////////////////////////////////////////////

// splice() original array ko hi modify karta hai.
// Agar aapko array ko bina badle naya array chahiye, to slice() use karo.
