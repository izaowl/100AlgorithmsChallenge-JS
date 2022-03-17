function allLongestStrings(str) {
  const extractedSubstrings =  str.toString().split(',');
  const lengthOfSubstrings = extractedSubstrings.map(function (subString){
    return subString.length;
  });
  
  const longestSubstring = Math.max(...lengthOfSubstrings);
  const result = []
  for (var iteratingSubstrings = 0; iteratingSubstrings < extractedSubstrings.length; iteratingSubstrings++){
    if (extractedSubstrings[iteratingSubstrings].length === longestSubstring)
       result.push(extractedSubstrings[iteratingSubstrings])
  }
  return result;
}

module.exports = allLongestStrings;