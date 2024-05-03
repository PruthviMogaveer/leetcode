/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let n = nums.length
    let index = -1

    const swap = (index, i) => {
        let temp = nums[index]
        nums[index] = nums[i]
        nums[i] = temp
        return nums
    }

    const reverse = (start, end) => {
        while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
    }

    for(let i=n-2;i>=0;i--){
        if(nums[i] < nums[i+1]){
            index = i;
            break;
        }
    }

    for(let i=n-1;i>=0;i--){
        if(nums[index]<nums[i]){
            nums = swap(index,i)
            break;
        }
    }

    if(index != -1) 
        reverse(index+1, n-1)
    else
        nums.reverse()

};