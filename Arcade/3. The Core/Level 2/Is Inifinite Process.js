/*
Given integers a and b, determine whether the following pseudocode results in an infinite loop

while a is not equal to b do
  increase a by 1
  decrease b by 1
Assume that the program is executed on a virtual machine which can store arbitrary long numbers and execute forever.

Example

For a = 2 and b = 6, the output should be
isInfiniteProcess(a, b) = false;
For a = 2 and b = 3, the output should be
isInfiniteProcess(a, b) = true.
*/

function isInfiniteProcess(a, b) {
   //Example a: 6, b: 5, never meets
    if(b<a){
       return true;
   }
    //If a is odd and b is even, will never meet. 
    //If a is even and b is odd, will never meet
    if(a%2 !== b%2){
        return true;
    }
    return false;
}