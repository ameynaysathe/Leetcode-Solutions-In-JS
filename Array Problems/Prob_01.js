// 1. Two Sum (Optimal)
// Find indices of two numbers that add to target. also explain the problem and provide code solution with comments for better understanding.

/* 
You are given an array of integers nums and an integer target.

Return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
*/

// Explanation:
// The problem requires us to find two distinct numbers in an array that add up to a given target value. We need to return the indices of these two numbers. A common approach to solve this problem efficiently is to use a hash map (or object) to store the numbers we have

function twoSum(nums, target) {
    // Create a map to store the numbers and their indices
    const numMap = new Map();

    // Loop through each number in the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement that we need to find
        const complement = target - nums[i];  // complement = 9 - 2; 7

        // Check if the complement exists in the map
        if (numMap.has(complement)) {
            // If it exists, return the indices of the complement and the current number
            return [numMap.get(complement), i];
        }
        
        // If not found, add the current number and its index to the map
        numMap.set(nums[i], i);

    }
    // If no solution is found, return an empty array (though the problem guarantees one solution)
    return [];
}

// Example usage:
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4,], 6));     // Output: [1, 2] encountered so far along with their indices. This allows us to check in constant time whether the complement of the current number (i.e., target - current number) has already been seen. If it has, we have found our two numbers and can return their indices immediately.