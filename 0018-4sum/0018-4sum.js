/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
   nums.sort((a, b) => a - b); // Sort the array to easily skip duplicates
    const quadruplets = [];

    // Iterate over the array
    for (let i = 0; i < nums.length - 3; i++) {
        // Skip duplicate values
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        for (let j = i + 1; j < nums.length - 2; j++) {
            // Skip duplicate values
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }

            let left = j + 1;
            let right = nums.length - 1;

            while (left < right) {
                const total = nums[i] + nums[j] + nums[left] + nums[right];

                if (total === target) {
                    quadruplets.push([nums[i], nums[j], nums[left], nums[right]]);

                    // Skip duplicate values
                    while (left < right && nums[left] === nums[left + 1]) {
                        left++;
                    }
                    while (left < right && nums[right] === nums[right - 1]) {
                        right--;
                    }

                    left++;
                    right--;
                } else if (total < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return quadruplets;
};