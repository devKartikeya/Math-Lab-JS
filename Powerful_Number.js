/* WAP to implement Powerful Number */

function isPowerfulNumber(n) {
    if (n <= 0) return false;
    if (n === 1) return true; // 1 is conventionally considered a powerful number

    // Check for factor 2
    if (n % 2 === 0) {
        let count = 0;
        while (n % 2 === 0) {
            n = n / 2;
            count++;
        }
        if (count === 1) return false; // Must be divisible by 2^2 or higher
    }

    // Check for odd prime factors
    for (let factor = 3; factor * factor <= n; factor += 2) {
        if (n % factor === 0) {
            let count = 0;
            while (n % factor === 0) {
                n = n / factor;
                count++;
            }
            if (count === 1) return false; // Must be divisible by factor^2 or higher
        }
    }

    // If n is greater than 1, it's a remaining prime factor with a power of 1
    return n === 1;
}
console.log(isPowerfulNumber(36)); 
