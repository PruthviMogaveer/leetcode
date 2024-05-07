/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const n = nums.length;
    const seen = {};

    // Store all positive integers in the hash table
    for (const num of nums) {
        if (num > 0) {
            seen[num] = true;
        }
    }

    // Find the smallest positive integer that is missing
    for (let i = 1; i <= n; i++) {
        if (!seen[i]) {
            return i;
        }
    }

    // If all positive integers up to n are present, return n+1
    return n + 1;
};