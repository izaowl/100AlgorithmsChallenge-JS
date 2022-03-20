function alphabetSubsequence(string){
  const array = string.split('');
  for (i=0; i<array.length; i++){ 
    if (array.length===0)
      return "Your string is empty"
    else if (array[i]===array[i+1])
      return false;
  }
  return true;
}
module.exports = alphabetSubsequence;

console.log(alphabetSubsequence('zab'))
// console.log(alphabetSubsequence('effg'))
// console.log(alphabetSubsequence('cdce'))
// console.log(alphabetSubsequence('ace'))
// console.log(alphabetSubsequence('bxz'))
