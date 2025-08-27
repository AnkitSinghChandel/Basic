// padStart(2, "0") aur toFixed(2) ka difference

// 🔹 padStart(2, "0")
// Bas string pe hi kaam karta hai, number pe nahi.

"5".padStart(2, "0"); // Output: "05"

// ➤ Kab use karte hain?
// Jab aapko number ko string banake fixed length dikhani ho, jaise:

// 1 → "01"
// 9 → "09"
// 10 → "10"

// Mostly time, date, counter, ID banate waqt use hota hai.
/////////////////////////////////////////////////////////////////

// 🔹 toFixed(2)

// Decimal number ke baad ke digits ko round karta hai, aur fix count tak digits dikhata hai.

(5.6789).toFixed(2); // Output: "5.68"
