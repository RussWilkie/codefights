/*
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.
*/

function adjacentElementsProduct(inputArray) {
    // General Solution
    let max_Product = Number.NEGATIVE_INFINITY;
    for(let i = 1; i<inputArray.length; i++){
        if(inputArray[i] * inputArray[i-1] > max_Product){
            max_Product = inputArray[i] * inputArray[i-1];
        }
    }
    return max_Product;
    
    //JS-Specific Solution
    //return Math.max(...arr.slice(1).map((x,i)=>[x*arr[i]]))
}


