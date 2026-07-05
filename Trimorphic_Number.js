/* WAP to implement Trimorphic Number */

let num = 125;

function findCube(num) {
    let cube = num * num * num;
    checkTrimorphic(num, cube);
}

function checkTrimorphic(num, cube) {
    if (String(cube).endsWith(num)) console.log(`${num} is Trimorphic`);
    else console.log(`${num} is Not Trimorphic`);
}

findCube(num);