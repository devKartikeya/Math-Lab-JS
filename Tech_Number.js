/*WAP to find whether a Number is Tech or Not*/

function checkTechNumber(n){
    let count = 0;
    let temp = n;
    
    while(n>0){
        let d = n % 10;
        count++;
        n = Math.floor(n/10);
    }
    if (count % 2!== 0){
        return "Not a Tech Number";
    }
    
    let numStr = String(temp);
    let numStrLength = numStr.length/2;
    
    let first_half = numStr.slice(0,numStrLength);
    let last_half = numStr.slice(numStrLength);
    
    let sum = Number(first_half) + Number(last_half);
    
    let square = sum*sum;
    
    if (square == temp){
        return "Tech Number";
    } 
    return "Not a Tech Number";
}

let n = 9801; 
console.log(checkTechNumber(n));
