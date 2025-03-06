let number = prompt("Nhap mot day so:");
let numberArray=number.split("")
if(!isNaN(number)){
    let maxInNumbers = Math.max.apply(Math, numberArray); 
    document.write(maxInNumbers);
}else{
    document.write("dãy số không hợp lệ");
}