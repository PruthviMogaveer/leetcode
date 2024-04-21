/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let strlen = 0;
    let substr =""
    for(let i=0; i<s.length; i++){
        if(!substr.includes(s.charAt(i))){
            substr+=s.charAt(i)
        }
        else{
            strlen < substr.length && (strlen = substr.length);
            substr.length>1 && (substr = substr.slice(substr.indexOf(s.charAt(i))+1,i) + s.charAt(i))
        }
    }
    return substr.length > strlen ? substr.length : strlen
};