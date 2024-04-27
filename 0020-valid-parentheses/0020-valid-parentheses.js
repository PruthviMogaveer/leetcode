/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if(s.length == 1) return false
    let brackets = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    let stack = []
    for (char of s) {
        if (char == "(" || char=="{" || char=="[") {
            stack.push(char)
        }
        else {
            if (!stack) return false
            else {
                let i = stack.pop()
                if (brackets[i] == char)
                    continue
                else
                    return false
            }
        }
    }
    return stack.length == 0?true:false
};