function signCheck(num1, num2, num3) {
    let isPositive = true;
    if (num1 > 0 && num2 > 0 && num3 > 0) {
        isPositive = true;
    } else if (num1 < 0 && num2 < 0 && num3 < 0) {
        isPositive = false;
    } else if (num1 > 0 && num2 > 0 && num3 < 0) {
        isPositive = false;
    } else if (num1 > 0 && num2 < 0 && num3 < 0) {
        isPositive = true;
    } else if (num1 < 0 && num2 > 0 && num3 > 0) {
        isPositive = false;
    } else if (num1 < 0 && num2 > 0 && num3 < 0) {
        isPositive = true;
    } else if (num1 < 0 && num2 < 0 && num3 > 0) {
        isPositive = true;
    } else if (num1 > 0 && num2 < 0 && num3 > 0) {
        isPositive = false;
    }

    if (isPositive) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}
signCheck(-5, 1, -1);