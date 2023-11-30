function convertToRoman(num) {
// Map the values of Roman numerals into an object by creating 'key', 'value' pairs.
    var romanToNum = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
// Initialize a new variable to an empty string so that the
// function argument (num) can be translated into a string later on.
    var roman = "";
// Create a 'for, var, key, in' for loop to cycle through the object romanToNum.
    for (var key in romanToNum) {
// Create a while loop within the for loop. When num is greater than or equal to one of the key values, that key
// (the Roman numeral) is added to roman - the empty string.
// Thereafter, the value of that key (the number) is taken away from num, which creates a new num - this new num goes
// through the while loop again and restarts the process. Once num is no longer greater than or equal to romanToNum[key]
// (i.e. num === 0). The while loop ends, as does the for loop.
        while (num >= romanToNum[key]) {
            roman += key;
            num -= romanToNum[key];
        }
    }
    return roman;
}

console.log(convertToRoman(23));