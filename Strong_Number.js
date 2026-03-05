/*WAP to check whether a number is Strong Number or Not*/
let n = 145;
let original = n;
let sum = 0;

function facti(d) {
    let factorial = 1;
    for (let i = 1; i <= d; i++){
        factorial *= i;
    }
    return factorial;
}

while (n > 0){
    let d = n % 10;
    sum += facti(d);
    n = Math.floor(n / 10);
}

if (sum == original){
    console.log("Strong Number");
}
else{
    console.log("Not Strong Number");
}
