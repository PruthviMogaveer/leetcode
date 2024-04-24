/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let res = [];
    nums.sort((a, b) => a - b);

    for (let start = 0; start < nums.length - 2; start++) {
        if (start > 0 && nums[start] === nums[start - 1]) continue;

        let mid = start + 1;
        let end = nums.length - 1;

        while (mid < end) {
            let sum = nums[start] + nums[mid] + nums[end];
            if (sum === 0) {
                res.push([nums[start], nums[mid], nums[end]]);
                mid++;
                end--;

                while (mid < end && nums[mid] === nums[mid - 1]) mid++;
                while (mid < end && nums[end] === nums[end + 1]) end--;
            } else if (sum < 0) {
                mid++;
            } else {
                end--;
            }
        }
    }

    return res;
};