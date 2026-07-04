const num = 9195;
const stored_num = num;

function check_kaprekar(num, i = 0, stored_num = num) {
    if (String(num).slice(0, 1) === String(num).slice(1, 2)) {
        console.log(`${num} cannot be fit in the Kaprekar's constant loop...`);
        return false;
    }

    i++;
    if (i == 7) {
        console.log(`${stored_num} cannot be fit in the Kaprekar's constant loop...`);
        return false;
    }

    let digits = String(num).padStart(4, '0').split('');
    let output = Number(digits.sort().reverse().join('')) - Number(digits.sort().join(''));

    if (output == 6174) {
        console.log(`${stored_num} is part of Kaprekar's constant loop...`);
        return true;
    }

    return check_kaprekar(output, i, stored_num);
}

check_kaprekar(num);
