let numbers=[2,5,7,4,1,8,6,2,5,7];
let a = +prompt("Nhap mot so");
let count = 0;
for (let i = 0; i< numbers.length; i++) {
   if(numbers[i] === a){
    count++;
   }
}
if (count > 0){
    document.write(`Số ${a} xuất hiện ${count} lần trong mảng`);
} else {
    document.write(`Số ${a} không tồn tại trong mảng`);
}