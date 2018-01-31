/*
I am planning an upcoming challenge. But as is common, I am breaking it into little parts first. So this will be a series, instead of releasing the full challenge at once. I will release the full challenge after all these! So look forward to it!

The first thing to do is to check that an array,arr, is of pairwise relatively prime integers.

Given an array, arr , check if it is in its entirety relatively prime.

Example

For arr = [2, 3, 11], the output should be
breakDown1(arr) = true;
For arr = [2, 4, 5], the output should be
breakDown1(arr) = false.
*/

function breakDown1(arr) {
    let gcd = (j, k) => {
    if (!k) return j;
    return gcd(k, j % k);
    };
    
    return gcd(arr[0], arr[1]) > 1 || gcd(arr[0], arr[2]) > 1 ? false : true;  
                 
}
