function absoluteValuesSumMinimization(a){
      
    const isEven = a.length;
    if (isEven%2 === 0)
      return a[(isEven/2) - 1 ];
    else
      return a[Math.floor(a.length/2)];
}

module.exports = absoluteValuesSumMinimization;

console.log(absoluteValuesSumMinimization([2, 4, 7, 9, 20]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));