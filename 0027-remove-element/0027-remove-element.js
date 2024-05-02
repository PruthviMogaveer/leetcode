/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    nums = nums.sort((a,b) => a-b)
    let pos = nums.indexOf(val)
    console.log(pos)

    let delN = 0
    for(let i=pos;i<nums.length;i++){
        if(pos == -1) break;
        if(nums[pos] == nums[i])
            delN += 1
        else
            break;
    }

    nums.splice(pos,delN)
};