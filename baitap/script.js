function calculatePrimeSum() {
    var numberA = parseInt(document.getElementById('numberA').value); 
    //Khác với phương thức parseFloat(), phương thức parseInt() sẽ chỉ trả về một số nguyên kể cả khi chuỗi được bắt đầu bằng một số thập phân, 
    //chính vì điểm khác nhau trên, nếu chuỗi được bắt đầu bằng một dấu chấm, phương thức sẽ trả về NaN.
    var numberB = parseInt(document.getElementById('numberB').value);

    if (isNaN(numberA) || isNaN(numberB) || numberA >= numberB) {
        alert("điều kiện: a < b");
        return;
    }

    var sum_snt = 0;

    for (var i = numberA; i <= numberB; i++) {
        if (isPrime(i)) {
            sum_snt += i;
        }
    }

    document.getElementById('sum').innerHTML = "Tổng các số nguyên tố trong khoảng a và b là: " + sum_snt;
}

function isPrime(number) {
    if (number < 2) return false;
    else {
        for (var i =2;i<=Math.sqrt(number);i++){
            if (number % i === 0){
                return false;
            }
        }
    }
    return true; 
}
//dấu === và object Math trong Javascript