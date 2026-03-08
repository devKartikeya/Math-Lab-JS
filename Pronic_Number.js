/*WAP to find whether a number is Pronic or Not*/

function isPronic(n) {
    for (let i = 0; i <= n; i++) {
        if (i * (i + 1) === n) {
            return "Pronic Number";
        }
    }
    return "Not Pronic";
}

let n = 12;
console.log(isPronic(n));
