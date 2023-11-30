function palindrome(str) {
// Regular expression that removes all non-alphanumeric characters.
    var regEx = /[\W_]/g;
// Variable that creates a new string from the function's argument (str) by making it lowercase and replacing all non-alphanumeric character (regEx) with "".
   var smallStr = str.toLowerCase().replace(regEx, "");
// Variable that reverses the new string created above (smallStr) by splitting, reversing and joining again.
   var reversedStr = smallStr.split("").reverse().join("");
//An if statement that returns true if the original argument (str) matches the same argument when reversed.
   if (smallStr === reversedStr) {
    return true;
   }
   return false;
}

console.log(palindrome("A man, a plan, a canal. Panama"))