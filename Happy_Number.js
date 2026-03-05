/*WAP to check whether a number is Happy or Not*/

let n = 19;

function happy(n){

    let sum = 0;

    while (n > 0){
        let d = n % 10;
        sum += d*d;
        n = Math.floor(n/10);
    }

    if (sum == 1){
        console.log("Happy Number");
        return;
    }

    if (sum == 4){
        console.log("Not Happy Number");
        return;
    }

    happy(sum);
}

happy(n);
