let a = [12, 22, 33, 55, 66, 66];
let b = [5, 4, 4, 3, 4, 6, 7];
let c = ["asc", "asc2", "asc3"];
let d = [...a, ...b, ...c];
console.log("f1", d);
///////////////////////////////////////////////////

let a2 = [12, 22, 33, 55, 66, 66];
let b2 = [5, 4, 4, 3, 4, 6, 7];
let c2 = ["asc", "asc2", "asc3"];
let d2 = [...new Set([...a, ...b, ...c])];
console.log("f2", d2);
///////////////////////////////////////////////////

let a3 = [12, 22, 33, 55, 66, 66];
let b3 = [5, 4, 4, 3, 4, 6, 7];
let c3 = ["Ankit", "28", "100", "extra"];
let keyName = ["name", "age", "salary"];

let object = {};

keyName.forEach((item, index) => {
  object[item] = c3[index];
});
console.log("f3", object);

let d3 = [...a, ...b, object];
console.log("f33", d3);
///////////////////////////////////////////////////

let a4 = [12, 22, 33, 55, 66, 66];
let b4 = [5, 4, 4, 3, 4, 6, 7];

let data = [
  { name: "Ankit", age: 20, salary: 100 },
  { name: "Ravi", age: 30, salary: 200 },
];

let data2 = data.map((x) => ({
  ascName: x.name,
  ascAge: x.age,
  ascSalary: x.salary,
}));
console.log("f4", data2);

let d4 = [...a4, ...b4, ...data2];

let d44 = [
  ...a4,
  ...b4,
  ...data.map((x) => ({
    ascName: x.name,
    ascAge: x.age,
    ascSalary: x.salary,
  })),
];
console.log("f44", d44);
///////////////////////////////////////////////////////

// Object.entries() => Object ko Array me key-value pairs banata hai👇
let obj = {
  name: "asc",
  age: 25,
  salary: 300,
};

let entries = Object.entries(obj);
console.log("f5", entries);
// output 👇
[
  ["name", "asc"],
  ["age", 25],
  ["salary", 300],
];

////////////////////////////////////////////////////////

// Object.fromEntries() => Array of object key-value pairs banata hai👇
// Object.fromEntries() sirf 2-item arrays handle karta hai:
let entries2 = [
  ["name", "asc"],
  ["age", 25],
  ["salary", 400],
];

let obj2 = Object.fromEntries(entries);
console.log("f6", obj2);
// output 👇
// {
//   name: "asc",
//   age: 25,
//   salary: 400
// }
