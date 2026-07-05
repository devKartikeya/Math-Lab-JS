/* WAP to swap two numbers */ 

let a = 5;
let b = 10;

console.log(`Original Values -> a: ${a}, b: ${b}\n`);

// -------------------------------------------------------------
// Method 1: Array Destructuring
// -------------------------------------------------------------
// This is the cleanest standard approach available in modern JavaScript.
// It creates a temporary array implicitly and unpacks it.
[a, b] = [b, a];
console.log(`1. Array Destructuring -> a: ${a}, b: ${b}`); // a: 10, b: 5


// -------------------------------------------------------------
// Method 2: Temporary Variable 
// -------------------------------------------------------------
// Back to original for testing: a = 10, b = 5
let temp = a;
a = b;
b = temp;
console.log(`2. Temporary Variable -> a: ${a}, b: ${b}`); // a: 5, b: 10


// -------------------------------------------------------------
// Method 3: Arithmetic Operators
// -------------------------------------------------------------
// Works exclusively for numbers. 
a = a + b; // a becomes 15 (5 + 10)
b = a - b; // b becomes 5  (15 - 10)
a = a - b; // a becomes 10 (15 - 5)
console.log(`3. Addition/Subtraction -> a: ${a}, b: ${b}`); // a: 10, b: 5


// -------------------------------------------------------------
// Method 4: Bitwise XOR Operator
// -------------------------------------------------------------
// Operates on the binary representation of 32-bit integers.
a = a ^ b; 
b = a ^ b; 
a = a ^ b; 
console.log(`4. Bitwise XOR -> a: ${a}, b: ${b}`); // a: 5, b: 10


// -------------------------------------------------------------
// Method 5: Immediate Array Hack (Single-line Trick)
// -------------------------------------------------------------
// An inline array trick that utilizes JavaScript's execution order.
// 'a' gets reassigned to 'b', but the old value of 'a' is retrieved via index [0].
b = [a, a = b][0];
console.log(`5. Immediate Array Hack -> a: ${a}, b: ${b}`); // a: 10, b: 5
