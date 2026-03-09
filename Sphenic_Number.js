/*WAP to check whether a Number is Sphenic or Not*/

function checkSphenic(n) {
    let array = [...new Set(primeFactors(n))];

    for (let i = 0; i < array.length; i++) {
        let product = 1;
        let element = array[i];
        for (let j = 1; j < array.length; j++) {
            product = element * array[j] * array[j + 1];
            if (product == n) {
                console.log(`${n} is Sphenic Number !`);
                return;
            }
        }
    }
    console.log(`${n} is Not a Sphenic Number !`);
}

function primeFactors(n) {
    let arr = [];

    for (let i = 2; i <= Math.sqrt(n); i++) {

        while (n % i == 0) {
            arr.push(i);
            n = n / i;
        }

    }

    if (n > 1) {
        arr.push(n);
    }

    return arr;
}

checkSphenic(78);