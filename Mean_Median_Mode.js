/* WAP to implement Mean, Median and Mode */

const values = [142, 20, 333, 4, 23, 45, 12, 5, 5, 78, 45, 90, 120];

function findMean(values, length) {
    // Calculates the correct arithmetic floor mean
    console.log(Math.floor(values.reduce((acc, curr) => acc + curr, 0) / length));
}

function findMedian(values, length) {
    // Use a shallow copy slice() to avoid mutating the original array order
    const sorted = values.slice().sort((a, b) => a - b);
    const mid = Math.floor(length / 2);

    if (length % 2 === 1) {
        console.log(`The median is: ${sorted[mid]}`);
    } else {
        console.log(`The medians are: ${sorted[mid - 1]} and ${sorted[mid]}`);
    }
}

function findMode(values) {
    const freq = values.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});

    let maxFreq = 0;
    let modes = [];

    for (const key in freq) {
        if (freq[key] > maxFreq) {
            maxFreq = freq[key];
            modes = [Number(key)]; // Reset with new highest frequency
        } else if (freq[key] === maxFreq) {
            modes.push(Number(key)); // Append if it's a tie
        }
    }

    console.log(`The mode(s): ${modes.join(', ')}`);
}

findMean(values, values.length);
findMedian(values, values.length);
findMode(values);