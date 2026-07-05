/* WAP to check whether a number is Perfect Cube or Not */

function isPerfectCube(n) {
    const root = Math.round(Math.cbrt(n));
    return root * root * root === n;
}

console.log(isPerfectCube(64));
