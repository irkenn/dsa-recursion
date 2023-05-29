/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  if( i === nums.length) return 1;
  
  return nums[i] * product(nums, i + 1);
}


function longest(words, i=0) {
    
  if (words.length == 1){
      return words[0].length;
  }
  else if (i > words.length-1)return;
  let word1 = words[i].length;
  let word2 = longest(words, i+1);
  if(word2 == undefined){
      return 0;
  }
  else if (word1 >= word2){
      return word1;
  }
  else if(word1 <= word2){
      return word2;
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0) {
  if (i > str.length-1);
    if(str[i] == undefined){
      return '';
    }
    return str[i] + everyOther(str, i+2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */


function isPalindrome(str, i=0) {
  if (i > str.length)return;
  
  let mirror = isPalindrome(str, i+1) + str[i];
  if(str[i] == undefined){
    return '';
  }
  else if (i==0){
    return mirror == str;
  }
  return mirror;
}
/** findIndex: return the index of val in arr (or -1 if val is not present). */

//This was my first approach
// function findIndex(arr, val, i=0) {
  //   if (i > arr.length)return -1 ;
  
  //   let arrVal = findIndex(arr, val, i+1);
  //   if(arr[i] == val){
    //     return i;
    //   }
    //   return arrVal;
    // }

//A more refined approach    
function findIndex(arr, val, i=0) {
    if (i > arr.length)return -1;
    
    if(arr[i] == val){
      return i;
    }
    return findIndex(arr, val, i+1);
  }
/** revString: return a copy of a string, but in reverse. */

function revString(str, i=0) {
  if (i > str.length)return;

  if(str[i] == undefined){
    return '';
  }
  return revString(str, i+1) + str[i];
}
/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let arr = [];
    for(let o in obj){
      if (typeof obj[o] == 'object'){
        let newArr = gatherStrings(obj[o]); 
        newArr.forEach(i => arr.push(i));
      }
      else if(typeof obj[o] === 'string'){
        arr.push(obj[o])
      }
    }
    return arr;
  }


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */


function binarySearch(arr, val, left=0, right=1) {

  if(right == 1 && arr.length > 2){
    return binarySearch(arr, val, 0, arr.length -1);
  }
  if (left >= right) return -1;
  let middle = Math.floor((left+right)/2);
  if(val < arr[0] || val > arr[arr.length -1]){
    return -1
  }
  else if(arr[middle] == val ){
    return middle;  
  }
  else if(arr[0] == val){
    return 0;
  }
  else if(arr[arr.length -1] == val){
    return arr.length -1;
  }
  else if(arr[middle] < val){ 
    return binarySearch(arr, val, middle, right);  
  }
  else if(arr[middle] > val){ 
    return binarySearch(arr, val, left, middle);
  }
  return -1;
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
