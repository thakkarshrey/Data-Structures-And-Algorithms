// Question : 4 - Check for valid anagram.
// string_01 = "anagram"
// string_02 = "nagaram"

function checkAnagram(str_01 = "", str_02 = "") {
  if (str_01.length !== str_02.length) return false; // if anagram does not have same length then they cannot be two words made from each other.
  const temp_str_01 = str_01.split("").sort().join("");
  const temp_str_02 = str_02.split("").sort().join("");

  return temp_str_01 === temp_str_02;
}

console.log(checkAnagram("anagram", "nagaram"));

function checkAnagramOptimized(str_01, str_02) {
  if (str_01.length !== str_02.length) return false;

  let obj_01 = {};
  let obj_02 = {};

  for (let i = 0; i < str_01.length; i++) {
    if (str_01[i] in obj_01) obj_01[str_01[i]] += 1;
    else obj_01[str_01[i]] = 1;
    if (str_02[i] in obj_02) obj_02[str_02[i]] += 1;
    else obj_02[str_02[i]] = 1;
  }

  for (const key in obj_01) {
    if (obj_01[key] !== obj_02[key]) return false;
  }

  return true;
}
console.log(checkAnagramOptimized("rat", "tar"));
