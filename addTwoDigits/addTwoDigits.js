function splitNum(num){
    const n = num.toString();
    const digits = n.split('');
    return parseInt(digits[0])+parseInt(digits[1])
}

module.exports = splitNum;