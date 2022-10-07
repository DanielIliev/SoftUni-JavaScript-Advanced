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

function charRange(firstCharacter, secondCharacter) {
    // Fetch the characters' codes in ASCII for the comparision
    let startIndex = firstCharacter.charCodeAt(0);
    let endIndex = secondCharacter.charCodeAt(0);
    let characters = [];
    
    // Check if the first character's index is greater or lesser than the second character's index
    if (startIndex < endIndex) {
        characters = fetchCharactersInRangeLeftToRight(startIndex, endIndex);
    } else if (startIndex > endIndex) {
        characters = fetchCharactersInRangeRightToLeft(startIndex, endIndex);
    }
    console.log(characters.join(' '));

    function fetchCharactersInRangeLeftToRight(char1Index, char2Index) {
        let charactersArray = [];
        for (let index = char1Index + 1; index < char2Index; index++) {
            charactersArray.push(String.fromCharCode(index));
        }
        return charactersArray;
    }

    function fetchCharactersInRangeRightToLeft(char1Index, char2Index) {
        let charactersArray = [];
        for (let index = char2Index + 1; index < char1Index; index++) {
            charactersArray.push(String.fromCharCode(index));
        }
        return charactersArray;
    }

}
// charRange('C', '#');

function oddAndEvenSum(number) {
    // Convert the received number to a string
    numbersString = String(number);

    // Print out the sums of the odds and even digits in the required format
    console.log(`Odd sum = ${sumOddNumbers(numbersString)}, Even sum = ${sumEvenNumbers(numbersString)}`);

    function sumOddNumbers(numbersString) {
        let oddDigitsSum = 0;
        for (let index = 0; index < numbersString.length; index++) {
            if (Number(numbersString[index]) % 2 != 0) {
                oddDigitsSum += Number(numbersString[index]);
            }
        }
        return oddDigitsSum;
    }

    function sumEvenNumbers(numbersString) {
        let evenDigitsSum = 0;
        for (let index = 0; index < numbersString.length; index++) {
            if (Number(numbersString[index]) % 2 == 0) {
                evenDigitsSum += Number(numbersString[index]);
            }
        }
        return evenDigitsSum;
    }
}
// oddAndEvenSum(3495892137259234);

function palindrome(numbers) {
    // We save the length of the fixed array for better performance
    let numbersArrayLength = numbers.length;

    for (let index = 0; index < numbersArrayLength; index++) {
        // We parse the number to a String, reverse and join it back for the required comparision
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
    
    let isValid = true;

    if (checkPasswordLengthViolation(passString) == false) {
        console.log('Password must be between 6 and 10 characters');
        isValid = false;
    }

    if (checkCharactersViolation(passString) == false) {
        console.log('Password must consist only of letters and digits');
        isValid = false;
    }

    if (checkDigitsViolation(passString) == false) {
        console.log('Password must have at least 2 digits');
        isValid = false;
    }

    if (isValid) {
        console.log('Password is valid');
    }

    function checkPasswordLengthViolation(passwordString) {

        let isValidLength = false;
        let passwordStringLength = passwordString.length;

        if (passwordStringLength >= 6 && passwordStringLength <= 10) {
            isValidLength = true;
        }

        return isValidLength;
    }

    function checkCharactersViolation(passwordString) {

        let hasValidCharacters = true;
        let passwordStringLength = passwordString.length;

        for (let index = 0; index < passwordStringLength; index++) {
            let currentChar = passwordString[index];
            if (currentChar < 'A' || currentChar > 'Z') {
                if (currentChar < 'a' || currentChar > 'z') {
                    if (currentChar < '0' || currentChar > '9') {
                        hasValidCharacters = false;
                    }
                }
            }
        }

        return hasValidCharacters;
    }

    function checkDigitsViolation(passwordString) {

        let hasRequiredDigitsCount = false;
        let digitsCount = 0;
        let passwordStringLength = passwordString.length;

        for (let index = 0; index < passwordStringLength; index++) {
            if (passwordString[index] >= '0' && passwordString[index] <= '9') {
                digitsCount++;
            }
        }

        if (digitsCount >= 2) {
            hasRequiredDigitsCount = true;
        }

        return hasRequiredDigitsCount;
    }
}
// passwordValidator('logIn');

function matrix(number) {
    
    for (let index = 1; index <= number; index++) {
        console.log(`${generateRow(number)}`);
    }

    function generateRow(number) {
        let output = '';

        for (let index = 1; index <= number ; index++) {
            output += `${number} `;
        }

        return output;
    }
}
matrix(3);

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

    // Loaded is const as it shouldn't change througout the program
    const loaded = Number(status);
    let loading = [];

    // Pushing the required loading status format
    loading.push(`${status}% [`);

    // Pushing the required number of % for the print format
    for (let index = 0; index < loaded / 10; index++) {
        loading.push('%');
    }

    // Check how many dots are required for the print format
    if (status != 100) {
        for (let index = loaded / 10; index < 10; index++) {
            loading.push('.');
        }
    }

    loading.push(']');

    // Printing the required result in the specified format based on the loading status
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