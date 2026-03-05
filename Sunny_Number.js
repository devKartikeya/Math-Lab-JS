/*WAP to check whether a Number is a Sunny Number or Not*/

let n = 63;
let num = n + 1;

let sqrt = Math.sqrt(num);
if (Number.isInteger(sqrt)){
    console.log(`${n} is a Sunny Number`)
} else {
    console.log(`${n} is NOT a Sunny Number`)
}
