function validTime(time){
    const clock = time.split(':');
    const hours = clock[0].split();
    const minutes = clock[1].split();

    if (((hours>0 )&& (hours<25 )) && (minutes<61))
      return true;
    else 
      return false;

}
module.exports = validTime;

//validTime('13:58');