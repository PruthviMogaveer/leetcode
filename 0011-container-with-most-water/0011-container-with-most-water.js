/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let start = 0
    let end = height.length - 1
    let result = 0
    // if (height.length == 2) return Math.min(...height)

    while(start<end){
        if (Math.min(height[start], height[end]) * (end - start) > result) 
            result = Math.min(height[start], height[end]) * (end - start)
        if(height[start] <= height[end])
            start++
        else
            end--
    }
    return result
};