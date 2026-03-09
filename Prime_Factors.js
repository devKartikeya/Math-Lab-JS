/*WAP to find all Prime Factors of a number*/

function primeFactors(n){

    let arr = [];

    for (let i = 2; i <= Math.sqrt(n); i++){

        while (n % i == 0){
            arr.push(i);
            n = n / i;
        }

    }

    if (n > 1){
        arr.push(n);
    }

    console.log(arr);
}

primeFactors(12);
