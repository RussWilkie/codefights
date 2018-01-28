/*
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example

For

picture = ["abc",
           "ded"]
the output should be

addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]
*/

function addBorder(picture) {
    const length = picture[0].length + 2;  
    const border = '*'.repeat(length);
    
    picture = picture.map(s => {
        return '*'.concat(s).concat('*');
    })

    picture.unshift(border);
    picture.push(border);
    
    return picture;
}
