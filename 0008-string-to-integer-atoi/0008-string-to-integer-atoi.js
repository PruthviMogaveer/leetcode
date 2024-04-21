/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let i = 0;
    while (s[i] === ' ') {
        i++;
    }
    let sign = 1;
    if (s[i] === '-' || s[i] === '+') {
        sign = s[i] == '-' ? -1 : 1;
        i++;
    }
    let num = ""
    while (s[i] >= '0' && s[i] <= '9') {
        num = num + s[i];
        i++;
    }
    num *= sign;
    if (num < -(2 ** 31) || num > (2 ** 31) - 1) {
        return num < -(2 ** 31) ? -(2 ** 31) : (2 ** 31) - 1
    }

    return num;
};