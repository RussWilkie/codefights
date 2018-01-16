/*
Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

For n = 1230, the output should be
isLucky(n) = true;
For n = 239017, the output should be
isLucky(n) = false.
*/

function isLucky(n) {
    let nums = n.toString();
    
    let arr1 = (nums.substring(0,nums.length/2)).split('');
    let arr2 = (nums.substring(nums.length/2, nums.length)).split('');
    
    const add = (num1, num2) => {
        return Number(num1)+Number(num2);
    }  
    
    if(arr1.reduce(add) === arr2.reduce(add)){
        return true;
    }
    return false;
}
