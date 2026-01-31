/* You are given an array of characters letters that is sorted in non-decreasing order, and a character target.
There are at least two different characters in letters.

Return the smallest character in letters that is lexicographically greater than target.
If such a character does not exist, return the first character in letters.

 
Example 1:

Input: letters = ["c","f","j"], target = "a"
Output: "c"
Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.

Example 2:

Input: letters = ["c","f","j"], target = "c"
Output: "f"
Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'. */

// Give me the explanation of the problem and then the code solution with comments for better understanding.

// Explanation:
// The problem requires us to find the smallest character in a sorted array of characters that is lexicographically greater than a given target character. If no such character exists (i.e., if the target is greater than or equal to the last character in the array), we should return the first character in the array.
    
// Here is the code solution with comments for better understanding:        

function nextGretestLetter(letters, target) {
    // Loop through each character in the letters array
    for (let i = 0; i < letters.length; i++) {
        // Check if the current character is greater than the target
        if (letters[i] > target) {
            // If it is, return that character as it is the smallest character greater than target
            return letters[i];

        }

    }
    // If no character is greater than target, return the first character in letters
    return letters[0];
}

// Example usage:
console.log(nextGretestLetter(["c", "f", "j"], "a")); // Output: "c"
console.log(nextGretestLetter(["c", "f", "j"], "c")); // Output: "f"