/*WAP to find HCF of two Numbers*/

let n = 12;
let m = 78;

let factors = [];

for (let i = 0; i <= n; i++) {
    if (n % i == 0 && m % i == 0) {
        factors.push(i);
    }
}

let HCF = Math.max(...factors);
console.log(`HCF of ${n} and ${m} is ${HCF}`);