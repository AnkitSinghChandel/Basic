// delete a property from an object.
let user = {
  name: "Ankit",
  age: 25,
  city: "Delhi",
};

delete user.age;

console.log(user);
// { name: "Ankit", city: "Delhi" }
////////////////////////////////////////////////////

let user2 = {
  name: "Ankit",
  age: 25,
};

user.city = "Delhi"; // add

console.log(user2);
// { name: "Ankit", age: 25, city: "Delhi" }
