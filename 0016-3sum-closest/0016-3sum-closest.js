/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let closestSum = nums[0]+nums[1]+nums[2]

    for (let start = 0; start < nums.length - 2; start++) {
        let mid = start + 1;
        let end = nums.length - 1;

        while (mid < end) {
            let sum = nums[start] + nums[mid] + nums[end];

            if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
                closestSum = sum;
            }

            if (sum === target) {
                return target; // Found exact match, no need to continue searching
            } else if (sum < target) {
                mid++;
            } else {
                end--;
            }
        }
    }

    return closestSum;
};