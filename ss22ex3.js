let number = prompt("Nhap mot day so:");
let isValid = true;
for (let i = 0; i < number.length; i++) {
    if (number[i] < '0' || number[i] > '9') {
        isValid = false;
        break;
    }
}
if (isValid) {
    let reversed = "";
    for (let i = number.length - 1; i >= 0; i--) {
        reversed += number[i];
    }
    console.log(reversed);
} else {
    console.log("Không hợp lệ");
}
