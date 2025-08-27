// var ko Re-declaration (dobara declare karna) kar sakte hai.
// Re-assign (dobara value dena) bhi kar sakte hai.
var a = 10;
var a = 20;
console.log(a); // 20
/////////////////////////////////////////////////////////////

// let ko Re-declaration (dobara declare karna) nahi kar sakte.
// Re-assign (dobara value dena) kar sakte hai.
let a = 10;
let a = 20; // redeclare not allowed. error: Identifier 'b' has already been declared.
a = 30; // ✅ allowed, Re-assign kar sakte hai.
console.log(y); // 30
/////////////////////////////////////////////////////////////
