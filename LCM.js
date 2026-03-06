/*WAP to find LCM of two numbers*/
let a = 12;
let b = 18;

let max = (a > b) ? a : b;

while (true){
    if (max % a == 0 && max % b == 0){
        console.log("LCM =", max);
        break;
    }
    max++;
}
