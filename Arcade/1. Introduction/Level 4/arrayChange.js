/*
You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

Example

For inputArray = [1, 1, 1], the output should be
arrayChange(inputArray) = 3.
*/

function arrayChange(inputArray) {
    let diff, moves = 0;
    
    for(let i= 0; i<inputArray.length-1; i++){
       if(inputArray[i+1] <=inputArray[i]){
            diff =  inputArray[i] - inputArray[i+1] +1  
            inputArray[i+1] += diff;
            moves += diff;
        }
    }
    
    return moves;
}

