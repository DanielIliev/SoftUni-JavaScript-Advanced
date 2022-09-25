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
            evenSum+= Number(stringified[index]);
        } else {
            oddSum+= Number(stringified[index]);
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);