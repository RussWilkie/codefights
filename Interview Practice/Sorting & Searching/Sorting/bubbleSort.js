/*
Given an array of integers, sort it.

Example

For items = [2, 4, 1, 5], the output should be
bubbleSort(items) = [1, 2, 4, 5].
*/
function bubbleSort(items) {

  var swap = function(firstIndex, secondIndex){
      var temp = items[firstIndex];
      items[firstIndex] = items[secondIndex];
      items[secondIndex] = temp;
  }

  var len =  items.length ,
      i, j, stop;

  for (i = 0; i < len; i++){
      for (j = 0, stop = len - i; j < stop - 1; j++){
          if (items[j] > items[j + 1]){
              swap(j, j + 1);
          }
      }
  }

  return items;
}
