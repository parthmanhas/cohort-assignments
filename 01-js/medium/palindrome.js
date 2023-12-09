/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();

  let left = 0, right = str.length - 1;

  const IGNORE = [' ', '!', '.', '?', ','];

  while (left < right) {
    while (IGNORE.includes(str[left])) left += 1;
    while (IGNORE.includes(str[right])) right -= 1;
    if (str[left] !== str[right]) {
      return false;
    }
    left += 1;
    right -= 1;
  }

  return true;
}

module.exports = isPalindrome;
