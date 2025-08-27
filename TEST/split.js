// split()👇 only string me kam krta hai.

// split() ek string method hai jo ek string ko tod kar array me convert karta hai.

string.split(separator, limit);

<p>
  1. separator (required): Kis chiz pe todna hai (jaise space " ", comma ",", ya
  koi character).
  <br />
  2. limit (optional): Maximum kitne parts me split karna hai.
</p>;

let str = "Hello world from ChatGPT";
let result = str.split(" ");
console.log(result); //👇
["Hello", "world", "from", "ChatGPT"];
////////////////////////////////////////////////////////

let str2 = "hello";
let result2 = str2.split("");
console.log(result2); //👇
["h", "e", "l", "l", "o"];
/////////////////////////////////////////////////////////

// Example: Limit ke sath
let str3 = "one two three four";
let result3 = str3.split(" ", 2);
console.log(result3); //👇
["one", "two"];
///////////////////////////////////////////////////////////

let url = "https://example.com/page?id=123";
let parts = url.split("?");
console.log(parts); // ["https://example.com/page", "id=123"]
