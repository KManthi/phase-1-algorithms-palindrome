function isPalindrome(word) {
 let reversedWord = reverse(word);
 return word === reversedWord;
}

function reverse(word) {
  return word.split('').reverse().join('');
}
/* 
  If the string is the same forwards and backwords it should return true:
  -Reverse the input string.
  -Check wether the reverse input is equal to the initial input
  -If it is, return true if not return false
*/

/*
  A function called reverse takes in a word and splits the word into an array, reverses the order and then joins them back up into a string.
  The function isPalindrome takes in a word and assigns a variable reverseWord to the reverse f the word. 
  It then checks whether the reverse and the initial are equal.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome(""));


}

module.exports = isPalindrome;
