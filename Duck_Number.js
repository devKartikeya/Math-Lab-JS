/*WAP to check whether a number is Duck Number or Not*/

let str = "708";
let n = Number(str);

checkDuckNumber(n, str);

function checkDuckNumber(n, str){

if (str[0] == "0"){
    console.log(`${n} is NOT a Duck Number!`)
    return;
}

for (let i = 1; i < str.length; i++){
    if (str[i] == '0'){
        console.log(`${n} is a Duck Number!`)
        return;
    }
}

console.log(`${n} is NOT a Duck Number`)
}
