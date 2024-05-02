/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let res = dividend/divisor
    if(res > 0)
       return Math.floor(res) > (2**31)-1 ? (2**31)-1:Math.floor(res)
    else
       return Math.ceil(res)
};