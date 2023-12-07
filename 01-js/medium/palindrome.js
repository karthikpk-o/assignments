/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) 
{
  let cleaned_str = str.replace(" ",'').replace(/[^\w]/g ,'').toLowerCase();
  let str_rev = cleaned_str.split('').reverse().join('');
  return str_rev == cleaned_str
}

module.exports = isPalindrome;
