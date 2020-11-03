/** product: calculate the product of an array of numbers. */

function product(nums, i=0, prod=1) {

  if (i > nums.length - 1) {
    return prod;
  } else {
    prod *= nums[i];
    return product(nums, i+1, prod)
  }

}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0, long=0) {

  if (i > words.length - 1) {
    return long;
  } else {
    if (words[i].length > long) long = words[i].length;
    return longest(words, i+1, long);
  }

}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0, chopped="") {

  if (i > str.length - 1) {
    return chopped;
  } else {
    chopped += str[i];
    return everyOther(str, i+2, chopped);
  }

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
