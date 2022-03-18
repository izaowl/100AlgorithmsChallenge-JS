function almostIncreasingSequence(seq) {
   const counting = 0;
   for(count = 1; seq[count]< seq.length; count++)
     if(seq[count] < seq[count-1])
       count++;
    if (count >1)
      return false;
    else
      return true;
 }

//  const almost = (arr) => {
//    let unwantedElements = 0;
//    for(let i = 0; i < arr.length - 1; i++){
//       if(arr[i] >= arr[i+1]){
//          unwantedElements++;
//          if(unwantedElements > 1){
//             return false;
//          };
//       };
//    };
//    return true;
// };

module.exports = almostIncreasingSequence;

console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));