function bombNumbers(numbers, specialArray) {
    // Fetch the values array
    let numbersArray = numbers;
    // Fetch the special number with their power
    let specialNumber = specialArray[0];
    let specialNumberPower = specialArray[1];

    for (let index = 0; index < numbersArray.length; index++) {
        if (numbersArray[index] == specialNumber) {
            for (let index1 = 1; index1 <= specialNumberPower; index1++) {
                if (index - index1 < 0) {
                    break;
                } else {
                    numbersArray[index - index1] = 0;
                }
            }
            for (let index1 = 1; index1 <= specialNumberPower; index1++) {
                if (index + index1 > numbersArray.length) {
                    break;
                } else {
                    numbersArray[index + index1] = 0;
                }
            }
            numbersArray[index] = 0;
        }
    }

    let sum = numbersArray.reduce((a, b) => a + b);
    console.log(sum);

}

bombNumbers(
    [1, 4, 4, 2, 8, 9, 1],
    [9, 3]
);