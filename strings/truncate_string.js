// Question : 1 - Truncate the string
// Input : "Go to shreythakkar.com", maxLength : 5
// Output : "Go to..."

function truncate(str = "", maxLength) {
  if (str.length > maxLength) return str.slice(0, maxLength) + "...";
  return str;
}

console.log(truncate("Go to shreythakkar.com", 5));
