/* WAP to implement Sophie Germain Prime */

function isPrime(num) {
    for (let i = 2; i < num; i++) if (num % i == 0) return false;
    return true;
}

function isSophieGermainPrime(num) {
    const res = isPrime((2 * num) + 1);
    if (res) console.log(`${num} is Sophie Germain Prime`);
    else console.log(`${num} is not a Sophie Germain Prime`);
};

let num = 53;
const res = isPrime(num);

if (res) isSophieGermainPrime(num);
else console.log(`${num} is not a Prime Number`);