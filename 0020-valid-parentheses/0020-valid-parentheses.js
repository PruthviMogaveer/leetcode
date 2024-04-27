/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let brackets = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    let stack = []
    for (char of s) {
        if (char == "(" || char == "{" || char == "[") {
            stack.push(char)
        }
        else {
            if (!stack) return false
            let i = stack.pop()
            if (brackets[i] == char)
                continue
            else
                return false
        }
    }
    return stack.length == 0
};