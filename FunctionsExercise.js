// Task 1
function smallestOfThree(num1, num2, num3) {
    let numbers = Array.from(arguments);
    for (let index = 0; index < numbers.length; index++) {
        for (let index1 = 0; index1 < numbers.length - index - 1; index1++) {
            if (numbers[index1] > numbers[index1 + 1]) {
                let temp = numbers[index1];
                numbers[index1] = numbers[index1 + 1];
                numbers[index1 + 1] = temp;
            }
        }
    }
    console.log(numbers[0]);
}
// smallestOfThree(600,342,123);

// Task 2
function addOrSubtract(num1, num2, num3) {
    const add = function (arg1, arg2) {
        return arg1 + arg2;
    }
    const subtract = function (total, arg3) {
        return total - arg3;
    }
    console.log(subtract(add(num1, num2), num3));
}
// addOrSubtract(23,6,10);

function charRange(char1, char2) {
    let char1Index = char1.charCodeAt(0);
    let char2Index = char2.charCodeAt(0);
    let characters = [];
    if (char1Index < char2Index) {
        for (let index = char1Index + 1; index < char2Index; index++) {
            characters.push(String.fromCharCode(index));
        }
    } else if (char1Index > char2Index) {
        for (let index = char2Index + 1; index < char1Index; index++) {
            characters.push(String.fromCharCode(index));
        }
    }
    console.log(characters.join(' '));
}
// charRange('C', '#');

function oddAndEvenSum(number) {
    stringified = String(number);
    oddSum = evenSum = 0;
    for (let index = 0; index < stringified.length; index++) {
        if (Number(stringified[index]) % 2 == 0) {
            evenSum += Number(stringified[index]);
        } else {
            oddSum += Number(stringified[index]);
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
// oddAndEvenSum(1000435);

function palindrome(numbers) {
    for (let index = 0; index < numbers.length; index++) {
        let currentNumber = String(numbers[index]).split('').reverse().join('');
        if (numbers[index] == currentNumber) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}
// palindrome([123,323,421,121]);

function passwordValidator(passString) {
    let lengthViolation = false;
    let digitsViolation = false;
    let characterTypeViolation = false;
    let isValid = true;
    let digitsCount = 0;
    if (passString.length < 6 || passString.length > 10) {
        lengthViolation = true;
        isValid = false;
    }
    for (let index = 0; index < passString.length; index++) {
        if (passString[index] >= '0' && passString[index] <= '9') {
            digitsCount++;
        }
    }
    if (digitsCount < 2) {
        digitsViolation = true;
        isValid = false;
    }
    for (let index = 0; index < passString.length; index++) {
        let currentChar = passString[index];
        if (currentChar < 'A' || currentChar > 'Z') {
            if (currentChar < 'a' || currentChar > 'z') {
                if (currentChar < '0' || currentChar > '9') {
                    characterTypeViolation = true;
                    isValid = false;
                }
            }
        }
    }
    if (lengthViolation) {
        console.log('Password must be between 6 and 10 characters');
    }
    if (characterTypeViolation) {
        console.log('Password must consist only of letters and digits');
    }
    if (digitsViolation) {
        console.log('Password must have at least 2 digits');
    }
    if (isValid) {
        console.log('Password is valid');
    }
}
// passwordValidator('MyPass123');

function matrix(size) {
    let row = [];
    for (let index = 0; index < size; index++) {
        for (let index1 = 0; index1 < size; index1++) {
            row.push(size);
        }
        console.log(row.join(' '));
        row = [];
    }
}
// matrix(3);

function perfectNumber(number) {
    let dividers = [];
    let dividersSum = 0;
    for (let index = 1; index < number; index++) {
        if (number % index == 0) {
            dividers.push[index];
            dividersSum += index;
        }
    }
    if (number == dividersSum) {
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.');
    }
}
// perfectNumber(28);

function loadingBar(status) {
    const loaded = Number(status);
    let loading = [];
    loading.push(`${status}% [`);
    for (let index = 0; index < loaded / 10; index++) {
        loading.push('%');
    }
    if (status != 100) {
        for (let index = loaded / 10; index < 10; index++) {
            loading.push('.');
        }
    }
    loading.push(']')
    if (status != 100) {
        console.log(loading.join(''));
        console.log('Still loading...');
    } else {
        console.log('100% Complete!');
        loading[0] = '[';
        console.log(loading.join(''));
    }
}
// loadingBar(100);

function factorialDivision(num1, num2) {
    let factorial1 = 1;
    let factorial2 = 1;
    for (let index = 1; index <= num1; index++) {
        factorial1*=index;
    }
    for (let index = 1; index <= num2; index++) {
        factorial2*=index;
    }
    console.log((factorial1/factorial2).toFixed(2));
}
// factorialDivision(6,2);