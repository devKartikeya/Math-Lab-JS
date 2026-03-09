/*WAP to check whether a Number is Abundant or Not*/

function checkAbundant(n) {
    let divisors = [];
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i == 0) {
            divisors.push(i);
        }
    }
    divisors.forEach(element => {
        sum += element;
    });
    if (sum > n) {
        console.log(`${n} is an Abundant Number`);
    } else {
        console.log(`${n} is Not an Abundant Number`);
    }
}

checkAbundant(18)