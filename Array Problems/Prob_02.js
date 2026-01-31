// 2. Maximum Subarray Sum (Kadane’s)
/* Given an integer array nums, find the contiguous subarray (containing at least one number)
which has the largest sum and return its sum. Input and output example*/

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Explanation:
// The problem requires us to find the contiguous subarray within a one-dimensional array of numbers that has the largest sum.
//  We can solve this problem efficiently using Kadane's Algorithm, which involves iterating through the array while keeping track of the current subarray sum and the maximum sum found so far. 
// If the current subarray sum becomes negative, we reset it to zero since starting a new subarray from the next element could yield a higher sum.

function maxSubArray(nums) {
    // Initialize variables to keep track of the maximum sum and current sum
    let maxSum = nums[0];
    let currentSum = 0;

    // Iterate through each number in the array
    for (let num of nums) {
        // Add the current number to the current sum
        currentSum += num;

        
        // Update maxSum if currentSum is greater than maxSum
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
        
        // If currentSum becomes negative, reset it to 0   
        if (currentSum < 0) {
            currentSum = 0;
        }
    }

    // Return the maximum sum found
    return maxSum;
}

// Example usage:
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
console.log(maxSubArray([1])); // Output: 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // Output: 23   

