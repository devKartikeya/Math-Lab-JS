/*WAP to check whether a number is Lychrel or Not*/

function reverse(n){
    let str = String(n)
    let num = Number(str.split("").reverse().join(""));
    
    return num;
}

function checkLychrel(n){
    let i;

    for(i = 0; i < 50; i++){   // iteration limit
        let rev = reverse(n);
        n = n + rev;

        if(n == reverse(n)){
            console.log("Palindrome found:", n);
            return;
        }
    }

    console.log("Suspected Lychrel Number");
}

let n = 56;
checkLychrel(n);
