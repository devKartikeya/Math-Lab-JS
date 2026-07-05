/* WAP to check whether a number is Evil or Not */
let num = 21;

function convertToBinary(num) {
    checkEvil(num, num.toString(2));
}

function checkEvil(num, binary) {
    let countOfOnes = 0;
    for (const element of String(binary)) {
        if (element == 1) countOfOnes++;
    }
    if (countOfOnes % 2 == 0) console.log(`${num} is Evil Number`);
    else console.log(`${num} is Odious Number`);
}
convertToBinary(num)