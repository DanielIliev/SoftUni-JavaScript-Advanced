function subtract() {
    let number1 = document.getElementById('firstNumber').value;
    let number2 = document.getElementById('secondNumber').value;

    const resultValue = document.createTextNode(number1 - number2);

    document.getElementById('result').appendChild(resultValue);
}