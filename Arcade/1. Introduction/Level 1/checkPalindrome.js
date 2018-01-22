/*
Given the string, check if it is a palindrome.

Example

For inputString = "aabaa", the output should be
checkPalindrome(inputString) = true;
For inputString = "abac", the output should be
checkPalindrome(inputString) = false;
For inputString = "a", the output should be
checkPalindrome(inputString) = true.
*/

function checkPalindrome(inputString) {
   //Solution #1, Split-Half method
    const len = inputString.length;
    for(let i = 0; i < len / 2; i++){
        if(inputString.charAt(i) != inputString.charAt(len - 1 - i)){
            return false;
        }
    }
    return true;
    
	//================
    //Solution #2, Split-Reverse-Join Method
	//================
    //return inputString === inputString.split('').reverse().join('');
	
	//=======NOTE=========
    //This method runs a little slower as found by test-cases:
    //   https://jsperf.com/checkpalindrome-23
  
}

