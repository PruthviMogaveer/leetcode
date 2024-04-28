/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let stack = []
    let res = []
    function backtrack (openB, closeB){
        if(openB == n && closeB == n){
            res.push(stack.join(""))
            return 
        }

        if(openB < n){
            stack.push("(")
            backtrack(openB+1,closeB)
            stack.pop()
        }

        if(closeB < openB){
            stack.push(")")
            backtrack(openB, closeB+1)
            stack.pop()
        }

    }
    backtrack(0,0)
    return res
};