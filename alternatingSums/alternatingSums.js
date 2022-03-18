function alternatingSums(data){
    
    var isodd = true;
    var queue1 = 0;
    var queue2 = 0;
    for (let len = 0;  len < data.length; len ++ ){
      if (isodd)
      {
          queue1 += data[len];
      } else{
          queue2 += data[len];
      }
      isodd = !isodd;
    }
        var ret = [queue1, queue2];
        return ret;
}
module.exports = alternatingSums;
console.log(alternatingSums([50, 60, 60, 45, 70]))