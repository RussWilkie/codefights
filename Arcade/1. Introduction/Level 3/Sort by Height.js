/*
Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.

Example

For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].
*/

function sortByHeight(a) { 
    //Take out -1's, sort, put back in -1's
    
    let arr = a.filter((element) =>{
        return element!==-1;
    }).sort((b,c) =>{
            return b-c;
    });
    
    let index = 0;
    for(let i = 0; i<a.length; i++){
        if(a[i] !== -1){
            a[i] = arr[index];
            index++;
        }       
    }
    
    return a;
}
