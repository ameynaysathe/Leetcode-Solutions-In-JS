// 3. Product of Array Except Self.
/* Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation. */

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Explanation:
// The problem requires us to create a new array where each element at index i is the product of all elements in the input array except the one at index i. 
// We can achieve this without using division by calculating the products of all elements to the left and right of each index
//  separately and then multiplying these two products together for each index.

function productExceptSelf(nums) {
    const n = nums.length;
    const answer = new Array(n).fill(1);

    // Calculate the left products
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = leftProduct; // Store the product of all elements to the left of index i
        leftProduct *= nums[i]; // Update leftProduct to include the current element
    }

    // Calculate the right products and multiply with the left products
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= rightProduct; // Multiply with the product of all elements to the right of index i
        rightProduct *= nums[i]; // Update rightProduct to include the current element
    }

    return answer; // Return the final product array        
}

// Example usage:       
console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // Output: [0, 0, 9, 0, 0]
