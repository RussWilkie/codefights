/*
Given an array of integers, write a function that determines whether the array contains any duplicates. Your function should return true if any element appears at least twice in the array, and it should return false if every element is distinct.

Example

For a = [1, 2, 3, 1], the output should be
containsDuplicates(a) = true.

There are two 1s in the given array.

For a = [3, 1], the output should be
containsDuplicates(a) = false.

The given array contains no duplicates.
*/
function containsDuplicates(a) {
    //--------------------
    //Possible Solution 1(First Submission): 
    //Sort array then compare adjacent elements(JS Unique)
    //--------------------
    
    /*const sorted = a.sort();
    for(let i=0; i<sorted.length; i++){
        if(sorted[i] === sorted[i+1]){
            return true;
        }
    }
    return false;
    */
    
    //--------------------
    //Possible Solution 2(Second Submission):
    //Convert to set and see if sizes match(JS Unique, slightly faster)
    //--------------------
    
    //return (new Set(a)).size !== a.length;
    
    
    //--------------------
    //Possible Solution 3(Final Submission):
    //Create empty hash, then as you check elements, build hash table while
    //checking for unique properties
    //--------------------
    let obj = {};
    
    for(let i= 0; i<a.length; i++){
        if(obj.hasOwnProperty(a[i])){
            return true;
        }
        obj[a[i]] = 0;
    }
    return false;
}
