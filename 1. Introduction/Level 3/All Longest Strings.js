/*
Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].
*/

function allLongestStrings(inputArray) {
    //Get each element's length than find Max
    const longest = Math.max(...inputArray
            .map(a => {return a.length;})
            );
    
    return inputArray.filter((a) =>{
         return a.length === longest;
    });
}
