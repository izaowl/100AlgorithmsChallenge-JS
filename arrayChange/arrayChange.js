function arrayChange(inputArray) {
    var moves=0;
    for(var i=0;i<inputArray.length;i++){
        if(inputArray[i]-inputArray[i+1]>=0)
            if(inputArray[i]-inputArray[i+1]==0){
                moves++;
                inputArray[i+1]++;
            }else{
                moves+=inputArray[i]-inputArray[i+1]+1;
                inputArray[i+1]+=inputArray[i]-inputArray[i+1]+1;
            }
    }
    return moves;
}
// inputArray1 = [5,5,4];
// inputArray2 = [1,8,6];
// console.log(arrayChange(inputArray1));
// console.log(arrayChange(inputArray2));
module.exports = arrayChange