/*WAP to find whether a number is Disarium or Not*/

let n = 135;
let original = n;

let str = String(n);
let sum = 0;

for (let i = 0; i < str.length; i++){
    let digit = Number(str[i]);
    sum += digit ** (i + 1);
}

if (sum == original){
    console.log("Disarium Number");
}
else{
    console.log("Not Disarium Number");
}
