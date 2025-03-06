let numbers = [4,8,7,8,1,9,6,9,15,3];
let uniqueNumber = [];
let counts = [];
for (let i = 0; i < numbers.length; i++) {
    let index = uniqueNumber.indexOf(numbers[i]);

    if (index === -1) {  
        uniqueNumber.push(numbers[i]);
        counts.push(1);
    } else {  
        counts[index]++;
    }
}
let minValue = Number.MAX_VALUE;
let maxCount = 0;

for (let i = 0; i < uniqueNumber.length; i++) {
    if (counts[i] > maxCount) {
        maxCount = counts[i];
        minValue = uniqueNumber[i];
    } else if (counts[i] === maxCount && minValue > uniqueNumber[i]) {
        minValue = uniqueNumber[i];
    }
}
document.write(minValue);