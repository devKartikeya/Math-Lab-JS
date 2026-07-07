/* WAP to implement Twin Primes */

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

function findTwinPrimes(limit) {
    console.log(`Twin prime pairs up to ${limit}:`);
    
    for (let i = 3; i <= limit - 2; i++) {
        if (isPrime(i) && isPrime(i + 2)) {
            console.log(`(${i}, ${i + 2})`);
        }
    }
}

// Execution
findTwinPrimes(100);
