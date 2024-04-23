/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 1 || strs[0] == "") return strs[0]
    strs = strs.sort()
    let len = strs[0].length > strs[strs.length-1].length ? strs[0].length : strs[strs.length-1].length
    let res = 0 

    for(let i=0;i<len;i++){
        if(strs[0][i] == strs[strs.length-1][i])
            res+=1
        else
            return strs[0].slice(0,res)     
    }
    return strs[0].slice(0,res)
};