// Strings in javascript
const string = new String("Shrey Thakkar");
const string_01 = "Shrey Thakkar";
const string_02 = "Shrey Thakkar";
const string_03 = `
Shrey Thakkar
Hi there man!!
`;

const name = "Shrey Thakkar";
const github = "thakkarshrey";

// Template literals
console.log`Hi my name is ${name} and my github is ${github}`;

function test(string, name, github) {
  console.log({ string, name, github });
}

test`Hi my name is ${name} and my github is ${github}`;

// String length
const str = "Shrey Thakkar";
console.log(str.length);

// Accessing characters
// console.log(str.charAt(3));
// console.log(str[7]);

// Looping through string
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

// Mutating strings
str[3] = "f"; // cannot do this because strings in javascript are immutable
const replacedStr = str.replace("k", "w");
const replaceAllStr = str.replaceAll("k", "w");
console.log(replacedStr, replaceAllStr);

// concatination
const conactStr = str.concat(" here i am");
console.log(conactStr);

// trim
const newStr = "       Hello world       ";
console.log(newStr.trim());

// Searching
console.log(str.indexOf("T"));
console.log(str.indexOf("Thakkar"));
console.log(str.lastIndexOf("k"));
console.log(str.startsWith("S"));
console.log(str.endsWith("r"));

// Extracting substrings
console.log(str.substring(5, 10));
console.log(str.slice(-6));

// Converting case
const toBeConverted = 1;
console.log(typeof String(toBeConverted));

const toBeConvertedObj = { name: "Shrey" };
console.log(String(toBeConvertedObj)); // This willl give [Object Object] and it is not the right way to convert an object

console.log(JSON.stringify(toBeConvertedObj)); // {"name" : "Shrey"}
console.log(str.toLowerCase());
console.log(str.toUpperCase());

console.log("A" === "a"); // It will return false as Javascript uses ASCII letter to identify characters.

// Check the ASCII code of letters
console.log(str.charCodeAt(0)); // 83

// Get letters from ASCII code
console.log(String.fromCharCode(65)); // A

// String comparison
const str_01 = "apple";
const str_02 = "apple";

console.log(str_01.localeCompare(str_02)); // It will give -1 if both strings does not match. If it matches then it will give 0. If some words match then it will give 1.

// Includes
console.log(str.includes("Shrey")); // true

// Split and join
console.log(str.split("a"));
const arr = ["apple", "banana"];
console.log(arr.join(" and "));
