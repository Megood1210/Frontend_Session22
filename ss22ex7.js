let numbers=[4,8,7,8,1,9,6,9,15,3];
let a = numbers.length;
for (let i = 0; i < a - 1; i++) {
    for (let j = 0; j < a - 1 - i; j++) {
        if (numbers[j] > numbers[j + 1]) { 
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}
console.log(numbers);