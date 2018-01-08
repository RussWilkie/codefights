/*
Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".
*/

function commonCharacterCount(s1, s2) {
  let commonChar = 0;
  const arr = s2.split('');
  
  for(let i = 0; i<s1.length; i++){
    if(arr.indexOf(s1[i]) !== -1){
      commonChar++;
      //Remove each found index
      arr.splice(arr.indexOf(s1[i]),1);
    }
  }
  return commonChar;
}
/* =====================================================
 * Below solution not mine, just putting in for reference:
 * 
 * -Replace first instance of each found variable with a 
 *  character, than return the number instances that
 *  character appears
 * =====================================================
 * for (var i = 0; i < s1.length; i++) {
        s2 = s2.replace(s1[i], "!");
    }
    return s2.replace(/[^!]/g, "").length;
 */