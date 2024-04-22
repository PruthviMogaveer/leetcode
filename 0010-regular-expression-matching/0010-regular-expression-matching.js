/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    p= p.replaceAll('**', '');
    return RegExp("^" + p + "$").test(s);
};