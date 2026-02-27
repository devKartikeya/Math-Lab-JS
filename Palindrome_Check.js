function checkPalindrome(x) {
    const temp = x;
    let rev = 0;
    while (x > 0) {
        let d = x % 10;
        rev = (rev * 10) + d;
        x = Math.floor(x / 10);
    }

    if (rev === temp) {
        return "Palindrome";
    } else {
        return "Not Palindrome";
    }
}

let x = 454;
console.log(`${x} is ${checkPalindrome(x)}`);