/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(nums.includes(target)){
        let start = nums.indexOf(target)
        for(let i=nums.length-1;i>=0;i--){
            if(nums[i]==target){
                end = i
                break;
            }
        }
        return [start, end]
    }
    else
        return [-1,-1]
};