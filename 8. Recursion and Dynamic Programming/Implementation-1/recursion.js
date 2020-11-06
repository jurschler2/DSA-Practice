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

function isPalindrome(str, left=0, right=str.length-1) {

  if (left > right) return true;

  if (str[left] !== str[right]) {
    return false;
  } else {
    return isPalindrome(str, left+1, right-1);
  }

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {

  if (idx > arr.length - 1) return -1;
  if (arr[idx] === val) {
    return idx;
  } else {
    return findIndex(arr, val, idx+1);
  }

}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx=str.length-1, rev='') {

  if (idx < 0) return rev;
  rev += str[idx];
  return revString(str, idx-1, rev);

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

  let arr = [];

  for (let key in obj) {
    if (typeof obj[key] ===  'string') {
      arr.push(obj[key]) 
    } else if (typeof obj[key] === 'object') {
      arr.push(...gatherStrings(obj[key]));
    }
  }
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val=-1, left=0, right=arr.length) {

  if (left > right) return -1;
  let mid = Math.floor((left+right) / 2);
  if(arr[mid] === val) {
    return mid;
  } else if (arr[mid] < val){
    return binarySearch(arr, val, mid+1, right); 
  } else {
    return binarySearch(arr, val, left, mid-1); 
  }

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
