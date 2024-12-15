// Question : 3
// Variation : 1 --> Calculate the hamming distance between two strings.

// string_01 = "hello"
// string_02 = "hwllr"
// The hamming distance will be 2 as two characters are different in the strings.

function hammingDistance(str_01, str_02) {
  if (str_01.length !== str_02.length) {
    return new Error("Strings must be of same length");
  }

  let distance = 0;
  for (let i = 0; i < str_01.length; i++) {
    if (str_01[i] !== str_02[i]) {
      distance++;
    }
  }

  return distance;
}

console.log(hammingDistance("hello", "hwlyr"));

// Variation : 2 --> Given the integers x and y, return the hamming distance between their bits.

function hammingDistanceNewVariation(x, y) {
  x = x.toString(2);
  y = y.toString(2);

  if (x.length < y.length) {
    while (x.length !== y.length) x = "0" + x;
  } else {
    while (y.length !== x.length) y = "0" + y;
  }

  let distance = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) {
      distance++;
    }
  }

  return distance;
}

console.log(hammingDistanceNewVariation(1, 4));
