/* You are given three integers x, y, and z, representing the positions of three people on a number line:

x is the position of Person 1.
y is the position of Person 2.
z is the position of Person 3, who does not move.
Both Person 1 and Person 2 move toward Person 3 at the same speed.

Determine which person reaches Person 3 first:

Return 1 if Person 1 arrives first.
Return 2 if Person 2 arrives first.
Return 0 if both arrive at the same time.
Return the result accordingly. */

// Explanation:
// The problem requires us to determine which of the two persons (Person 1 or Person 2) reaches a third person (Person 3) first on a number line. We can calculate the distance each person needs to travel to reach Person 3 and compare these distances. The person with the smaller distance will reach Person 3 first. If both distances are equal, it means they arrive at the same time.

function whoReachesFirst(x, y, z) {
    // Calculate the distance from Person 1 to Person 3
    const distancePerson1 = Math.abs(z - x);
    // Calculate the distance from Person 2 to Person 3
    const distancePerson2 = Math.abs(z - y);

    // Compare the distances and return the appropriate result
    if (distancePerson1 < distancePerson2) {
        return 1; // Person 1 arrives first
    } else if (distancePerson2 < distancePerson1) {
        return 2; // Person 2 arrives first
    } else {
        return 0; // Both arrive at the same time
    }
}

// Example usage:
console.log(whoReachesFirst(1, 2, 3)); // Output: 1 
console.log(whoReachesFirst(2, 1, 3)); // Output: 2
console.log(whoReachesFirst(1, 3, 2)); // Output: 0