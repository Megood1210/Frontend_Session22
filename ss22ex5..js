let numbers=[1,4,7,8,3];
let evenSum = 0;
let oddSum = 0;
for (const num of numbers) {
    if(num % 2 === 0){
        evenSum += num;
    }else {
        oddSum += num;
    }
}
document.write(`Tổng các số chẵn: ${evenSum}`);
document.write("<br>");
document.write(`Tổng các số lẻ: ${oddSum}`);
