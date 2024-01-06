// Code mẫu
// function numberOneTriangle() {
//     var inputNumber = parseInt(document.getElementById('inputNumber').value);

//     if (isNaN(inputNumber) || inputNumber < 1 || inputNumber > 10) {
//         alert("Please enter a valid number between 1 and 10.");
//         return;
//     }

//     var resultDiv = document.getElementById('result');
//     // set 1 biến vào id result, rồi in ra biến đó 
//     resultDiv.innerHTML = ""; // Clear previous results

//     for (var i = 1; i <= inputNumber; i++) {
//         var row = "";
//         for (var j = 1; j <= i; j++) {
//             row += "1 ";
//         }
//         resultDiv.innerHTML += row + "<br>";
//     }
// }

// Tự code lại
function numberOneTriangle(){
var inputNumber = document.getElementById("inputNumber").value; 

if (isNaN(inputNumber) || inputNumber <1 || inputNumber > 10){
    alert("Hãy nhập giá trị nguyên trong khoảng 1-10"); 
    return 0;
}

var result = document.getElementById("result");
document.getElementById("result").innerHTML = ""; 

for (i=1;i<=inputNumber;i++){
    var ki_tu ="";
    for (j=1;j<=i;j++){
        ki_tu += "* "; 
    }
    result.innerHTML += ki_tu + "<br>"; 
}
}