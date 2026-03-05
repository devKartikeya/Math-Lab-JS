/*WAP to check whether a number is Perfect Number or Not*/

let n = 496;
let sum = 0;

for (let i = 1; i < n; i++){
   if ( n % i == 0) {
       sum += i;
   }
}

if (sum == n){
    console.log(`${n} is PERFECT!`)
} else {
    console.log(`${n} is NOT PERFECT!`)
}
