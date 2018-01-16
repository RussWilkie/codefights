/*
You have been given a string s, which is supposed to be a sentence. However, someone forgot to put spaces between the different words, and for some reason they capitalized the first letter of every word. Return the sentence after making the following amendments:

Put a single space between the words.
Convert the uppercase letters to lowercase.
Example

For s = "CodefightsIsAwesome", the output should be
amendTheSentence(s) = "codefights is awesome";
For s = "Hello", the output should be
amendTheSentence(s) = "hello".
*/
function amendTheSentence(s) {  
    //---------------
    //Solution #1: My Submission
    //Create empty string. Find uppercase characters,
    //convert to lowercase, then build string as such.
    //---------------
    const arr = s.split('');
    let str = arr[0].toLowerCase();
    
    for(let i=1; i<arr.length; i++){
        str += arr[i] === arr[i].toUpperCase() ?
            ' ' + arr[i].toLowerCase() : arr[i];
    
    }
    return str;
    
    //---------------
    //Solution #2: Using Regex***
    //***Not my submission, using as reference
    //---------------
    
    //return s.replace(/([A-Z])/g, " $1").toLowerCase().trim();
}
