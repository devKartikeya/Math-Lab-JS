/* WAP to check whether a number is Smith number or Not */

let pfSum = 0;
let num = 378;

const extractsum = (num) => {
    return String(num).split('').map(Number).reduce((a,b) => a+b, 0);
}

const primeCheck = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const extractFactors = (num) => {
    let primeFactors = [];
    let n = num;
    for (let i = 2; i <= n; i++) {
        while (n % i === 0 && primeCheck(i)) {
            primeFactors.push(i);
            n = n / i;
        }
    }
    return primeFactors;
}

let sum = extractsum(num);
let primeFactors = extractFactors(num);

for (const pf of primeFactors) {
    pfSum += extractsum(pf);
}

console.log('Digit sum of number:', sum);
console.log('Digit sum of prime factors:', pfSum);

if (pfSum === sum && !primeCheck(num)) {
    console.log(`${num} is a Smith Number`);
} else {
    console.log(`${num} is NOT a Smith Number`);
}
