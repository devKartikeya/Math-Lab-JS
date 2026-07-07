/* WAP to implement Square Frer number */

function isSquareFree(n) {
    if (n <= 0) return false;
    if (n === 1) return true; 
    if (n % 2 === 0) {
        n = n / 2;
        if (n % 2 === 0) return false; // Divisible by 4 (2 squared)
    }

    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) {
            n = n / i;
            if (n % i === 0) return false; // Divisible by i squared
        }
    }
    
    return true;
}

// Examples
console.log(isSquareFree(10));
