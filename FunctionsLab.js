// function formatGrade(grade) {
//     if (grade < 3) {
//         console.log('Fail (2)');
//     } else if (grade >= 3 && grade < 3.50) {
//         console.log(`Poor (${grade.toFixed(2)})`);
//     } else if (grade >= 3.5 && grade < 4.50) {
//         console.log(`Good (${grade.toFixed(2)})`);
//     } else if (grade >= 4.5 && grade < 5.5) {
//         console.log(`Very good (${grade.toFixed(2)})`);
//     } else if (grade >= 5.5) {
//         console.log(`Excellent (${grade.toFixed(2)})`);
//     }
// }
// formatGrade(2.8);

// function mathPower(digit, power) {
//     console.log(Math.pow(digit, power));
// }
// mathPower(2, 8);

// function repeatString(str, repetitions) {
//     let repeatedStrings = '';
//     for (let index = 0; index < repetitions; index++) {
//         repeatedStrings+=str;
//     }
//     console.log(repeatedStrings);
// }
// repeatString('abc', 3);

// function orders(product, quantity) {
//     let total = 0;
//     switch (product) {
//         case 'water':
//             total = quantity;
//             break;
//         case 'coffee':
//             total = quantity * 1.5;
//             break;
//         case 'coke':
//             total = quantity * 1.4;
//             break;
//         case 'snacks':
//             total = quantity * 2;
//             break;

//         default:
//             break;
//     }
//     console.log(total.toFixed(2));
// }
// orders('water', 5);

// function simpleCalculator(numOne, numTwo, operator) {
//     let total = 0;
//     let firstNumber = Number(numOne);
//     let secondNumber = Number(numTwo);
//     switch(operator) {
//         case 'add':
//             total+= firstNumber+secondNumber;
//         break;
//         case 'subtract':
//             total+= firstNumber-secondNumber;
//         break;
//         case 'multiply':
//             total+= firstNumber*secondNumber;
//         break;
//         case 'divide':
//             total+= firstNumber/secondNumber;
//         break;
//     }
//     console.log(total);
// }
// simpleCalculator(5, 2, 'multiply');

// function signCheck(num1, num2, num3) {
//     let isPositive = true;
//     if (num1 > 0 && num2 > 0 && num3 > 0) { // All positive
//         isPositive = true;
//     } else if (num1 < 0 && num2 < 0 && num3 < 0) { // All negative
//         isPositive = false;
//     } else if (num1 > 0 && num2 > 0 && num3 < 0) { // 3 negative
//         isPositive = false;
//     } else if (num1 > 0 && num2 < 0 && num3 < 0) { // 2 & 3 negative
//         isPositive = true;
//     } else if (num1 < 0 && num2 > 0 && num3 > 0) { // 1 negative
//         isPositive = false;
//     } else if (num1 < 0 && num2 > 0 && num3 < 0) { // 1 & 3 negative
//         isPositive = true;
//     } else if (num1 < 0 && num2 < 0 && num3 > 0) { // 1 & 2 negative
//         isPositive = true;
//     } else if (num1 > 0 && num2 < 0 && num3 > 0) { // 2 negative
//         isPositive = false;
//     }

//     if (isPositive) {
//         console.log('Positive');
//     } else {
//         console.log('Negative');
//     }
// }
// signCheck(-5, 1, -1);