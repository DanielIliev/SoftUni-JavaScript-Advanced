function addOrSubtract(entries) {
    let originalTotal = 0;
    let modifiedTotal = 0;
    for (let index = 0; index < entries.length; index++) {
        originalTotal += entries[index];
        if (entries[index] % 2 == 0) {
            entries[index] += index;
        } else if (entries[index] % 2 != 0) {
            entries[index] -= index;
        }
        modifiedTotal += entries[index];
    }
    console.log(entries);
    console.log(`${originalTotal}\n${modifiedTotal}`);
}

function commonElements(arr1, arr2) {
    for (let index = 0; index < arr1.length; index++) {
        for (let index1 = 0; index1 < arr2.length; index1++) {
            if (arr1[index] === arr2[index1]) {
                console.log(arr1[index]);
            }
        }
    }
}

function mergeArrays(arr1, arr2) {
    let mergedArr = [];
    for (let index = 0; index < arr1.length; index++) {
        if (index % 2 == 0) {
            mergedArr.push(Number(arr1[index]) + Number(arr2[index]));
        } else if (index % 2 != 0) {
            mergedArr.push(String(arr1[index] + arr2[index]));
        }
    }
    console.log(mergedArr.join(' - '));
}

function rotation(arr, rotations) {
    let numbers = arr;
    for (let index = 0; index < rotations; index++) {
        let current = numbers.shift();
        numbers[numbers.length] = current;
    }
    console.log(numbers.join(' '));
}

function maxNumber(values) {
    let numbers = values;
    let maxArray = [];
    let isMax = true;
    for (let index = 0; index < numbers.length; index++) {
        for (let index1 = index; index1 < numbers.length; index1++) {
            if (numbers[index] <= numbers[index1 + 1]) {
                isMax = false;
            }
        }
        if (isMax) maxArray.push(numbers[index]);
        isMax = true;
    }
    console.log(maxArray.join(' '));
}

function equalSums(input) {
    let step = leftSum = rightSum = 0;
    let comboFound = false;
    while (step != input.length) {
        for (let index = 0; index < step; index++) {
            leftSum += input[index];
        }
        for (let index = step + 1; index < input.length; index++) {
            rightSum += input[index];
        }
        if (leftSum == rightSum) {
            console.log(step);
            comboFound = true;
            break;
        }
        leftSum = rightSum = 0;
        step++;
    }
    if (comboFound === false) {
        console.log("no");
    }
}

// Below is one of the ugliest codes ever written, but it works
function maxSequence(values) {
    let numbers = values;
    let sequences = [];
    for (let index = 0; index < numbers.length; index++) {
        let currentSequence = [];
        currentSequence.push(numbers[index]);
        for (let index1 = index + 1; index1 < numbers.length; index1++) {
            if (numbers[index] == numbers[index1]) {
                currentSequence.push(numbers[index1]);
            } else {
                break;
            }
        }
        sequences.push(currentSequence);
    }
    let maxLength = 0;
    let sequenceId = 0;
    for (let index = 0; index < sequences.length; index++) {
        if (maxLength < sequences[index].length) {
            maxLength = sequences[index].length;
            sequenceId = index;
        }
    }
    console.log(sequences[sequenceId].join(' '));
}

// maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
// maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);
// maxSequence([1, 1, 1, 2, 3, 1, 3, 3]);
// maxSequence([4, 4, 4, 4]);

function magicSum(arr, num) {
    let numbers = arr;
    let magicalSum = num;
    for (let index = 0; index < numbers.length; index++) {
        for (let index1 = index + 1; index1 < numbers.length; index1++) {
            if (numbers[index] + numbers[index1] == magicalSum) {
                console.log(`${numbers[index]} ${numbers[index1]}`);
            }
        }
    }
}
magicSum(
    [1, 7, 6, 2, 19, 23],
    8
);