/* You are given two integers num1 and num2.

In one operation, you can choose integer i in the range [0, 60] and subtract 2i + num2 from num1.

Return the integer denoting the minimum number of operations needed to make num1 equal to 0.

If it is impossible to make num1 equal to 0, return -1.

 

Example 1:

Input: num1 = 3, num2 = -2
Output: 3
Explanation: We can make 3 equal to 0 with the following operations:
- We choose i = 2 and subtract 22 + (-2) from 3, 3 - (4 + (-2)) = 1.
- We choose i = 2 and subtract 22 + (-2) from 1, 1 - (4 + (-2)) = -1.
- We choose i = 0 and subtract 20 + (-2) from -1, (-1) - (1 + (-2)) = 0.
It can be proven, that 3 is the minimum number of operations that we need to perform.
Example 2:

Input: num1 = 5, num2 = 7
Output: -1
Explanation: It can be proven, that it is impossible to make 5 equal to 0 with the given operation. */

// Explanation:
// The problem requires us to determine the minimum number of operations needed to reduce num1 to zero by repeatedly subtracting values of the form (2^i + num2) for i in the range [0, 60]. If it is not possible to reach zero, we should return -1. The approach involves using a breadth-first search (BFS) strategy to explore all possible states of num1 after each operation until we either reach zero or exhaust all possibilities.

// Here is the code solution with comments for better understanding:

function minOperations(num1, num2) {
    // Initialize a queue for BFS and a set to track visited states
    const queue = [];
    const visited = new Set();

    // Start with the initial value of num1 and 0 operations
    queue.push({ value: num1, operations: 0 });
    visited.add(num1);

    while (queue.length > 0) {
        const { value, operations } = queue.shift();

        // If we reach zero, return the number of operations
        if (value === 0) {
            return operations;
        }

        // Explore all possible values by subtracting (2^i + num2) for i in [0, 60]
        for (let i = 0; i <= 60; i++) {
            const nextValue = value - (Math.pow(2, i) + num2);

            // If the next value is non-negative and not visited, add it to the queue
            if (nextValue >= 0 && !visited.has(nextValue)) {
                visited.add(nextValue);
                queue.push({ value: nextValue, operations: operations + 1 });
            }

        }

    }
    // If we exhaust all possibilities without reaching zero, return -1
    return -1;
}

// Example usage:       

console.log(minOperations(3, -2)); // Output: 3
console.log(minOperations(5, 7));  // Output: -1    